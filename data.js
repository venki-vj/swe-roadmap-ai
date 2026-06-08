/*
 * SkillForge — Free Software Engineer Roadmap
 * ------------------------------------------------------------
 * All courses below are 100% FREE and hosted on YouTube.
 * Every videoId has been verified against the canonical upload
 * (checked via YouTube's oEmbed endpoint).
 *
 * Data is attached to window.ROADMAP so the site works both when
 * opened locally (file://) and when hosted on GitHub Pages — no
 * fetch()/CORS issues.
 *
 * Each course may carry a `quiz` array of { q, options[], answer, explain }
 * for the interactive "Check your understanding" section (see engage.js).
 */
window.ROADMAP = {
  meta: {
    title: "SkillForge",
    tagline: "The free, progressive roadmap from zero to job-ready software engineer.",
    subtitle:
      "Every course here is 100% free on YouTube. Follow the phases top-to-bottom — each one builds on the last, exactly like the path engineers take to land high-paying offers. Earn XP, keep a daily streak, and quiz yourself as you go.",
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
          quiz: [
            {
              q: "What does it mean to say binary uses 'base-2'?",
              options: ["It only stores 2 files", "Each digit is one of two values: 0 or 1", "It runs twice as fast as decimal", "It needs exactly 2 bytes per number"],
              answer: 1,
              explain: "Binary represents all data with two symbols (0 and 1) — each position is a power of 2.",
            },
            {
              q: "Big-O notation primarily describes…",
              options: ["The exact runtime in seconds", "How an algorithm's cost grows as input size grows", "How much a program costs to write", "The number of bugs in code"],
              answer: 1,
              explain: "Big-O captures the growth rate (scalability) of time/space as input n increases, ignoring constants.",
            },
            {
              q: "Why is 'abstraction' so important in computer science?",
              options: ["It makes code run on the GPU", "It lets you hide complexity behind a simpler interface", "It deletes unused memory", "It encrypts your data"],
              answer: 1,
              explain: "Abstraction lets you use something (a function, a layer) without knowing its internal details — the core idea behind all software layering.",
            },
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
          quiz: [
            {
              q: "Which data structure stores key→value pairs in Python?",
              options: ["list", "tuple", "dict", "set"],
              answer: 2,
              explain: "A dict maps unique keys to values, e.g. {\"name\": \"Ada\"}.",
            },
            {
              q: "What does a 'for' loop do?",
              options: ["Runs code once", "Repeats code for each item in a sequence", "Defines a class", "Imports a module"],
              answer: 1,
              explain: "A for loop iterates over each element of an iterable (list, range, string, …).",
            },
            {
              q: "What is the result of len([1, 2, 3])?",
              options: ["2", "3", "6", "Error"],
              answer: 1,
              explain: "len() returns the number of items — here, 3.",
            },
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
          quiz: [
            {
              q: "What does `git commit` do?",
              options: ["Uploads code to GitHub", "Saves a snapshot of staged changes to local history", "Deletes a branch", "Downloads a repo"],
              answer: 1,
              explain: "Commit records staged changes into your local repository. `git push` is what uploads to GitHub.",
            },
            {
              q: "Which command uploads your local commits to a remote like GitHub?",
              options: ["git pull", "git push", "git add", "git status"],
              answer: 1,
              explain: "git push sends your local commits to the remote repository.",
            },
            {
              q: "What is a branch used for?",
              options: ["Storing passwords", "Working on changes in isolation from main", "Compiling code", "Renaming files"],
              answer: 1,
              explain: "Branches let you develop features/fixes independently, then merge them back via a pull request.",
            },
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
          quiz: [
            {
              q: "Which SQL clause filters rows before grouping?",
              options: ["HAVING", "WHERE", "ORDER BY", "LIMIT"],
              answer: 1,
              explain: "WHERE filters individual rows; HAVING filters groups after GROUP BY.",
            },
            {
              q: "A JOIN is used to…",
              options: ["Combine rows from two or more tables", "Delete a table", "Sort results", "Create an index"],
              answer: 0,
              explain: "JOINs relate rows across tables using matching keys (e.g. foreign keys).",
            },
            {
              q: "What does a PRIMARY KEY guarantee?",
              options: ["The column is encrypted", "Each row has a unique, non-null identifier", "The table is sorted", "Faster inserts"],
              answer: 1,
              explain: "A primary key uniquely identifies each row and cannot be NULL.",
            },
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
          quiz: [
            {
              q: "Average lookup time in a well-sized hash table is…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 0,
              explain: "Hash tables give amortized O(1) average lookups via hashing keys to buckets.",
            },
            {
              q: "A stack follows which order?",
              options: ["FIFO (first in, first out)", "LIFO (last in, first out)", "Sorted order", "Random order"],
              answer: 1,
              explain: "Stacks are Last-In-First-Out — the most recently pushed item is popped first.",
            },
            {
              q: "Binary search requires the array to be…",
              options: ["Sorted", "Empty", "A linked list", "Hashed"],
              answer: 0,
              explain: "Binary search halves a SORTED range each step, giving O(log n).",
            },
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
          quiz: [
            {
              q: "Which HTML tag best represents the main navigation links?",
              options: ["<div>", "<nav>", "<span>", "<table>"],
              answer: 1,
              explain: "<nav> is the semantic element for navigation; semantic tags help accessibility and SEO.",
            },
            {
              q: "In the CSS box model, which is OUTSIDE the border?",
              options: ["padding", "content", "margin", "text"],
              answer: 2,
              explain: "Order from inside out: content → padding → border → margin.",
            },
            {
              q: "Which layout system is best for one-dimensional rows or columns?",
              options: ["Flexbox", "Tables", "Float", "position: absolute"],
              answer: 0,
              explain: "Flexbox excels at 1-D layouts; CSS Grid is designed for 2-D (rows AND columns).",
            },
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
          quiz: [
            {
              q: "What does `const` mean for a variable?",
              options: ["It can never change at all", "Its binding can't be reassigned", "It is a global variable", "It is always a number"],
              answer: 1,
              explain: "const prevents reassignment of the binding, though object/array contents can still mutate.",
            },
            {
              q: "What is the DOM?",
              options: ["A database", "A tree representation of the page the browser can change", "A CSS framework", "A type of loop"],
              answer: 1,
              explain: "The Document Object Model is the live tree of the page; JS manipulates it to make pages interactive.",
            },
            {
              q: "Which keyword handles asynchronous results cleanly in modern JS?",
              options: ["await", "for", "switch", "typeof"],
              answer: 0,
              explain: "async/await lets you write asynchronous (Promise-based) code in a readable, sequential style.",
            },
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
          quiz: [
            {
              q: "What does the useState hook give you?",
              options: ["A way to fetch data", "A state value and a function to update it", "A CSS class", "A router"],
              answer: 1,
              explain: "useState returns [value, setValue]; calling setValue re-renders the component.",
            },
            {
              q: "Props in React are…",
              options: ["Mutable global variables", "Read-only inputs passed from a parent component", "CSS properties", "Database rows"],
              answer: 1,
              explain: "Props flow down from parent to child and should be treated as read-only by the child.",
            },
            {
              q: "Why does React use a virtual DOM?",
              options: ["To store cookies", "To efficiently compute minimal real-DOM updates", "To encrypt the page", "To replace JavaScript"],
              answer: 1,
              explain: "React diffs a virtual tree and applies only the necessary changes, which is fast.",
            },
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
          quiz: [
            {
              q: "In a REST API, which HTTP method typically CREATES a resource?",
              options: ["GET", "POST", "DELETE", "HEAD"],
              answer: 1,
              explain: "POST creates; GET reads; PUT/PATCH update; DELETE removes.",
            },
            {
              q: "What is Express in the Node ecosystem?",
              options: ["A database", "A minimal web/HTTP server framework", "A CSS library", "A test runner"],
              answer: 1,
              explain: "Express is a lightweight framework for routing and handling HTTP requests in Node.",
            },
            {
              q: "What does 'MERN' stand for?",
              options: ["MongoDB, Express, React, Node", "Java, REST, Node", "MySQL, Ember, Ruby, Nginx", "Mongo, Elastic, Redis, Nginx"],
              answer: 0,
              explain: "MERN = MongoDB + Express + React + Node — a popular all-JavaScript full-stack.",
            },
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
          quiz: [
            {
              q: "The 'two pointers' pattern is most useful on…",
              options: ["Unsorted random data", "Sorted arrays or linked lists", "Hash maps only", "Recursive trees"],
              answer: 1,
              explain: "Two pointers shine on sorted sequences (or pairs converging from both ends).",
            },
            {
              q: "A sliding window is typically used to…",
              options: ["Sort an array", "Track a contiguous subrange while scanning once", "Reverse a string", "Build a heap"],
              answer: 1,
              explain: "Sliding window maintains a moving subarray/substring in O(n) instead of nested loops.",
            },
            {
              q: "Dynamic programming primarily avoids…",
              options: ["Using memory", "Recomputing overlapping subproblems", "Sorting", "Recursion entirely"],
              answer: 1,
              explain: "DP stores subproblem results (memoization/tabulation) to avoid exponential recomputation.",
            },
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
          quiz: [
            {
              q: "A load balancer's main job is to…",
              options: ["Store the database", "Distribute requests across multiple servers", "Encrypt traffic", "Compile code"],
              answer: 1,
              explain: "Load balancers spread traffic so no single server is overwhelmed, improving scale and availability.",
            },
            {
              q: "Caching improves performance mainly by…",
              options: ["Adding more bugs", "Serving frequent results from fast storage", "Deleting data", "Slowing writes"],
              answer: 1,
              explain: "A cache keeps hot data in fast memory so repeated reads avoid the slow source.",
            },
            {
              q: "Horizontal scaling means…",
              options: ["Buying a bigger single machine", "Adding more machines to share load", "Deleting servers", "Rewriting in C"],
              answer: 1,
              explain: "Horizontal = add more nodes; vertical = make one node bigger. Horizontal scales further.",
            },
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
          quiz: [
            {
              q: "Which command lists files in the current directory?",
              options: ["cd", "ls", "rm", "echo"],
              answer: 1,
              explain: "ls lists directory contents; cd changes directory; rm removes; echo prints.",
            },
            {
              q: "In `chmod`, what does the permission '7' (rwx) grant?",
              options: ["Read only", "Read + write + execute", "Execute only", "No access"],
              answer: 1,
              explain: "4(r)+2(w)+1(x)=7, so 7 grants read, write, and execute.",
            },
            {
              q: "What does the pipe `|` do in a shell command?",
              options: ["Comments a line", "Sends one command's output into another's input", "Deletes a file", "Runs as root"],
              answer: 1,
              explain: "A pipe feeds stdout of the left command into stdin of the right, e.g. `ps aux | grep ssh`.",
            },
          ],
        },
      ],
    },

    {
      id: "p6",
      title: "Phase 6 — Android App Engineering",
      subtitle:
        "Become a real Android developer: Kotlin → coroutines → the four app components → modern Jetpack Compose UI → clean architecture with dependency injection.",
      icon: "📱",
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
          quiz: [
            {
              q: "What does Kotlin's `?` after a type (e.g. String?) mean?",
              options: ["The value is encrypted", "The variable can hold null", "It's a constant", "It's a coroutine"],
              answer: 1,
              explain: "A trailing ? makes a type nullable. Kotlin's null-safety forces you to handle the null case.",
            },
            {
              q: "Which keyword declares a read-only (immutable) variable?",
              options: ["var", "val", "let", "fun"],
              answer: 1,
              explain: "val is read-only after assignment; var is mutable.",
            },
            {
              q: "What is a `data class` good for?",
              options: ["Networking", "Holding data with auto-generated equals/hashCode/toString", "Drawing UI", "Threading"],
              answer: 1,
              explain: "data classes auto-generate equals(), hashCode(), toString(), and copy() for value-holding types.",
            },
          ],
        },
        {
          id: "kotlin-coroutines",
          videoId: "ppvhqkjuu9c",
          title: "Kotlin Coroutines Crash Course — Master Async in 90 Minutes",
          channel: "Himanshu Gaur",
          duration: "~1.5 hours",
          level: "Intermediate",
          blurb:
            "Modern Android is asynchronous to the core. Coroutines are how you do networking, database, and background work without freezing the UI — a skill every Android job expects. Learn suspend functions, scopes, dispatchers, and structured concurrency.",
          learn: [
            "suspend functions and how coroutines pause/resume",
            "launch vs async, scopes, and Dispatchers (Main/IO/Default)",
            "Structured concurrency and cancellation",
            "Turning callback code into clean sequential code",
          ],
          resources: [
            { label: "Android Developers — Coroutines", url: "https://developer.android.com/kotlin/coroutines" },
            { label: "Philipp Lackner — Coroutines playlist", url: "https://www.youtube.com/playlist?list=PLQkwcJG4YTCQcFEPuYGuv54nYai_lwil_" },
          ],
          quiz: [
            {
              q: "A `suspend` function can…",
              options: ["Only run on the main thread", "Pause and resume without blocking the thread", "Never be cancelled", "Replace the UI"],
              answer: 1,
              explain: "suspend functions suspend the coroutine (freeing the thread) and resume later — the heart of non-blocking async.",
            },
            {
              q: "Which dispatcher should you use for network or disk I/O?",
              options: ["Dispatchers.Main", "Dispatchers.IO", "Dispatchers.UI", "Dispatchers.GPU"],
              answer: 1,
              explain: "Dispatchers.IO is optimized for blocking I/O; Main is for UI updates only.",
            },
            {
              q: "'Structured concurrency' means…",
              options: ["Coroutines run forever", "Child coroutines are tied to a scope and cancelled with it", "Threads never block", "You must use Java threads"],
              answer: 1,
              explain: "Coroutines launched in a scope are cancelled together when the scope is cancelled — preventing leaks.",
            },
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
          quiz: [
            {
              q: "Which of these is NOT one of the four core Android components?",
              options: ["Activity", "Service", "Fragment", "Broadcast Receiver"],
              answer: 2,
              explain: "The four components are Activity, Service, Broadcast Receiver, and Content Provider. A Fragment is a reusable UI piece hosted inside an Activity.",
            },
            {
              q: "What is an Intent used for?",
              options: ["Styling the UI", "Messaging to start components or pass data", "Storing files", "Compiling code"],
              answer: 1,
              explain: "Intents are messaging objects to request an action — e.g. start an Activity/Service or broadcast an event.",
            },
            {
              q: "Where are an app's components and permissions declared?",
              options: ["build.gradle", "AndroidManifest.xml", "strings.xml", "MainActivity.kt"],
              answer: 1,
              explain: "AndroidManifest.xml declares components, permissions, and app metadata to the system.",
            },
          ],
        },
        {
          id: "jetpack-compose",
          videoId: "6_wK_Ud8--0",
          title: "Jetpack Compose — Beginner Crash Course",
          channel: "Philipp Lackner",
          duration: "~1 hour",
          level: "Intermediate",
          blurb:
            "Jetpack Compose is now the standard, declarative way to build Android UI — replacing XML layouts. Learn composables, state, recomposition, and modifiers. This is the #1 modern Android UI skill employers look for.",
          learn: [
            "Composable functions and the declarative model",
            "State, remember, and recomposition",
            "Modifiers, layout, and theming with Material 3",
            "Building reactive UI that updates from state",
          ],
          resources: [
            { label: "Android Developers — Compose", url: "https://developer.android.com/develop/ui/compose/documentation" },
            { label: "Compose pathway (codelabs)", url: "https://developer.android.com/courses/pathways/compose" },
          ],
          quiz: [
            {
              q: "Jetpack Compose UI is described as…",
              options: ["Imperative (you mutate views)", "Declarative (UI is a function of state)", "XML-only", "Server-rendered"],
              answer: 1,
              explain: "In Compose you describe UI for a given state; when state changes, Compose re-runs (recomposes) the affected composables.",
            },
            {
              q: "What does `remember { mutableStateOf(...) }` do?",
              options: ["Saves to disk", "Holds state across recompositions and triggers UI updates", "Starts a coroutine", "Creates a database"],
              answer: 1,
              explain: "It stores observable state in the composition; reading it subscribes the composable to changes.",
            },
            {
              q: "What is a Modifier in Compose?",
              options: ["A build setting", "A chainable object to decorate/lay out a composable", "A Gradle plugin", "A permission"],
              answer: 1,
              explain: "Modifiers (e.g. .padding().fillMaxWidth()) adjust size, layout, behavior, and appearance.",
            },
          ],
        },
        {
          id: "hilt-di",
          videoId: "ZE2Jkvnk2Bs",
          title: "Dependency Injection with Dagger-Hilt — Full Course",
          channel: "Philipp Lackner",
          duration: "~1.5 hours",
          level: "Advanced",
          blurb:
            "Clean, testable architecture is what separates junior code from production code. Hilt is Google's recommended dependency-injection framework — learn how to provide and inject dependencies so your app scales and stays testable.",
          learn: [
            "Why dependency injection matters (decoupling & testing)",
            "Hilt modules, @Provides, and @Inject",
            "Scopes and component lifetimes",
            "Injecting into ViewModels and Activities",
          ],
          resources: [
            { label: "Android Developers — Hilt", url: "https://developer.android.com/training/dependency-injection/hilt-android" },
            { label: "Guide to app architecture", url: "https://developer.android.com/topic/architecture" },
          ],
          quiz: [
            {
              q: "Dependency injection mainly improves…",
              options: ["Battery life", "Decoupling and testability", "Screen resolution", "Network speed"],
              answer: 1,
              explain: "DI supplies dependencies from outside a class, so classes are decoupled and easy to test with fakes/mocks.",
            },
            {
              q: "In Hilt, `@Inject` on a constructor tells Hilt to…",
              options: ["Delete the class", "Know how to create and provide that type", "Encrypt it", "Run it on a thread"],
              answer: 1,
              explain: "@Inject marks how Hilt should construct the dependency so it can supply it where needed.",
            },
            {
              q: "What is a Hilt @Module used for?",
              options: ["Drawing UI", "Telling Hilt how to provide types it can't construct directly (e.g. interfaces, Retrofit)", "Storing strings", "Defining permissions"],
              answer: 1,
              explain: "Modules with @Provides/@Binds tell Hilt how to create types it can't construct itself.",
            },
          ],
        },
      ],
    },

    {
      id: "p7",
      title: "Phase 7 — Android Platform, AOSP & Kernel",
      subtitle:
        "The rare deep specialization: go beneath the app into the platform — AOSP internals, Binder IPC, SELinux, Perfetto tracing, board bring-up, the Linux kernel, and device drivers. The full stack of an Android systems engineer.",
      icon: "🤖",
      courses: [
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
          quiz: [
            {
              q: "From top to bottom, which ordering of the Android stack is correct?",
              options: ["Kernel → HAL → Framework → Apps", "Apps → Framework → HAL → Kernel", "HAL → Apps → Kernel → Framework", "Framework → Kernel → Apps → HAL"],
              answer: 1,
              explain: "Apps sit on the Java/Kotlin framework, which talks through the HAL to the Linux kernel and hardware.",
            },
            {
              q: "What is the central system process that hosts most framework services?",
              options: ["init", "system_server", "zygote", "logd"],
              answer: 1,
              explain: "system_server hosts services like ActivityManager, PackageManager, WindowManager, etc.",
            },
            {
              q: "What does the HAL (Hardware Abstraction Layer) do?",
              options: ["Renders the UI", "Gives the framework a standard interface to vendor hardware", "Stores apps", "Manages Wi-Fi passwords"],
              answer: 1,
              explain: "The HAL abstracts device-specific hardware behind standard interfaces the framework calls.",
            },
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
          quiz: [
            {
              q: "What problem does Binder solve?",
              options: ["Drawing pixels", "Inter-process communication (IPC) between Android components", "Charging the battery", "Compiling Kotlin"],
              answer: 1,
              explain: "Binder is Android's primary IPC mechanism, letting separate processes call each other safely.",
            },
            {
              q: "AIDL is used to…",
              options: ["Define an interface for Binder IPC across processes", "Style layouts", "Configure Gradle", "Encrypt storage"],
              answer: 0,
              explain: "AIDL (Android Interface Definition Language) generates proxy/stub code for cross-process Binder calls.",
            },
            {
              q: "Where does the Binder driver actually live?",
              options: ["In the app APK", "In the Linux kernel", "In the cloud", "In the bootloader"],
              answer: 1,
              explain: "Binder is implemented as a kernel driver (/dev/binder); the kernel mediates the transactions.",
            },
          ],
        },
        {
          id: "android-selinux",
          videoId: "uI9nk1VDCpY",
          title: "SELinux in Android (AOSP Meetup, Google)",
          channel: "Chris Simmonds · AOSP/AAOS Meetup",
          duration: "~50 min",
          level: "Advanced",
          blurb:
            "SELinux is the mandatory access-control layer that locks Android down — and the source of countless 'avc: denied' boot bugs every platform engineer must read and fix. Learn enforcing vs permissive, domains, contexts, and how sepolicy decisions are made.",
          learn: [
            "Mandatory access control: enforcing vs permissive",
            "Domains, types, contexts, and labels",
            "Reading 'avc: denied' audit logs",
            "Where sepolicy lives in AOSP and how to extend it",
          ],
          resources: [
            { label: "source.android.com — SELinux", url: "https://source.android.com/docs/security/features/selinux" },
            { label: "SELinux concepts", url: "https://source.android.com/docs/security/features/selinux/concepts" },
          ],
          quiz: [
            {
              q: "In SELinux 'enforcing' mode, a denied action is…",
              options: ["Logged and allowed", "Logged and blocked", "Ignored silently", "Retried forever"],
              answer: 1,
              explain: "Enforcing blocks AND logs denials; permissive only logs them (useful while developing policy).",
            },
            {
              q: "An 'avc: denied' message in logcat/dmesg indicates…",
              options: ["A network timeout", "An SELinux policy denial you may need to allow", "Low battery", "A compile error"],
              answer: 1,
              explain: "AVC (Access Vector Cache) denials show a domain was blocked from an action — you fix it by adjusting sepolicy.",
            },
            {
              q: "SELinux is an example of which security model?",
              options: ["Discretionary access control", "Mandatory access control (MAC)", "No access control", "Antivirus"],
              answer: 1,
              explain: "SELinux enforces system-defined (mandatory) policy that even root must obey.",
            },
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
          quiz: [
            {
              q: "Which tool is the Swiss-army knife for talking to a device during platform debugging?",
              options: ["adb", "npm", "git", "make"],
              answer: 0,
              explain: "adb (Android Debug Bridge) installs, shells in, pulls logs, and bridges your host to the device.",
            },
            {
              q: "`logcat` is used to…",
              options: ["Flash the bootloader", "View the system/app log stream", "Edit sepolicy", "Build the kernel"],
              answer: 1,
              explain: "logcat streams Android's logs — the first place to look when debugging the platform.",
            },
            {
              q: "A platform engineer modifying framework code works mostly in…",
              options: ["A single app's APK", "The AOSP source tree (e.g. frameworks/base)", "The Play Store", "A web browser"],
              answer: 1,
              explain: "Framework changes live in the AOSP tree (frameworks/base, etc.), then you rebuild and flash.",
            },
          ],
        },
        {
          id: "android-perfetto",
          videoId: "phhLFicMacY",
          title: "Performance: Perfetto Traceviewer (MAD Skills)",
          channel: "Android Developers (Google)",
          duration: "~10 min",
          level: "Advanced",
          blurb:
            "Perfetto is Android's modern system-wide tracing tool — the successor to systrace. It's how you diagnose jank, slow boots, scheduling, and binder latency by capturing a trace and analyzing it at ui.perfetto.dev. Essential for any performance or platform work.",
          learn: [
            "Capturing a system trace with Perfetto",
            "Reading the timeline at ui.perfetto.dev",
            "Spotting jank, CPU scheduling, and binder calls",
            "Why Perfetto replaced systrace",
          ],
          resources: [
            { label: "perfetto.dev — official docs", url: "https://perfetto.dev/docs/" },
            { label: "Inspect with Perfetto", url: "https://developer.android.com/topic/performance/tracing" },
          ],
          quiz: [
            {
              q: "Perfetto is primarily a tool for…",
              options: ["Editing layouts", "System-wide performance tracing/profiling", "Signing APKs", "Managing Git"],
              answer: 1,
              explain: "Perfetto captures detailed system traces (CPU, scheduling, binder, etc.) for performance analysis.",
            },
            {
              q: "Where do you open and analyze a Perfetto trace?",
              options: ["ui.perfetto.dev", "github.com", "play.google.com", "in Notepad"],
              answer: 0,
              explain: "The Perfetto UI (ui.perfetto.dev) loads the .perfetto-trace and renders an interactive timeline.",
            },
            {
              q: "Perfetto is considered the successor to which older tool?",
              options: ["adb", "systrace", "gradle", "logcat"],
              answer: 1,
              explain: "Perfetto modernizes and replaces systrace for system tracing on Android.",
            },
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
          quiz: [
            {
              q: "The 'Android Common Kernel' (ACK) is…",
              options: ["A separate OS", "Google's downstream Linux kernel with Android patches", "A Java library", "A bootloader"],
              answer: 1,
              explain: "ACK is the Android-patched Linux kernel branch that vendor kernels are based on.",
            },
            {
              q: "What is the first software the SoC runs that then loads Android?",
              options: ["The bootloader (e.g. U-Boot)", "The launcher app", "system_server", "Gradle"],
              answer: 0,
              explain: "The bootloader initializes hardware and loads the kernel/boot image to start the Android boot flow.",
            },
            {
              q: "Bringing up a board's hardware features in Android usually requires…",
              options: ["Only changing wallpaper", "Kernel drivers + HAL implementations for the device", "A new Play Store account", "Rewriting Kotlin apps"],
              answer: 1,
              explain: "Each hardware feature needs a kernel driver and a matching HAL so the framework can use it.",
            },
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
          quiz: [
            {
              q: "Code running in 'kernel space' has…",
              options: ["The same limits as an app", "Full privileged access to hardware and memory", "No access to the CPU", "Only network access"],
              answer: 1,
              explain: "Kernel space is privileged: a bug there can crash the whole system, unlike a sandboxed user-space app.",
            },
            {
              q: "Which commands load/unload a kernel module?",
              options: ["git push / git pull", "insmod / rmmod", "adb install / uninstall", "make / clean"],
              answer: 1,
              explain: "insmod inserts a module, rmmod removes it; lsmod lists loaded modules.",
            },
            {
              q: "The Linux kernel is primarily written in…",
              options: ["Kotlin", "C (with some assembly)", "Python", "JavaScript"],
              answer: 1,
              explain: "The kernel is overwhelmingly C plus architecture-specific assembly.",
            },
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
          quiz: [
            {
              q: "In Linux, devices are commonly exposed to user space as…",
              options: ["Registry keys", "Files under /dev", "Email messages", "Web URLs"],
              answer: 1,
              explain: "The 'everything is a file' model exposes devices as nodes in /dev (e.g. /dev/ttyS0).",
            },
            {
              q: "A 'character device' transfers data…",
              options: ["In fixed blocks only", "As a stream of bytes", "Over Wi-Fi only", "Never"],
              answer: 1,
              explain: "Character devices stream bytes (serial ports, etc.); block devices transfer fixed-size blocks (disks).",
            },
            {
              q: "How does an Android HAL ultimately reach hardware?",
              options: ["Through the Play Store", "Through Linux kernel drivers", "Through the bootloader UI", "Through Gradle"],
              answer: 1,
              explain: "HAL implementations call into kernel drivers (via /dev, ioctl, sysfs) that control the silicon.",
            },
          ],
        },
      ],
    },
  ],
};
