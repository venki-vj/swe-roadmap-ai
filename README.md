# ⚡ SkillForge — Free Software Engineer Roadmap

A polished, Udemy-style website that turns the **best free YouTube courses** into a
single **progressive roadmap** — from *zero coding experience* to *job-ready software engineer*
ready to chase high-paying offers.

Inspired by the *"Resume Strategy That Got Him a ₹55 LPA Salary"* video, every skill that gets
engineers to top packages is mapped into 5 ordered phases. All 12 courses are **100% free**,
**embedded with the in-built YouTube player**, and **verified** (real video IDs — no broken players).

## ✨ Features

- 🎬 **In-built YouTube player** for every course (no leaving the site)
- 🧭 **Two progressive roadmaps** — a 7-phase **Dev** track and a 6-phase **AI/LLM** track
- 🧠 **Interactive "Check your understanding" quizzes** after every lesson — instant feedback + explanations (active-recall, backed by a Harvard/PNAS study showing interpolated quizzes ~halve mind-wandering and lift retention)
- 🎮 **Gamification / dopamine layer** (all client-side, localStorage):
  - ⭐ **XP & levels** with celebratory level-up popups
  - 🔥 **Daily streaks** with streak-freeze protection
  - 🎯 **Daily XP goal** progress ring
  - 🏆 **15 unlockable achievements/badges** with confetti on unlock
  - 📊 A home **dashboard** (level ring, streak, goal, badges) + header XP/streak chips
- ✅ **Progress tracking** — mark courses complete; saved in your browser (localStorage)
- 🔎 **Search** across courses, skills, and topics
- ▶ **"Continue learning"** jumps to your next unfinished course
- 📚 **Per-course pages** with *What you'll learn* + curated **free** practice resources
- 🔗 **Shareable lesson links** via URL hash (`#course/react`)
- 🌑 Modern dark UI, fully **responsive**, **zero build step**, **no sign-up**

## 🗺️ The Roadmap

| Phase | Focus | Courses |
|------|-------|---------|
| **1 — Foundations** | Think like a CS major, write first code | CS50 (Harvard) · Python · Git & GitHub |
| **2 — Core CS** | What interviews actually test | SQL & Databases · Data Structures |
| **3 — Full-Stack Dev** | Build & ship real products | HTML/CSS · JavaScript · React · Node/Express |
| **4 — Interview Mastery** | Convert skills to offers | NeetCode 150 (DSA patterns) · System Design |
| **5 — Linux & CLI** | The OS everything runs on | Introduction to Linux (full course) |
| **6 — Android App Engineering** | Become a real Android dev | Kotlin · Coroutines · App components masterclass · Jetpack Compose · Hilt DI |
| **7 — Android Platform, AOSP & Kernel** | Deep specialization, app → silicon | Android Internals · Binder IPC · SELinux · Platform Debugging · Perfetto tracing · AOSP board bring-up · Linux Kernel Programming · Device Drivers |

### 📱🤖 Phases 6–7 — the in-depth Android track

A rare, top-to-bottom path for becoming an **Android platform / systems engineer**, taught largely
by *Philipp Lackner*, *Karim Yaghmour* (author of O'Reilly's *Embedded Android*), *BayLibre*, Google's
*Android Developers*, and the *Linux Foundation*:

**Phase 6 — App layer**
1. **Kotlin** → language foundation
2. **Coroutines** → asynchronous/concurrent Android
3. **App components masterclass** → Activity / Service / Receiver / Provider + lifecycle
4. **Jetpack Compose** → the modern, declarative UI toolkit
5. **Dependency Injection (Hilt)** → clean, testable architecture

**Phase 7 — Platform & kernel**
6. **Android Internals** → AOSP tree, build system, framework, system services
7. **Binder / IPC deep dive** → how every component actually communicates
8. **SELinux** → mandatory access control & `avc: denied` debugging
9. **Platform Debugging & Development** → modify and debug the framework itself
10. **Perfetto tracing** → diagnose jank, scheduling, and binder latency
11. **AOSP on a developer board** → bootloader, Android Common Kernel, real board bring-up
12. **Linux Kernel Programming** → kernel space, modules, the layer Android sits on
13. **Linux Device Drivers** → where app features finally meet real silicon

### 🗂️ Companion Data Structures roadmap (`ds.html`)

A dedicated, progressive **data-structures** track — *basic → advanced* — where every
structure is taught by the most-loved free video on the topic **and** mapped to exactly how
real production systems use it. Five phases, 22 topics:

| Phase | Focus | Structures |
|------|-------|-----------|
| **1 — Foundations & Linear** | Cost + the core four | Big-O · Arrays/Strings · Linked Lists · Stacks · Queues |
| **2 — Hashing, Trees & Heaps** | Fast lookup & hierarchy | Hash tables/maps/sets · Binary trees · BSTs · Heaps/priority queues · Tries |
| **3 — Balanced Trees** | Guaranteed O(log n) | AVL · Red-Black · B/B+ trees · Skip lists |
| **4 — Graphs & Range Queries** | Relationships & intervals | Graph theory · Union-Find · Segment trees · Fenwick trees |
| **5 — Data Structures at Scale** | Production internals | Bloom filters · LSM-trees · Merkle trees/blockchains · Capstone (Fiset full course) |

Two DS-only fields drive a signature UI on this track (rendered by the shared `app.js`):

