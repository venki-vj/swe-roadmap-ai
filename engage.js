/* ============================================================
   SkillForge — Engagement engine
   ------------------------------------------------------------
   Gamification (XP, levels, streaks, badges, daily goal) +
   interactive "Check your understanding" quizzes.

   Pure vanilla JS. State persists in localStorage under one
   profile shared across BOTH roadmaps (dev + AI), so every
   lesson and quiz feeds a single sense of progress.

   Decoupled from app.js via DOM CustomEvents:
     - "sf:course"   {course}  -> render the quiz for a course
     - "sf:complete" {course}  -> a course was marked complete
     - "sf:home"               -> returned to the catalog
   app.js fires these; engage.js listens and reacts. If this
   file is absent the site still works — it just won't gamify.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- tiny DOM helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function todayKey() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function daysBetween(aKey, bKey) {
    function toDate(k) { var p = k.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
    return Math.round((toDate(bKey) - toDate(aKey)) / 86400000);
  }

  /* ============================================================
     PROFILE STATE
     ============================================================ */
  var KEY = "skillforge_profile_v1";
  var DAILY_GOAL = 150; // XP per day to "close the ring"

  var defaults = {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    lastActive: null,      // YYYY-M-D of last XP-earning day
    freezes: 2,            // streak protection tokens
    badges: {},            // id -> ISO date earned
    quizzes: {},           // courseId -> { best: 0..1, passed: bool, perfect: bool }
    daily: { day: null, xp: 0 }, // progress toward today's goal
  };

  function load() {
    try {
      var p = JSON.parse(localStorage.getItem(KEY));
      if (!p || typeof p !== "object") return Object.assign({}, defaults);
      // fill any missing keys (forward-compatible)
      for (var k in defaults) if (!(k in p)) p[k] = defaults[k];
      return p;
    } catch (e) { return Object.assign({}, defaults); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} }
  var P = load();

  /* ---------- levels ---------- */
  // Gentle ramp: XP needed to FINISH level L is 200 + (L-1)*100.
  // Cumulative is a quadratic, so early levels come fast (dopamine),
  // later ones take longer (mastery).
  function xpToReach(level) {
    // total XP required to BE at the start of `level`
    var total = 0;
    for (var L = 1; L < level; L++) total += 200 + (L - 1) * 100;
    return total;
  }
  function levelFromXp(xp) {
    var L = 1;
    while (xp >= xpToReach(L + 1)) L++;
    return L;
  }
  var TITLES = [
    "Curious Beginner", "Code Cadet", "Syntax Scout", "Loop Wrangler",
    "Function Forger", "Bug Hunter", "Stack Climber", "Systems Tinkerer",
    "Platform Pilot", "Kernel Whisperer", "Architect", "Grandmaster Engineer",
  ];
  function titleFor(level) { return TITLES[Math.min(level - 1, TITLES.length - 1)]; }

  function levelInfo() {
    var lvl = levelFromXp(P.xp);
    var floor = xpToReach(lvl);
    var ceil = xpToReach(lvl + 1);
    var into = P.xp - floor;
    var span = ceil - floor;
    return { level: lvl, into: into, span: span, pct: Math.round((into / span) * 100), title: titleFor(lvl) };
  }

  /* ============================================================
     BADGES
     ============================================================ */
  var BADGES = [
    { id: "first-step", icon: "👟", name: "First Step", desc: "Complete your first lesson." },
    { id: "five-done", icon: "🖐️", name: "High Five", desc: "Complete 5 lessons." },
    { id: "ten-done", icon: "💪", name: "Double Digits", desc: "Complete 10 lessons." },
    { id: "phase-master", icon: "🏆", name: "Phase Master", desc: "Finish every lesson in a phase." },
    { id: "quiz-first", icon: "🧠", name: "Quiz Rookie", desc: "Pass your first quiz." },
    { id: "quiz-whiz", icon: "🎓", name: "Quiz Whiz", desc: "Pass 5 quizzes." },
    { id: "flawless", icon: "💯", name: "Flawless", desc: "Score 100% on a quiz." },
    { id: "perfectionist", icon: "✨", name: "Perfectionist", desc: "Ace 3 quizzes with 100%." },
    { id: "streak-3", icon: "🔥", name: "On a Roll", desc: "Keep a 3-day streak." },
    { id: "streak-7", icon: "🌟", name: "Week Warrior", desc: "Keep a 7-day streak." },
    { id: "streak-30", icon: "🚀", name: "Unstoppable", desc: "Keep a 30-day streak." },
    { id: "goal-day", icon: "🎯", name: "Goal Crusher", desc: "Hit your daily XP goal." },
    { id: "level-5", icon: "⚡", name: "Level 5", desc: "Reach level 5." },
    { id: "android-ace", icon: "🤖", name: "Android Ace", desc: "Finish the Android Platform & Kernel phase." },
    { id: "ai-builder", icon: "🧬", name: "AI Builder", desc: "Build your own GPT from scratch." },
  ];
  var BADGE_BY_ID = {};
  BADGES.forEach(function (b) { BADGE_BY_ID[b.id] = b; });

  function hasBadge(id) { return !!P.badges[id]; }
  function awardBadge(id) {
    if (hasBadge(id) || !BADGE_BY_ID[id]) return false;
    P.badges[id] = new Date().toISOString();
    save();
    return true;
  }

  /* ============================================================
     XP, STREAK, DAILY GOAL
     ============================================================ */
  function touchStreak() {
    var t = todayKey();
    if (P.lastActive === t) return; // already counted today
    if (P.lastActive == null) {
      P.streak = 1;
    } else {
      var gap = daysBetween(P.lastActive, t);
      if (gap === 1) {
        P.streak += 1;
      } else if (gap === 2 && P.freezes > 0) {
        P.freezes -= 1; // a freeze covers one missed day
        P.streak += 1;
        toast("🧊", "Streak freeze used — your streak is safe!");
      } else {
        P.streak = 1;
      }
    }
    P.lastActive = t;
    if (P.streak > P.bestStreak) P.bestStreak = P.streak;
    if (P.streak >= 3) awardBadge("streak-3");
    if (P.streak >= 7) awardBadge("streak-7");
    if (P.streak >= 30) awardBadge("streak-30");
  }

  function bumpDaily(amount) {
    var t = todayKey();
    if (P.daily.day !== t) P.daily = { day: t, xp: 0 };
    var before = P.daily.xp;
    P.daily.xp += amount;
    if (before < DAILY_GOAL && P.daily.xp >= DAILY_GOAL) {
      if (awardBadge("goal-day")) celebrateBadge("goal-day");
      toast("🎯", "Daily goal complete! 🎉");
      burst();
    }
  }

  // Core XP grant. reason is a short label; opts.silent skips the toast.
  function grantXp(amount, reason, opts) {
    opts = opts || {};
    var beforeLvl = levelFromXp(P.xp);
    P.xp += amount;
    touchStreak();
    bumpDaily(amount);
    var afterLvl = levelFromXp(P.xp);
    save();
    if (!opts.silent) toast("⭐", "+" + amount + " XP · " + reason);
    if (afterLvl > beforeLvl) onLevelUp(afterLvl);
    if (afterLvl >= 5) awardBadge("level-5");
    refreshChrome();
  }

  function onLevelUp(level) {
    burst();
    showLevelUp(level);
    refreshChrome();
  }

  /* ============================================================
     EVENT HANDLERS (fired by app.js)
     ============================================================ */
  function completedCount() {
    try {
      var done = JSON.parse(localStorage.getItem("skillforge_completed_v1")) || {};
      return Object.keys(done).filter(function (k) { return done[k]; }).length;
    } catch (e) { return 0; }
  }

  function onComplete(course) {
    if (!course) return;
    grantXp(120, "Lesson complete");
    var n = completedCount();
    if (n >= 1) { if (awardBadge("first-step")) celebrateBadge("first-step"); }
    if (n >= 5) { if (awardBadge("five-done")) celebrateBadge("five-done"); }
    if (n >= 10) { if (awardBadge("ten-done")) celebrateBadge("ten-done"); }
    checkPhaseBadges(course);
  }

  function checkPhaseBadges(course) {
    var data = window.ROADMAP;
    if (!data || !course || !course._phase) return;
    var done = {};
    try { done = JSON.parse(localStorage.getItem("skillforge_completed_v1")) || {}; } catch (e) {}
    var phase = course._phase;
    var all = phase.courses.every(function (c) { return done[c.id]; });
    if (all) {
      if (awardBadge("phase-master")) celebrateBadge("phase-master");
      // track-specific flavor badges
      if (/android/i.test(phase.title) && /kernel|platform/i.test(phase.title)) {
        if (awardBadge("android-ace")) celebrateBadge("android-ace");
      }
    }
    // AI builder badge: completing the "build your own GPT" course
    if (course.id === "build-gpt" || course.id === "llm-from-scratch") {
      if (awardBadge("ai-builder")) celebrateBadge("ai-builder");
    }
  }

  function recordQuiz(courseId, correct, total) {
    var ratio = total ? correct / total : 0;
    var prev = P.quizzes[courseId] || { best: 0, passed: false, perfect: false };
    var firstPass = !prev.passed && ratio >= 0.7;
    var firstPerfect = !prev.perfect && ratio === 1;
    prev.best = Math.max(prev.best, ratio);
    if (ratio >= 0.7) prev.passed = true;
    if (ratio === 1) prev.perfect = true;
    P.quizzes[courseId] = prev;
    save();

    var passedCount = Object.keys(P.quizzes).filter(function (k) { return P.quizzes[k].passed; }).length;
    var perfectCount = Object.keys(P.quizzes).filter(function (k) { return P.quizzes[k].perfect; }).length;

    if (firstPass) {
      grantXp(60, "Quiz passed");
      if (awardBadge("quiz-first")) celebrateBadge("quiz-first");
      if (passedCount >= 5) { if (awardBadge("quiz-whiz")) celebrateBadge("quiz-whiz"); }
    } else if (ratio >= 0.7) {
      grantXp(15, "Quiz retaken", { silent: false });
    }
    if (firstPerfect) {
      grantXp(20, "Perfect score!");
      if (awardBadge("flawless")) celebrateBadge("flawless");
      if (perfectCount >= 3) { if (awardBadge("perfectionist")) celebrateBadge("perfectionist"); }
    }
    return { passedCount: passedCount, perfectCount: perfectCount };
  }

  /* ============================================================
     QUIZ RENDERING  ("Check your understanding")
     ============================================================ */
  function renderQuiz(course) {
    // Find or create a mount point inside the player info column.
    var info = $(".player-info");
    if (!info) return;
    var mount = $("#quizMount");
    if (!mount) {
      mount = el("div", "", "");
      mount.id = "quizMount";
      info.appendChild(mount);
    }
    mount.innerHTML = "";

    var quiz = course && course.quiz;
    if (!quiz || !quiz.length) return; // no quiz authored for this course

    var prev = P.quizzes[course.id];
    var header = el("h3", "section-h quiz-h",
      "🧠 Check your understanding" +
      (prev && prev.passed ? ' <span class="quiz-passed-tag">✓ passed</span>' : ""));
    mount.appendChild(header);
    mount.appendChild(el("p", "quiz-intro",
      "A quick " + quiz.length + "-question check. Answer them to lock in what you just watched and earn XP — instant feedback, no penalty for retries."));

    var card = el("div", "quiz");
    card.id = "quizCard";
    mount.appendChild(card);

    renderQuizQuestions(course, card);
  }

  function renderQuizQuestions(course, card) {
    var quiz = course.quiz;
    var answers = new Array(quiz.length).fill(-1);
    var locked = false;
    card.innerHTML = "";

    quiz.forEach(function (item, qi) {
      var q = el("div", "quiz-q");
      q.appendChild(el("div", "quiz-q__num", "Question " + (qi + 1) + " of " + quiz.length));
      q.appendChild(el("div", "quiz-q__text", esc(item.q)));
      var opts = el("div", "quiz-opts");
      item.options.forEach(function (optText, oi) {
        var b = el("button", "quiz-opt");
        b.type = "button";
        b.innerHTML = '<span class="quiz-opt__key">' + String.fromCharCode(65 + oi) + "</span>" +
          '<span class="quiz-opt__txt">' + esc(optText) + "</span>";
        b.addEventListener("click", function () {
          if (locked) return;
          answers[qi] = oi;
          Array.prototype.forEach.call(opts.children, function (c) { c.classList.remove("selected"); });
          b.classList.add("selected");
          submitBtn.disabled = answers.indexOf(-1) !== -1;
        });
        opts.appendChild(b);
      });
      q.appendChild(opts);
      var fb = el("div", "quiz-fb hidden");
      fb.setAttribute("data-q", qi);
      q.appendChild(fb);
      card.appendChild(q);
    });

    var foot = el("div", "quiz-foot");
    var submitBtn = el("button", "btn btn--primary", "Check answers");
    submitBtn.type = "button";
    submitBtn.disabled = true;
    foot.appendChild(submitBtn);
    var result = el("div", "quiz-result");
    foot.appendChild(result);
    card.appendChild(foot);

    submitBtn.addEventListener("click", function () {
      if (locked) { // acting as "Try again"
        renderQuizQuestions(course, card);
        return;
      }
      locked = true;
      var correct = 0;
      quiz.forEach(function (item, qi) {
        var qEl = card.children[qi];
        var optEls = qEl.querySelectorAll(".quiz-opt");
        Array.prototype.forEach.call(optEls, function (b, oi) {
          b.classList.add("disabled");
          if (oi === item.answer) b.classList.add("correct");
          if (oi === answers[qi] && oi !== item.answer) b.classList.add("wrong");
        });
        var ok = answers[qi] === item.answer;
        if (ok) correct++;
        var fb = qEl.querySelector(".quiz-fb");
        fb.classList.remove("hidden");
        fb.classList.add(ok ? "good" : "bad");
        fb.innerHTML = (ok ? "✓ Correct. " : "✗ Not quite. ") +
          (item.explain ? esc(item.explain) : "");
      });

      var ratio = correct / quiz.length;
      recordQuiz(course.id, correct, quiz.length);
      var pct = Math.round(ratio * 100);
      result.innerHTML =
        '<div class="quiz-score ' + (ratio >= 0.7 ? "pass" : "fail") + '">' +
          "You scored <b>" + correct + "/" + quiz.length + "</b> (" + pct + "%) — " +
          (ratio === 1 ? "perfect! 💯" : ratio >= 0.7 ? "passed! 🎉" : "almost — review and retry.") +
        "</div>";
      submitBtn.textContent = "Try again ↺";
      if (ratio >= 0.7) burst();
      // refresh the side curriculum / dashboard quiz markers
      document.dispatchEvent(new CustomEvent("sf:profilechanged"));
    });
  }

  /* ============================================================
     HEADER CHROME (XP / level / streak chips)
     ============================================================ */
  function ensureChrome() {
    var bar = $(".topbar__inner");
    if (!bar || $("#sfStats")) return;
    var stats = el("div", "sf-stats");
    stats.id = "sfStats";
    stats.innerHTML =
      '<button class="sf-chip sf-chip--streak" id="sfStreak" title="Daily streak">' +
        '<span class="sf-chip__icon">🔥</span><span class="sf-chip__val" id="sfStreakVal">0</span>' +
      "</button>" +
      '<button class="sf-chip sf-chip--level" id="sfLevel" title="Your level &amp; XP">' +
        '<span class="sf-chip__icon">⭐</span>' +
        '<span class="sf-chip__lvl" id="sfLevelVal">Lv 1</span>' +
        '<span class="sf-chip__xpbar"><span class="sf-chip__xpfill" id="sfXpFill"></span></span>' +
      "</button>";
    // place it just before the "Continue learning" button if present
    var cont = $("#continueBtn");
    if (cont) bar.insertBefore(stats, cont);
    else bar.appendChild(stats);

    $("#sfLevel").addEventListener("click", openProfileModal);
    $("#sfStreak").addEventListener("click", openProfileModal);
  }

  function refreshChrome() {
    ensureChrome();
    var li = levelInfo();
    var sv = $("#sfStreakVal"); if (sv) sv.textContent = P.streak;
    var lv = $("#sfLevelVal"); if (lv) lv.textContent = "Lv " + li.level;
    var fill = $("#sfXpFill"); if (fill) fill.style.width = li.pct + "%";
    var streakChip = $("#sfStreak");
    if (streakChip) streakChip.classList.toggle("cold", P.streak === 0);
    renderDashboard();
  }

  /* ============================================================
     HOME DASHBOARD (level ring, streak, daily goal, badges)
     ============================================================ */
  function renderDashboard() {
    var catalog = $("#catalogView");
    var hero = $(".hero");
    if (!catalog || !hero) return;
    var dash = $("#sfDash");
    if (!dash) {
      dash = el("section", "sf-dash");
      dash.id = "sfDash";
      hero.insertAdjacentElement("afterend", dash);
    }
    var li = levelInfo();
    var t = todayKey();
    var dailyXp = (P.daily.day === t) ? P.daily.xp : 0;
    var goalPct = Math.min(100, Math.round((dailyXp / DAILY_GOAL) * 100));
    var earned = Object.keys(P.badges).length;

    dash.innerHTML =
      '<div class="sf-dash__grid">' +
        // Level ring
        '<div class="sf-card sf-card--level">' +
          ring(li.pct, "⭐", "var(--accent)") +
          '<div class="sf-card__meta">' +
            '<div class="sf-card__big">Level ' + li.level + "</div>" +
            '<div class="sf-card__sub">' + esc(li.title) + "</div>" +
            '<div class="sf-card__xp">' + P.xp + " XP · " + li.into + "/" + li.span + " to next</div>" +
          "</div>" +
        "</div>" +
        // Streak
        '<div class="sf-card sf-card--streak ' + (P.streak ? "" : "cold") + '">' +
          '<div class="sf-flame">🔥</div>' +
          '<div class="sf-card__meta">' +
            '<div class="sf-card__big">' + P.streak + '<span class="sf-card__unit"> day' + (P.streak === 1 ? "" : "s") + "</span></div>" +
            '<div class="sf-card__sub">Current streak</div>' +
            '<div class="sf-card__xp">Best ' + P.bestStreak + " · 🧊 " + P.freezes + " freeze" + (P.freezes === 1 ? "" : "s") + "</div>" +
          "</div>" +
        "</div>" +
        // Daily goal ring
        '<div class="sf-card sf-card--goal">' +
          ring(goalPct, "🎯", "var(--green)") +
          '<div class="sf-card__meta">' +
            '<div class="sf-card__big">' + dailyXp + '<span class="sf-card__unit">/' + DAILY_GOAL + " XP</span></div>" +
            '<div class="sf-card__sub">Today\'s goal</div>' +
            '<div class="sf-card__xp">' + (goalPct >= 100 ? "Done for today! 🎉" : "Keep going — one lesson does it") + "</div>" +
          "</div>" +
        "</div>" +
        // Badges
        '<div class="sf-card sf-card--badges">' +
          '<div class="sf-card__big">' + earned + "<span class=\"sf-card__unit\">/" + BADGES.length + " badges</span></div>" +
          '<div class="sf-badges" id="sfBadgesRow"></div>' +
          '<button class="sf-badges__all" id="sfBadgesAll">View all achievements →</button>' +
        "</div>" +
      "</div>";

    var row = $("#sfBadgesRow");
    BADGES.slice(0, 7).forEach(function (b) {
      var got = hasBadge(b.id);
      var chip = el("span", "sf-badge" + (got ? " got" : ""), b.icon);
      chip.title = b.name + (got ? " — earned" : " — locked: " + b.desc);
      row.appendChild(chip);
    });
    $("#sfBadgesAll").addEventListener("click", openProfileModal);
  }

  function ring(pct, icon, color) {
    var r = 34, c = 2 * Math.PI * r;
    var off = c * (1 - pct / 100);
    return '<svg class="sf-ring" viewBox="0 0 80 80">' +
      '<circle class="sf-ring__bg" cx="40" cy="40" r="' + r + '"></circle>' +
      '<circle class="sf-ring__fg" cx="40" cy="40" r="' + r + '" ' +
        'style="stroke:' + color + ';stroke-dasharray:' + c.toFixed(1) + ';stroke-dashoffset:' + off.toFixed(1) + '"></circle>' +
      '<text class="sf-ring__icon" x="40" y="40">' + icon + "</text>" +
      '<text class="sf-ring__pct" x="40" y="56">' + pct + "%</text>" +
      "</svg>";
  }

  /* ============================================================
     PROFILE / ACHIEVEMENTS MODAL
     ============================================================ */
  function openProfileModal() {
    var li = levelInfo();
    var overlay = el("div", "sf-modal-overlay");
    overlay.id = "sfModal";
    var earned = Object.keys(P.badges).length;
    overlay.innerHTML =
      '<div class="sf-modal" role="dialog" aria-modal="true">' +
        '<button class="sf-modal__close" aria-label="Close">✕</button>' +
        '<div class="sf-modal__head">' +
          '<div class="sf-modal__avatar">⭐</div>' +
          '<div>' +
            '<div class="sf-modal__lvl">Level ' + li.level + " · " + esc(li.title) + "</div>" +
            '<div class="sf-modal__xp">' + P.xp + " XP total · " + li.into + " / " + li.span + " to level " + (li.level + 1) + "</div>" +
            '<div class="sf-modal__bar"><span style="width:' + li.pct + '%"></span></div>' +
          "</div>" +
        "</div>" +
        '<div class="sf-modal__stats">' +
          stat("🔥", P.streak, "Day streak") +
          stat("🏅", P.bestStreak, "Best streak") +
          stat("🧊", P.freezes, "Freezes") +
          stat("🏆", earned + "/" + BADGES.length, "Badges") +
        "</div>" +
        '<h3 class="sf-modal__h">Achievements</h3>' +
        '<div class="sf-ach-grid" id="sfAchGrid"></div>' +
      "</div>";
    document.body.appendChild(overlay);

    var grid = $("#sfAchGrid", overlay);
    BADGES.forEach(function (b) {
      var got = hasBadge(b.id);
      var card = el("div", "sf-ach" + (got ? " got" : ""));
      card.innerHTML =
        '<div class="sf-ach__icon">' + b.icon + "</div>" +
        '<div class="sf-ach__name">' + esc(b.name) + "</div>" +
        '<div class="sf-ach__desc">' + esc(b.desc) + "</div>" +
        (got ? '<div class="sf-ach__got">✓ Unlocked</div>' : '<div class="sf-ach__lock">🔒 Locked</div>');
      grid.appendChild(card);
    });

    function close() { overlay.remove(); }
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    $(".sf-modal__close", overlay).addEventListener("click", close);
    document.addEventListener("keydown", function onEsc(e) {
      if (e.key === "Escape") { close(); document.removeEventListener("keydown", onEsc); }
    });
  }
  function stat(icon, val, label) {
    return '<div class="sf-stat"><div class="sf-stat__icon">' + icon + "</div>" +
      '<div class="sf-stat__val">' + val + "</div>" +
      '<div class="sf-stat__label">' + label + "</div></div>";
  }

  /* ============================================================
     CELEBRATIONS — toasts, confetti, level-up & badge popups
     ============================================================ */
  var toastWrap;
  function toast(icon, msg) {
    if (!toastWrap) {
      toastWrap = el("div", "sf-toasts");
      toastWrap.id = "sfToasts";
      document.body.appendChild(toastWrap);
    }
    var t = el("div", "sf-toast", '<span class="sf-toast__icon">' + icon + "</span><span>" + esc(msg) + "</span>");
    toastWrap.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("in"); });
    setTimeout(function () {
      t.classList.remove("in");
      setTimeout(function () { t.remove(); }, 350);
    }, 2600);
  }

  function celebrateBadge(id) {
    var b = BADGE_BY_ID[id];
    if (!b) return;
    burst();
    var pop = el("div", "sf-badgepop");
    pop.innerHTML =
      '<div class="sf-badgepop__card">' +
        '<div class="sf-badgepop__ring"></div>' +
        '<div class="sf-badgepop__icon">' + b.icon + "</div>" +
        '<div class="sf-badgepop__label">Achievement unlocked</div>' +
        '<div class="sf-badgepop__name">' + esc(b.name) + "</div>" +
        '<div class="sf-badgepop__desc">' + esc(b.desc) + "</div>" +
      "</div>";
    document.body.appendChild(pop);
    requestAnimationFrame(function () { pop.classList.add("in"); });
    setTimeout(function () {
      pop.classList.remove("in");
      setTimeout(function () { pop.remove(); }, 400);
    }, 2400);
  }

  function showLevelUp(level) {
    var pop = el("div", "sf-levelup");
    pop.innerHTML =
      '<div class="sf-levelup__card">' +
        '<div class="sf-levelup__burst">⭐</div>' +
        '<div class="sf-levelup__label">Level up!</div>' +
        '<div class="sf-levelup__lvl">Level ' + level + "</div>" +
        '<div class="sf-levelup__title">' + esc(titleFor(level)) + "</div>" +
      "</div>";
    document.body.appendChild(pop);
    requestAnimationFrame(function () { pop.classList.add("in"); });
    setTimeout(function () {
      pop.classList.remove("in");
      setTimeout(function () { pop.remove(); }, 400);
    }, 2200);
  }

  /* ---------- lightweight canvas confetti ---------- */
  function burst() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var canvas = el("canvas", "sf-confetti");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var W = canvas.width = window.innerWidth;
    var H = canvas.height = window.innerHeight;
    var colors = ["#8b5cf6", "#22c55e", "#f59e0b", "#38bdf8", "#ec4899", "#fff"];
    var pieces = [];
    for (var i = 0; i < 120; i++) {
      pieces.push({
        x: W / 2 + (Math.random() - 0.5) * 200,
        y: H / 3 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 14,
        vy: Math.random() * -14 - 4,
        g: 0.32 + Math.random() * 0.2,
        size: 5 + Math.random() * 7,
        color: colors[(Math.random() * colors.length) | 0],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        life: 0,
      });
    }
    var frames = 0;
    function tick() {
      ctx.clearRect(0, 0, W, H);
      frames++;
      pieces.forEach(function (p) {
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vx *= 0.99;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      if (frames < 130) requestAnimationFrame(tick);
      else canvas.remove();
    }
    tick();
  }

  /* ============================================================
     WIRE UP — listen to app.js events
     ============================================================ */
  document.addEventListener("sf:course", function (e) { renderQuiz(e.detail); });
  document.addEventListener("sf:complete", function (e) { onComplete(e.detail); });
  document.addEventListener("sf:home", function () { refreshChrome(); });
  document.addEventListener("sf:reset", function () {
    P = Object.assign({}, defaults, { badges: {}, quizzes: {}, daily: { day: null, xp: 0 } });
    save();
    refreshChrome();
  });
  document.addEventListener("sf:profilechanged", function () { refreshChrome(); });

  function start() {
    ensureChrome();
    refreshChrome();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  // expose a tiny API (handy for debugging / future use)
  window.Engage = {
    grantXp: grantXp,
    profile: function () { return P; },
    badges: BADGES,
  };
})();
