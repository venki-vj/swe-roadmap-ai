# ⚡ SkillForge — Free Software Engineer Roadmap

A polished, Udemy-style website that turns the **best free YouTube courses** into a
single **progressive roadmap** — from *zero coding experience* to *job-ready software engineer*
ready to chase high-paying offers.

Inspired by the *"Resume Strategy That Got Him a ₹55 LPA Salary"* video, every skill that gets
engineers to top packages is mapped into 5 ordered phases. All 12 courses are **100% free**,
**embedded with the in-built YouTube player**, and **verified** (real video IDs — no broken players).

## ✨ Features

- 🎬 **In-built YouTube player** for every course (no leaving the site)
- 🧭 **Progressive 5-phase roadmap** — follow it top to bottom
- ✅ **Progress tracking** — mark courses complete; progress is saved in your browser (localStorage)
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
| **6 — Android Platform & Kernel** | Deep specialization, app → kernel | Kotlin · Android Masterclass · Android Internals · Binder IPC · Platform Debugging · AOSP board bring-up · Linux Kernel Programming · Device Drivers |

### 🤖 Phase 6 — the in-depth Android track

A rare, top-to-bottom path for becoming an **Android platform / systems engineer**, taught largely
by *Karim Yaghmour* (author of O'Reilly's *Embedded Android*), *BayLibre*, and the *Linux Foundation*:

1. **Kotlin** → language foundation
2. **Android & Kotlin Masterclass** → the four app components (Activity/Service/Receiver/Provider)
3. **Android Internals** → AOSP tree, build system, framework, system services
4. **Binder / IPC deep dive** → how every component actually communicates
5. **Platform Debugging & Development** → modify and debug the framework itself
6. **AOSP on a developer board** → bootloader, Android Common Kernel, real board bring-up
7. **Linux Kernel Programming** → kernel space, modules, the layer Android sits on
8. **Linux Device Drivers** → where app features finally meet real silicon

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
   index.html
   styles.css
   app.js
   data.js
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

- **Add or reorder courses:** edit `data.js`. Each course needs `videoId`, `title`, `channel`,
  `duration`, `level`, `blurb`, `learn[]`, and `resources[]`. New courses appear automatically.
- **Change theme colors:** edit the CSS variables at the top of `styles.css` (`--accent`, `--bg`, …).
- **Reset your progress:** use the **Reset progress** button on the home page.

## 📄 Notes

All videos are embedded from YouTube and remain the property of their respective creators
(freeCodeCamp, Programming with Mosh, SuperSimpleDev, NeetCode, Bob Ziroll, William Fiset,
Gaurav Sen, Harvard CS50, the Linux Foundation, BayLibre, and Karim Yaghmour / Opersys).
SkillForge is a free, non-commercial study guide that simply organizes them into a learning path.

If any single embed ever shows an error even over http(s), that specific creator has disabled
off-site embedding — use the **“Open on YouTube ↗”** button on the course page to watch it there.
