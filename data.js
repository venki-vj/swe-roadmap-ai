/*
 * SkillForge — Free Software Engineer Roadmap
 * ------------------------------------------------------------
 * All courses below are 100% FREE and hosted on YouTube.
 * Every videoId has been verified against the canonical upload.
 *
 * Data is attached to window.ROADMAP so the site works both when
 * opened locally (file://) and when hosted on GitHub Pages — no
 * fetch()/CORS issues.
 */
window.ROADMAP = {
  meta: {
    title: "SkillForge",
    tagline: "The free, progressive roadmap from zero to job-ready software engineer.",
    subtitle:
      "Every course here is 100% free on YouTube. Follow the phases top-to-bottom — each one builds on the last, exactly like the path engineers take to land high-paying offers.",
  },

  /* Ordered, progressive phases. Complete them top to bottom. */
  phases: [
    {
      id: "p1",
      title: "Phase 1 — Foundations",
      subtitle: "Think like a computer scientist and write your first real code.",
      icon: "🧱",
      courses: [
        {
          id: "cs50",
          videoId: "8mAITcNt710",
          title: "CS50: Introduction to Computer Science (Harvard)",
          channel: "freeCodeCamp · Harvard / David J. Malan",
          duration: "~24 hours",
          level: "Beginner",
          blurb:
            "The legendary Harvard course. Learn how computers actually work — abstraction, algorithms, memory, and problem solving. The single best mental foundation before you specialize.",
          learn: [
            "How computers represent and process information",
            "Algorithmic thinking & problem decomposition",
            "Memory, data structures, and basic C / Python / SQL",
            "The vocabulary every engineer is expected to know",
          ],
          resources: [
            { label: "CS50 official site (free problem sets)", url: "https://cs50.harvard.edu/x/" },
            { label: "freeCodeCamp article", url: "https://www.freecodecamp.org/news/harvard-cs50/" },
          ],
        },
        {
          id: "python",
          videoId: "_uQrJ0TkZlc",
          title: "Python Full Course for Beginners",
          channel: "Programming with Mosh",
          duration: "~6 hours",
          level: "Beginner",
          blurb:
            "Your first programming language, taught cleanly. Python is the friendliest entry point and stays useful for interviews, automation, data, and backends.",
          learn: [
            "Variables, types, conditionals, loops, functions",
            "Lists, dictionaries, and core data handling",
            "Object-oriented programming basics",
            "Three real mini-projects to cement the concepts",
          ],
          resources: [
            { label: "Official Python docs", url: "https://docs.python.org/3/tutorial/" },
            { label: "Practice on Exercism (free)", url: "https://exercism.org/tracks/python" },
          ],
        },
        {
          id: "git",
          videoId: "mAFoROnOfHs",
          title: "Git & GitHub Crash Course for Beginners",
          channel: "freeCodeCamp",
          duration: "~1.5 hours",
          level: "Beginner",
          blurb:
            "Version control is non-negotiable in every job. Learn Git and GitHub early so all your projects from here on are tracked, backed up, and portfolio-ready.",
          learn: [
            "init, add, commit, push, pull",
            "Branching, merging, and resolving conflicts",
            "Pull requests and collaboration workflow",
            "Building a green-square GitHub portfolio",
          ],
          resources: [
            { label: "GitHub Docs", url: "https://docs.github.com/en/get-started" },
            { label: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org/" },
          ],
        },
      ],
    },

    {
      id: "p2",
      title: "Phase 2 — Core Computer Science",
      subtitle: "Data and algorithms — the part interviewers actually test.",
      icon: "🧠",
      courses: [
        {
          id: "sql",
          videoId: "HXV3zeQKqGY",
          title: "SQL & Databases — Full Course",
          channel: "freeCodeCamp · Mike Dane",
          duration: "~4 hours",
          level: "Beginner",
          blurb:
            "Almost every app has a database behind it. Master SQL — querying, joins, and schema design — a skill used in nearly every engineering and data role.",
          learn: [
            "CRUD operations and table design",
            "Joins, aggregations, and nested queries",
            "Keys, constraints, and ER diagrams",
            "Querying real datasets confidently",
          ],
          resources: [
            { label: "SQLBolt (interactive lessons)", url: "https://sqlbolt.com/" },
            { label: "Practice on LeetCode Database", url: "https://leetcode.com/studyplan/top-sql-50/" },
          ],
        },
        {
          id: "dsa",
          videoId: "RBSGKlAvoiM",
          title: "Data Structures — Easy to Advanced (Google Engineer)",
          channel: "freeCodeCamp · William Fiset",
          duration: "~8 hours",
          level: "Intermediate",
          blurb:
            "Beautifully animated tour of every core data structure by a Google engineer. This is the backbone of coding interviews and efficient software.",
          learn: [
            "Arrays, linked lists, stacks, queues",
            "Trees, binary search trees, heaps & priority queues",
            "Hash tables and graphs",
            "Big-O analysis and when to use what",
          ],
          resources: [
            { label: "VisuAlgo (visualize structures)", url: "https://visualgo.net/en" },
            { label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
          ],
        },
      ],
    },

    {
      id: "p3",
      title: "Phase 3 — Full-Stack Web Development",
      subtitle: "Build and ship real products — the portfolio that gets interviews.",
      icon: "🌐",
      courses: [
        {
          id: "htmlcss",
          videoId: "G3e-cpL7ofc",
          title: "HTML & CSS — Beginner to Pro",
          channel: "SuperSimpleDev",
          duration: "~6.5 hours",
          level: "Beginner",
          blurb:
            "Build real websites from scratch. Project-driven course covering layout, Flexbox, and Grid — the visual foundation of every web app.",
          learn: [
            "Semantic HTML structure",
            "CSS styling, the box model, and responsive design",
            "Flexbox and CSS Grid layouts",
            "Building polished pages from a blank file",
          ],
          resources: [
            { label: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
            { label: "Flexbox Froggy (game)", url: "https://flexboxfroggy.com/" },
          ],
        },
        {
          id: "javascript",
          videoId: "jS4aFq5-91M",
          title: "JavaScript Programming — Full Course",
          channel: "freeCodeCamp · Scrimba",
          duration: "~7 hours",
          level: "Beginner",
          blurb:
            "The language of the web. Learn JavaScript through 140+ interactive challenges and real builds like a Blackjack game and a Chrome extension.",
          learn: [
            "Variables, functions, arrays, objects, loops",
            "DOM manipulation and events",
            "ES6+ features and modern syntax",
            "Interactive apps in the browser",
          ],
          resources: [
            { label: "javascript.info (best free book)", url: "https://javascript.info/" },
            { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          ],
        },
        {
          id: "react",
          videoId: "bMknfKXIFA8",
          title: "React — Beginner's Course (8 projects)",
          channel: "freeCodeCamp · Bob Ziroll",
          duration: "~12 hours",
          level: "Intermediate",
          blurb:
            "The most in-demand frontend library. Build 8 real-world projects with 140+ challenges and learn the component model used at top companies.",
          learn: [
            "Components, JSX, props, and state",
            "Hooks (useState, useEffect)",
            "Conditional rendering and forms",
            "Building and deploying real React apps",
          ],
          resources: [
            { label: "Official React docs (react.dev)", url: "https://react.dev/learn" },
            { label: "Deploy free on Vercel", url: "https://vercel.com/" },
          ],
        },
        {
          id: "node",
          videoId: "Oe421EPjeBE",
          title: "Node.js & Express — Full Backend Course",
          channel: "freeCodeCamp · John Smilga",
          duration: "~8 hours",
          level: "Intermediate",
          blurb:
            "Become full-stack. Build REST APIs and a complete MERN application — the backend half employers expect alongside your frontend skills.",
          learn: [
            "Node.js fundamentals & npm",
            "Building REST APIs with Express",
            "Connecting to databases & CRUD APIs",
            "A full MERN-stack application",
          ],
          resources: [
            { label: "Express docs", url: "https://expressjs.com/" },
            { label: "MongoDB Atlas (free tier)", url: "https://www.mongodb.com/atlas" },
          ],
        },
      ],
    },

    {
      id: "p4",
      title: "Phase 4 — Interview Mastery",
      subtitle: "Turn skills into offers — coding rounds and system design.",
      icon: "🎯",
      courses: [
        {
          id: "neetcode",
          videoId: "T0u5nwSA0w0",
          title: "NeetCode 150 — Coding Interview Patterns",
          channel: "NeetCode",
          duration: "~6 hours (+ 150 problems)",
          level: "Advanced",
          blurb:
            "The de-facto roadmap for cracking coding interviews. Learn the 15 patterns behind almost every question asked at FAANG and high-paying startups.",
          learn: [
            "Arrays/hashing, two pointers, sliding window",
            "Trees, graphs, heaps, and tries",
            "Dynamic programming and backtracking",
            "Pattern-recognition to solve unseen problems",
          ],
          resources: [
            { label: "NeetCode 150 practice list (free)", url: "https://neetcode.io/practice" },
            { label: "LeetCode", url: "https://leetcode.com/" },
          ],
        },
        {
          id: "systemdesign",
          videoId: "m8Icp_Cid5o",
          title: "System Design for Beginners",
          channel: "freeCodeCamp · Gaurav Sen",
          duration: "~1.5 hours",
          level: "Advanced",
          blurb:
            "How large-scale systems are built. The senior-level skill that separates high offers from average ones — and it shows up in nearly every mid+ interview.",
          learn: [
            "API and database design",
            "Scaling, load balancing, caching",
            "Designing a live video-streaming service",
            "Communicating trade-offs in an interview",
          ],
          resources: [
            { label: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer" },
            { label: "ByteByteGo newsletter", url: "https://blog.bytebytego.com/" },
          ],
        },
      ],
    },

    {
      id: "p5",
      title: "Phase 5 — Linux & the Command Line",
      subtitle: "The OS every server, container, and Android device runs on — a non-negotiable developer skill.",
      icon: "🐧",
      courses: [
        {
          id: "linux",
          videoId: "sWbUDq4S6Y8",
          title: "Introduction to Linux — Full Course for Beginners",
          channel: "freeCodeCamp · Linux Foundation",
          duration: "~6 hours",
          level: "Intermediate",
          blurb:
            "Servers, cloud, Docker, and Android all run on Linux. Master the shell, filesystem, permissions, and processes — the toolkit every backend, DevOps, and systems engineer uses daily, and the foundation for the Android deep-dive that follows.",
          learn: [
            "The shell, files, and directory navigation",
            "Permissions, users, processes, and services",
            "Package management and the boot process",
            "Bash scripting and everyday sysadmin tools",
          ],
          resources: [
            { label: "Linux Journey (free, interactive)", url: "https://linuxjourney.com/" },
            { label: "The Linux Command Line (free book)", url: "https://linuxcommand.org/tlcl.php" },
          ],
        },
      ],
    },

    {
      id: "p6",
      title: "Phase 6 — Android Platform & Kernel Engineering",
      subtitle:
        "A rare, top-to-bottom specialization: Kotlin apps → framework internals → Binder IPC → AOSP platform → board bring-up → Linux kernel code. The full stack of a real Android systems engineer.",
      icon: "🤖",
      courses: [
        {
          id: "kotlin",
          videoId: "EExSSotojVI",
          title: "Kotlin Programming — Full Course for Beginners",
          channel: "freeCodeCamp",
          duration: "~5.5 hours",
          level: "Beginner",
          blurb:
            "Kotlin is Google's first-class language for Android. Start here to learn the syntax, null-safety, and OOP you'll use everywhere from app UIs up to platform tooling.",
          learn: [
            "Variables, types, null-safety, and functions",
            "Classes, objects, and OOP in Kotlin",
            "Collections, lambdas, and higher-order functions",
            "Idiomatic Kotlin used across Android",
          ],
          resources: [
            { label: "Kotlin official docs", url: "https://kotlinlang.org/docs/home.html" },
            { label: "Kotlin Koans (interactive)", url: "https://play.kotlinlang.org/koans/overview" },
          ],
        },
        {
          id: "android-app",
          videoId: "blKkRoZPxLc",
          title: "Android & Kotlin Development Masterclass",
          channel: "freeCodeCamp · Denis Panjuta",
          duration: "~13 hours",
          level: "Intermediate",
          blurb:
            "Build real apps and learn the four Android components from the inside out — Activities, Services, Broadcast Receivers, and Content Providers — plus the lifecycle, Jetpack, and the SDK that the platform layers sit beneath.",
          learn: [
            "Activities, Fragments, and the lifecycle",
            "Services, Broadcast Receivers, Content Providers",
            "Intents, the manifest, and app architecture",
            "Building multiple production-style apps",
          ],
          resources: [
            { label: "Android Developers — App fundamentals", url: "https://developer.android.com/guide/components/fundamentals" },
            { label: "Android app architecture guide", url: "https://developer.android.com/topic/architecture" },
          ],
        },
        {
          id: "android-internals",
          videoId: "KLUXPxxJc5c",
          title: "Embedded Android #1 — Android Internals",
          channel: "Karim Yaghmour · Opersys (author of O'Reilly's \"Embedded Android\")",
          duration: "~1 hour",
          level: "Advanced",
          blurb:
            "The single best free overview of how Android is actually built, by the author of the definitive book. Walks the full AOSP stack: source tree, build system, framework, system services, and where the HAL and kernel fit.",
          learn: [
            "The AOSP source tree and build system",
            "Android's layered architecture (apps → framework → HAL → kernel)",
            "System services and the Android runtime",
            "How a platform engineer navigates AOSP",
          ],
          resources: [
            { label: "source.android.com — Architecture", url: "https://source.android.com/docs/core/architecture" },
            { label: "Opersys free training slides", url: "https://www.opersys.com/training/embedded-android-training/" },
          ],
        },
        {
          id: "android-binder",
          videoId: "Jgampt1DOak",
          title: "Deep Dive into Android IPC / Binder Framework",
          channel: "Android Internals talk",
          duration: "~45 min",
          level: "Advanced",
          blurb:
            "Binder is the nervous system of Android — every component talks to every other through it. Understand Binder and you understand how Activities, Services, and system_server actually communicate at the kernel boundary.",
          learn: [
            "Why Android needs its own IPC mechanism",
            "Binder drivers, transactions, and parcels",
            "AIDL, proxies, and stubs in practice",
            "How system services are reached via Binder",
          ],
          resources: [
            { label: "source.android.com — Binder overview", url: "https://source.android.com/docs/core/architecture/ipc/binder-overview" },
            { label: "AIDL guide", url: "https://developer.android.com/develop/background-work/services/aidl" },
          ],
        },
        {
          id: "android-platform",
          videoId: "6-z6pYVXWE8",
          title: "Android Platform Debugging & Development",
          channel: "Karim Yaghmour · Opersys",
          duration: "~1 hour",
          level: "Advanced",
          blurb:
            "Move from app developer to platform developer: modify the framework itself, debug across the AOSP layers, and use the tools that platform/BSP engineers rely on every day.",
          learn: [
            "Building and flashing custom AOSP",
            "Debugging the framework and native layers",
            "Tracing across processes and the HAL",
            "Customizing the platform for real hardware",
          ],
          resources: [
            { label: "source.android.com — Debugging", url: "https://source.android.com/docs/core/tests/debug" },
            { label: "Building AOSP", url: "https://source.android.com/docs/setup/build/building" },
          ],
        },
        {
          id: "aosp-board",
          videoId: "H8YVB1JptXE",
          title: "How to Enable Android (AOSP) on Your Developer Board",
          channel: "Linux Foundation · Mattijs Korpershoek (BayLibre)",
          duration: "~38 min",
          level: "Advanced",
          blurb:
            "Real board bring-up: take AOSP from source onto actual hardware. Covers U-Boot/bootloader changes for the Android boot flow, the Android Common Kernel (ACK) vs mainline Linux, and the userspace changes a board needs — gold for embedded/BSP engineers.",
          learn: [
            "Android boot flow vs a normal Linux distro",
            "Bootloader (U-Boot) changes for Android",
            "Android Common Kernel (ACK) vs mainline",
            "Userspace + HAL bring-up on a real board",
          ],
          resources: [
            { label: "source.android.com — Bring-up / devices", url: "https://source.android.com/docs/setup/create/devices" },
            { label: "Android Common Kernel docs", url: "https://source.android.com/docs/core/architecture/kernel/android-common" },
          ],
        },
        {
          id: "kernel-prog",
          videoId: "8d0Stmk5Nxc",
          title: "Linux Kernel Programming — From Scratch",
          channel: "Linux device driver / kernel series",
          duration: "Series (lec 1+)",
          level: "Advanced",
          blurb:
            "Go below the HAL. Write your first kernel modules, understand kernel space vs user space, and learn how the Linux kernel — the layer Android sits on — is actually programmed in C.",
          learn: [
            "Kernel space vs user space",
            "Writing and loading kernel modules",
            "Kernel build system and the module API",
            "Foundations for driver development",
          ],
          resources: [
            { label: "The Linux Kernel Module Programming Guide", url: "https://sysprog21.github.io/lkmpg/" },
            { label: "kernel.org documentation", url: "https://docs.kernel.org/" },
          ],
        },
        {
          id: "linux-driver",
          videoId: "3fKkDcArRoI",
          title: "Linux Device Driver Programming — Full Series",
          channel: "Embedded / Linux device driver course",
          duration: "Series (lec 1+)",
          level: "Advanced",
          blurb:
            "The deepest layer: device drivers. Android HALs ultimately talk to Linux drivers, so this is where app features meet real silicon. Set up a host/target workflow and build character drivers from the ground up.",
          learn: [
            "Host/target development setup",
            "Character device drivers and the VFS",
            "ioctl, file operations, and sysfs",
            "Bridging hardware to the Android HAL",
          ],
          resources: [
            { label: "Bootlin free kernel & driver slides", url: "https://bootlin.com/doc/training/linux-kernel/" },
            { label: "source.android.com — HAL overview", url: "https://source.android.com/docs/core/architecture/hal" },
          ],
        },
      ],
    },
  ],
};
