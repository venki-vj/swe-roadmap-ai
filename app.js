/* ============================================================
   SkillForge — app logic
   Pure vanilla JS. State persists in localStorage so progress
   survives reloads. Hash routing (#course/<id>) makes lessons
   shareable and back-button friendly.
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.ROADMAP;
  var STORAGE_KEY = "skillforge_completed_v1";

  /* Flatten courses in roadmap order + index by id, attach phase ref. */
  var ORDER = [];
  var BY_ID = {};
  DATA.phases.forEach(function (phase) {
    phase.courses.forEach(function (course) {
      course._phase = phase;
      ORDER.push(course);
      BY_ID[course.id] = course;
    });
  });

  /* ---------- progress state ---------- */
  function loadDone() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveDone(done) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); } catch (e) {}
  }
  var done = loadDone();
  function isDone(id) { return !!done[id]; }
  function setDone(id, val) {
    if (val) done[id] = true; else delete done[id];
    saveDone(done);
  }
  function doneCount() {
    return ORDER.filter(function (c) { return isDone(c.id); }).length;
  }

  /* ---------- helpers ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function thumb(videoId) {
    return "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ============================================================
     CATALOG / HOME
     ============================================================ */
  function renderHero() {
    $("#heroTitle").textContent = DATA.meta.tagline;
    $("#heroSubtitle").textContent = DATA.meta.subtitle;
    updateHeroStats();
  }

  function updateHeroStats() {
    var total = ORDER.length;
    var d = doneCount();
    var pct = total ? Math.round((d / total) * 100) : 0;
    $("#overallPct").textContent = pct + "%";
    $("#overallBar").style.width = pct + "%";
    $("#heroStats").innerHTML =
      "<span><b>" + total + "</b> free courses</span>" +
      "<span><b>" + DATA.phases.length + "</b> progressive phases</span>" +
      "<span><b>" + d + "</b> completed</span>";
    // continue button label
    var next = nextIncomplete();
    $("#continueBtn").textContent = next
      ? (d === 0 ? "▶ Start learning" : "▶ Continue learning")
      : "✓ All done!";
  }

  function nextIncomplete() {
    for (var i = 0; i < ORDER.length; i++) {
      if (!isDone(ORDER[i].id)) return ORDER[i];
    }
    return null;
  }

  function renderRoadmap(filter) {
    var root = $("#roadmap");
    root.innerHTML = "";
    var q = (filter || "").trim().toLowerCase();
    var matched = 0;
    var globalIndex = 0;

    DATA.phases.forEach(function (phase) {
      var matchingCourses = phase.courses.filter(function (c) {
        if (!q) return true;
        var hay = (c.title + " " + c.channel + " " + c.blurb + " " + c.level + " " +
          (c.learn || []).join(" ")).toLowerCase();
        return hay.indexOf(q) !== -1;
      });

      // keep global ordering numbers stable regardless of filter
      var indices = {};
      phase.courses.forEach(function (c) { indices[c.id] = ++globalIndex; });

      if (matchingCourses.length === 0) return;
      matched += matchingCourses.length;

      var section = el("div", "phase");
      var phaseDone = phase.courses.every(function (c) { return isDone(c.id); });

      var head = el("div", "phase__head");
      head.appendChild(el("div", "phase__icon", phase.icon));
      var titles = el("div", "phase__titles");
      titles.appendChild(el("h2", null,
        esc(phase.title) +
        '<span class="phase__chip' + (phaseDone ? " done" : "") + '">' +
        (phaseDone ? "✓ Completed" : phase.courses.length + " courses") + "</span>"));
      titles.appendChild(el("p", null, esc(phase.subtitle)));
      head.appendChild(titles);
      section.appendChild(head);

      var grid = el("div", "course-grid");
      matchingCourses.forEach(function (course) {
        grid.appendChild(courseCard(course, indices[course.id]));
      });
      section.appendChild(grid);
      root.appendChild(section);
    });

    if (matched === 0) {
      root.appendChild(el("div", "empty", "No courses match “" + esc(filter) + "”. Try another search."));
    }
  }

  function courseCard(course, order) {
    var card = el("div", "card" + (isDone(course.id) ? " done" : ""));
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.innerHTML =
      '<div class="card__thumb">' +
        '<span class="card__order">' + order + "</span>" +
        '<img loading="lazy" src="' + thumb(course.videoId) + '" alt="">' +
        '<span class="card__duration">' + esc(course.duration) + "</span>" +
        '<div class="card__play"><span>▶</span></div>' +
      "</div>" +
      '<div class="card__body">' +
        '<div class="card__title">' + esc(course.title) + "</div>" +
        '<div class="card__channel">' + esc(course.channel) + "</div>" +
        '<div class="card__blurb">' + esc(course.blurb) + "</div>" +
        '<div class="card__foot">' +
          '<span class="level level--' + course.level.split(" ")[0] + '">' + esc(course.level) + "</span>" +
          '<span class="card__status">' + (isDone(course.id) ? "✓ Completed" : "Not started") + "</span>" +
        "</div>" +
      "</div>";

    function go() { openCourse(course.id); }
    card.addEventListener("click", go);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
    return card;
  }

  /* ============================================================
     COURSE / PLAYER VIEW
     ============================================================ */
  function openCourse(id) {
    var course = BY_ID[id];
    if (!course) return;
    if (location.hash !== "#course/" + id) {
      location.hash = "#course/" + id;
      return; // hashchange handler re-enters
    }
    renderCourse(course);
    showView("course");
    window.scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
  }

  function renderCourse(course) {
    $("#player").src = "https://www.youtube.com/embed/" + course.videoId + "?rel=0&modestbranding=1";
    $("#courseTitle").textContent = course.title;
    $("#courseChannel").textContent = course.channel + "  ·  " + course.duration;
    $("#courseBlurb").textContent = course.blurb;
    $("#youtubeLink").href = "https://www.youtube.com/watch?v=" + course.videoId;

    $("#courseTags").innerHTML =
      '<span class="level level--' + course.level.split(" ")[0] + '">' + esc(course.level) + "</span>" +
      '<span class="phase__chip">' + esc(course._phase.title) + "</span>";

    $("#courseLearn").innerHTML = (course.learn || [])
      .map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("");

    $("#courseResources").innerHTML = (course.resources || [])
      .map(function (r) {
        return '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.label) + "</a>";
      }).join("");

    updateCompleteBtn(course);
    renderSideCurriculum(course);
  }

  function updateCompleteBtn(course) {
    var btn = $("#completeBtn");
    var d = isDone(course.id);
    btn.textContent = d ? "✓ Completed — undo" : "Mark as complete";
    btn.classList.toggle("done", d);
    btn.onclick = function () {
      setDone(course.id, !isDone(course.id));
      updateCompleteBtn(course);
      renderSideCurriculum(course);
      updateHeroStats();
    };
  }

  function renderSideCurriculum(current) {
    var d = doneCount();
    $("#sideProgress").textContent = d + " / " + ORDER.length + " done";
    var list = $("#sideCurriculum");
    list.innerHTML = "";
    var n = 0;
    DATA.phases.forEach(function (phase) {
      list.appendChild(el("div", "side-phase", esc(phase.title)));
      phase.courses.forEach(function (course) {
        n++;
        var item = el("div", "side-item" +
          (isDone(course.id) ? " done" : "") +
          (current && course.id === current.id ? " active" : ""));
        item.innerHTML =
          '<span class="side-item__check">✓</span>' +
          '<span class="side-item__title">' + n + ". " + esc(course.title) + "</span>" +
          '<span class="side-item__dur">' + esc(course.duration) + "</span>";
        item.addEventListener("click", function () { openCourse(course.id); });
        list.appendChild(item);
      });
    });
  }

  /* ============================================================
     VIEW SWITCHING + ROUTING
     ============================================================ */
  function showView(which) {
    $("#catalogView").classList.toggle("hidden", which !== "catalog");
    $("#courseView").classList.toggle("hidden", which !== "course");
  }

  function goHome() {
    $("#player").src = ""; // stop playback
    showView("catalog");
    updateHeroStats();
    renderRoadmap($("#searchInput").value);
  }

  function route() {
    var h = location.hash;
    if (h.indexOf("#course/") === 0) {
      var id = h.slice("#course/".length);
      if (BY_ID[id]) {
        renderCourse(BY_ID[id]);
        showView("course");
        return;
      }
    }
    goHome();
  }

  /* ============================================================
     WIRE UP
     ============================================================ */
  function init() {
    renderHero();
    renderRoadmap("");

    // Warn when running from file:// — the cause of YouTube Error 153.
    if (location.protocol === "file:") {
      var banner = $("#fileBanner");
      if (banner) {
        banner.classList.remove("hidden");
        $("#fileBannerClose").addEventListener("click", function () {
          banner.classList.add("hidden");
        });
      }
    }

    $("#searchInput").addEventListener("input", function (e) {
      renderRoadmap(e.target.value);
    });

    $("#homeLink").addEventListener("click", function (e) {
      e.preventDefault();
      if (location.hash) location.hash = ""; else goHome();
    });

    $("#backBtn").addEventListener("click", function () {
      if (location.hash) location.hash = ""; else goHome();
    });

    $("#startBtn").addEventListener("click", function () {
      var next = nextIncomplete() || ORDER[0];
      openCourse(next.id);
    });

    $("#continueBtn").addEventListener("click", function () {
      var next = nextIncomplete() || ORDER[0];
      openCourse(next.id);
    });

    $("#resetBtn").addEventListener("click", function () {
      if (confirm("Reset all progress? This clears your completed courses.")) {
        done = {};
        saveDone(done);
        updateHeroStats();
        renderRoadmap($("#searchInput").value);
      }
    });

    window.addEventListener("hashchange", route);
    route(); // handle deep-link on load
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