- **`complexity: [{ label, value }]`** → a Big-O strip shown right under the blurb.
- **`realWorld: [{ sys, text }]`** → a *"⚙ Where it's used in production"* section, e.g. PostgreSQL
  B-tree indexes, Redis sorted-set skip lists, Cassandra SSTable Bloom filters, RocksDB LSM
  compaction, the Linux kernel's red-black trees, and Git/Bitcoin Merkle trees. The systems also
  appear as a hint on each home-page card and are included in search.

Real-world claims were grounded in a deep, multi-source, fact-checked research pass (primary
sources: PostgreSQL, Apache Cassandra, RocksDB, Redis docs, cp-algorithms, MIT OCW). Taught by
*William Fiset* (Google engineer / freeCodeCamp), *HackerRank* (Gayle Laakmann McDowell),
*mycodeschool*, *Abdul Bari*, *Michael Sambol*, *Spanning Tree*, *Tushar Roy*, *ByteByteGo*,
*Jenny's Lectures*, and *3Blue1Brown*. Every `videoId` is verified via YouTube's oEmbed endpoint.

### 🧬 Companion AI/LLM roadmap (`ai.html`)

A separate 6-phase track — neural-net intuition (3Blue1Brown) → deep learning & PyTorch →
transformers/attention → **building your own GPT from scratch** (Andrej Karpathy) → the full
training stack → and an applied **LLM-engineer** phase: prompt engineering, Hugging Face,
**RAG**, **fine-tuning (LoRA/QLoRA)**, and generative image models.

## ▶️ Run it (and the "Error 153" fix)

YouTube's embedded player needs a real **`http(s)` origin**. If you open `index.html` directly
by double-clicking it, the page runs from `file://` with **no origin**, and YouTube refuses to
play — showing **`Error 153 — Video player configuration error`**. This is *not* a broken video;
the same files play perfectly when served over http(s). Pick any one fix:

**Option A — one-click (Windows):** double-click **`start-server.bat`**. It serves the folder at
`http://localhost:8000` and opens your browser. (Needs Python or Node — most dev machines have one.)

**Option B — VS Code:** install the **Live Server** extension, right-click `index.html` →
**“Open with Live Server”**.

**Option C — any terminal:**
```bash
# from inside the swe-roadmap folder
python -m http.server 8000      # then open http://localhost:8000
# or:  npx serve
```

**Option D — GitHub Pages:** see below. Hosted over https, so videos just work.

> The site shows a small banner reminding you of this whenever it detects it's running from `file://`.

## 🌍 Deploy free on GitHub Pages

1. Create a new GitHub repo (e.g. `swe-roadmap`) and push these files to the **root**:
   ```
   index.html        # Dev roadmap page
   ai.html           # AI/LLM roadmap page
   ds.html           # Data Structures roadmap page
   styles.css        # shared styles (incl. gamification + quiz UI)
   app.js            # shared app logic (catalog, player, routing, DS complexity/real-world)
   engage.js         # shared engagement engine (XP, streaks, badges, quizzes)
   data.js           # Dev roadmap content (+ quizzes)
   ai-data.js        # AI roadmap content (+ quizzes)
   ds-data.js        # Data Structures content (+ complexity, real-world, quizzes)
   start-server.bat
   README.md
   ```
   ```bash
   git init
   git add .
   git commit -m "SkillForge: free SWE roadmap site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/swe-roadmap.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick branch **`main`** and folder **`/ (root)`**, then **Save**.
5. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/swe-roadmap/`

> Tip: GitHub Pages serves the static files as-is — no build/CI needed because this is plain
> HTML/CSS/JS.

## 🛠️ Customize

- **Add or reorder courses:** edit `data.js` (Dev) or `ai-data.js` (AI). Each course needs
  `videoId`, `title`, `channel`, `duration`, `level`, `blurb`, `learn[]`, and `resources[]`.
  New courses appear automatically.
- **Add a quiz to a course:** give it a `quiz: [ { q, options: [...], answer: <index>, explain } ]`
  array. The interactive "Check your understanding" section and XP rewards render automatically.
- **Tune gamification:** XP amounts, the daily-goal target, level curve, and the badge list live
  at the top of `engage.js`. All state is stored under one localStorage key (`skillforge_profile_v1`)
  shared across both roadmaps.
- **Change theme colors:** edit the CSS variables at the top of `styles.css` (`--accent`, `--bg`, …).
- **Reset your progress:** use the **Reset progress** button on the home page (also clears XP,
  streak, and badges).

## 📄 Notes

All videos are embedded from YouTube and remain the property of their respective creators
(freeCodeCamp, Programming with Mosh, SuperSimpleDev, NeetCode, Bob Ziroll, William Fiset,
Gaurav Sen, Harvard CS50, the Linux Foundation, BayLibre, Karim Yaghmour / Opersys,
Philipp Lackner, Android Developers / Google, Chris Simmonds, Himanshu Gaur, 3Blue1Brown,
Andrej Karpathy, AssemblyAI, and Computerphile).
SkillForge is a free, non-commercial study guide that simply organizes them into a learning path.
Every `videoId` was verified against its canonical upload via YouTube's oEmbed endpoint.

If any single embed ever shows an error even over http(s), that specific creator has disabled
off-site embedding — use the **“Open on YouTube ↗”** button on the course page to watch it there.
