/*
 * SkillForge DS — Data Structures, Basic → Advanced
 * ------------------------------------------------------------
 * 100% FREE, highly-regarded YouTube videos for learning data
 * structures, ordered basic -> advanced. Taught by William Fiset
 * (Google engineer / freeCodeCamp), HackerRank (Gayle Laakmann
 * McDowell), mycodeschool, Abdul Bari, Michael Sambol, Spanning
 * Tree, Tushar Roy, ByteByteGo, Jenny's Lectures and 3Blue1Brown.
 * Every videoId is verified against the canonical upload (checked
 * via YouTube's oEmbed endpoint). Attached to window.ROADMAP so the
 * shared app.js / styles.css render this page.
 *
 * DS-track-only fields rendered by app.js:
 *   complexity: [ { label, value } ]   -> Big-O strip under the blurb
 *   realWorld:  [ { sys, text } ]      -> "Where it's used in production"
 *
 * Real-world claims are grounded in deep research with primary
 * sources (PostgreSQL, Apache Cassandra, RocksDB, Redis docs, MIT
 * OCW, cp-algorithms) plus widely-documented engineering practice.
 *
 * Each course may also carry a `quiz` array of { q, options[], answer, explain }.
 */
window.ROADMAP = {
  meta: {
    title: "SkillForge DS",
    tagline: "Data structures, basic → advanced — and exactly how real systems use each one.",
    subtitle:
      "Every structure from arrays to LSM-trees and bloom filters, taught by the most-loved free video on the topic — then mapped to how production systems (PostgreSQL, Redis, RocksDB, Cassandra, the Linux kernel, Git, blockchains) actually use it. See the Big-O up front, learn where it shows up at scale, and quiz yourself as you go.",
  },

  phases: [
    /* ===================================================================
       PHASE 1 — Foundations & linear structures
       =================================================================== */
    {
      id: "ds1",
      title: "Phase 1 — Foundations & Linear Structures",
      subtitle: "The mental model for cost (Big-O) and the four structures every program is built on.",
      icon: "🧱",
      courses: [
        {
          id: "bigo",
          videoId: "0IAPZzGSbME",
          title: "Big-O & Algorithm Analysis",
          channel: "Abdul Bari",
          duration: "~10 min",
          level: "Beginner",
          blurb:
            "Before any structure, learn the language of cost. Big-O describes how time and memory grow as input grows — the single lens you'll use to choose between every data structure that follows.",
          complexity: [
            { label: "Constant", value: "O(1)" },
            { label: "Logarithmic", value: "O(log n)" },
            { label: "Linear", value: "O(n)" },
            { label: "Quadratic", value: "O(n²)" },
          ],
          realWorld: [
            { sys: "Every system", text: "Big-O is how engineers reason about scale: an O(n²) loop that's fine on 100 rows melts down on 10 million. Picking O(log n) over O(n) lookups is the difference between a fast database and a slow one." },
            { sys: "Interviews", text: "Time/space complexity is the vocabulary every FAANG-style interview is conducted in — you justify each choice in Big-O." },
          ],
          learn: [
            "What Big-O, Big-Θ and Big-Ω actually measure",
            "Reading growth rates: O(1), O(log n), O(n), O(n log n), O(n²)",
            "Why constants and lower-order terms are dropped",
            "Time vs. space complexity trade-offs",
          ],
          resources: [
            { label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
            { label: "VisuAlgo — visualize structures", url: "https://visualgo.net/en" },
          ],
          quiz: [
            {
              q: "Big-O notation primarily describes…",
              options: ["The exact runtime in seconds", "How an algorithm's cost grows as input size grows", "How many bugs the code has", "The CPU clock speed"],
              answer: 1,
              explain: "Big-O captures the growth rate (scalability) of time/space as input n increases, ignoring constants.",
            },
            {
              q: "Which is faster for large n?",
              options: ["O(n²)", "O(n log n)", "O(log n)", "O(n)"],
              answer: 2,
              explain: "O(log n) grows slowest of these — doubling n adds only one more step.",
            },
            {
              q: "Why do we drop constants (e.g. write O(n) not O(2n))?",
              options: ["Constants are always 1", "Big-O describes asymptotic growth, where constants don't change the shape", "It's a typo convention", "To make code run faster"],
              answer: 1,
              explain: "Big-O is about how cost scales as n→∞; constant factors don't change the growth class.",
            },
          ],
        },
        {
          id: "arrays",
          videoId: "AT14lCXuMKI",
          title: "Arrays & Strings",
          channel: "Jenny's Lectures CS IT",
          duration: "~20 min",
          level: "Beginner",
          blurb:
            "A contiguous block of memory with O(1) indexed access — the most fundamental structure there is. Strings are just arrays of characters, and dynamic arrays (vector / ArrayList / Python list) grow by doubling.",
          complexity: [
            { label: "Access by index", value: "O(1)" },
            { label: "Search", value: "O(n)" },
            { label: "Insert / delete (middle)", value: "O(n)" },
            { label: "Append (amortized)", value: "O(1)" },
          ],
          realWorld: [
            { sys: "NumPy / ML", text: "Tensors and NumPy arrays are contiguous typed arrays — contiguity is what lets CPUs/GPUs stream them through caches and SIMD lanes, the backbone of every ML pipeline." },
            { sys: "Images & audio", text: "A bitmap is a 2-D array of pixels; raw audio is an array of samples. O(1) indexing is why you can jump to any pixel/sample instantly." },
            { sys: "Dynamic arrays", text: "Python list, Java ArrayList, C++ std::vector and Go slices all double capacity on growth — giving amortized O(1) append while keeping cache-friendly contiguity." },
          ],
          learn: [
            "Contiguous memory layout and why indexing is O(1)",
            "Static vs. dynamic arrays; the doubling / amortized-O(1) trick",
            "Strings as character arrays; immutability in many languages",
            "Cache locality — why arrays are often faster than 'theoretically equal' structures",
          ],
          resources: [
            { label: "MDN — JavaScript Array", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" },
            { label: "Python list time complexity", url: "https://wiki.python.org/moin/TimeComplexity" },
          ],
          quiz: [
            {
              q: "Why is reading array[5] O(1)?",
              options: ["The CPU searches every element", "The address is computed directly as base + 5 × element-size", "Arrays are always sorted", "It uses a hash function"],
              answer: 1,
              explain: "Contiguous memory means any index maps to a direct address via simple arithmetic — no scanning.",
            },
            {
              q: "Appending to a full dynamic array is amortized O(1) because…",
              options: ["It never resizes", "Capacity doubles, so costly copies happen rarely and average out", "Arrays can't be full", "It deletes an element first"],
              answer: 1,
              explain: "Doubling means resizes get geometrically rarer; spread over many appends, each costs O(1) on average.",
            },
            {
              q: "Inserting at the FRONT of an array is…",
              options: ["O(1)", "O(log n)", "O(n) — everything must shift", "O(n²)"],
              answer: 2,
              explain: "Every existing element must shift one slot to make room, which is linear.",
            },
          ],
        },
        {
          id: "linkedlist",
          videoId: "NobHlGUjV3g",
          title: "Linked Lists",
          channel: "mycodeschool",
          duration: "~8 min",
          level: "Beginner",
          blurb:
            "Nodes scattered in memory, each pointing to the next. You trade O(1) random access for O(1) insert/delete once you hold a node — the structure behind LRU caches and kernel object lists.",
          complexity: [
            { label: "Access / search", value: "O(n)" },
            { label: "Insert / delete at head", value: "O(1)" },
            { label: "Insert / delete (known node)", value: "O(1)" },
            { label: "Space overhead", value: "O(n) pointers" },
          ],
          realWorld: [
            { sys: "LRU caches", text: "An LRU cache pairs a hash map with a doubly-linked list: moving a just-used entry to the front and evicting the tail are both O(1). This is how Redis approximates LRU and how OS page caches order pages." },
            { sys: "Linux kernel", text: "The kernel's ubiquitous list_head is an intrusive doubly-linked list used everywhere — process lists, wait queues, driver structures." },
            { sys: "Redis", text: "Redis Lists (LPUSH/RPUSH) are backed by linked structures, giving O(1) pushes/pops at both ends for queues and stacks." },
          ],
          learn: [
            "Singly vs. doubly vs. circular linked lists",
            "O(1) insert/delete once you hold a node — vs. O(n) to find it",
            "Why there's no O(1) random access (no index arithmetic)",
            "Pointer manipulation and the classic 'reverse a linked list'",
          ],
          resources: [
            { label: "VisuAlgo — Linked List", url: "https://visualgo.net/en/list" },
            { label: "HackerRank — Linked Lists video", url: "https://www.youtube.com/watch?v=njTh_OwMljA" },
          ],
          quiz: [
            {
              q: "Compared to an array, a linked list gives up…",
              options: ["O(1) insert at head", "O(1) random access by index", "The ability to store data", "Dynamic size"],
              answer: 1,
              explain: "Without contiguous memory there's no address arithmetic, so reaching the k-th node is O(n).",
            },
            {
              q: "An LRU cache uses a doubly-linked list because…",
              options: ["It sorts the data", "It allows O(1) move-to-front and O(1) eviction from the tail", "Lists use less memory than arrays", "It hashes keys"],
              answer: 1,
              explain: "Holding the node lets you splice it out and re-insert in O(1); a hash map gives O(1) lookup of that node.",
            },
            {
              q: "A doubly-linked list node stores…",
              options: ["Only the value", "value + next pointer", "value + next + prev pointers", "An index"],
              answer: 2,
              explain: "Two pointers (next and prev) enable O(1) deletion given a node and backward traversal.",
            },
          ],
        },
        {
          id: "stacks",
          videoId: "F1F2imiOJfk",
          title: "Stacks (LIFO)",
          channel: "mycodeschool",
          duration: "~9 min",
          level: "Beginner",
          blurb:
            "Last-In-First-Out: push and pop at one end, both O(1). It's the structure that literally runs your code — the function call stack — and powers undo, parsing, and depth-first search.",
          complexity: [
            { label: "Push", value: "O(1)" },
            { label: "Pop", value: "O(1)" },
            { label: "Peek", value: "O(1)" },
            { label: "Search", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Language runtimes", text: "The call stack stores each function's local frame; recursion is just pushing frames. 'Stack overflow' is this structure literally running out of room." },
            { sys: "Editors & browsers", text: "Undo/redo and browser back/forward are two stacks. Every Ctrl+Z pops the last action." },
            { sys: "Compilers", text: "Expression evaluation, bracket matching, and syntax parsing use stacks (e.g. the shunting-yard algorithm)." },
            { sys: "DFS & backtracking", text: "Depth-first search and backtracking (mazes, sudoku, regex engines) use an explicit or call stack to remember where to resume." },
          ],
          learn: [
            "LIFO semantics: push / pop / peek, all O(1)",
            "Array-backed vs. linked-list-backed stacks",
            "The call stack and how recursion maps onto it",
            "Classic uses: balanced parentheses, expression evaluation, DFS",
          ],
          resources: [
            { label: "VisuAlgo — Stack/Queue", url: "https://visualgo.net/en/list" },
            { label: "HackerRank — Stacks & Queues video", url: "https://www.youtube.com/watch?v=wjI1WNcIntg" },
          ],
          quiz: [
            {
              q: "A stack follows which order?",
              options: ["FIFO (first in, first out)", "LIFO (last in, first out)", "Sorted order", "Random order"],
              answer: 1,
              explain: "Stacks are Last-In-First-Out — the most recently pushed item is popped first.",
            },
            {
              q: "Which real mechanism is literally a stack?",
              options: ["A database index", "The function call stack", "A network packet", "A hash table"],
              answer: 1,
              explain: "Each function call pushes a frame; returning pops it. Too-deep recursion causes a stack overflow.",
            },
            {
              q: "Checking balanced parentheses '(()())' is naturally done with a…",
              options: ["Queue", "Stack", "Heap", "Graph"],
              answer: 1,
              explain: "Push each '(' and pop on each ')'; if it's ever empty early or non-empty at the end, it's unbalanced.",
            },
          ],
        },
        {
          id: "queues",
          videoId: "XuCbpw6Bj1U",
          title: "Queues (FIFO)",
          channel: "mycodeschool",
          duration: "~8 min",
          level: "Beginner",
          blurb:
            "First-In-First-Out: enqueue at the back, dequeue at the front, both O(1). Queues decouple producers from consumers — the idea behind every message broker and OS scheduler.",
          complexity: [
            { label: "Enqueue", value: "O(1)" },
            { label: "Dequeue", value: "O(1)" },
            { label: "Peek front", value: "O(1)" },
            { label: "Search", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Kafka / RabbitMQ", text: "Message queues buffer work so producers and consumers run at their own pace — the backbone of event-driven and microservice architectures." },
            { sys: "OS schedulers", text: "Operating systems keep run queues of ready processes/threads; the scheduler dequeues the next one to run." },
            { sys: "BFS", text: "Breadth-first search uses a queue to visit nodes level by level — shortest paths in unweighted graphs, web crawling." },
            { sys: "Buffers & spoolers", text: "Print spoolers, request queues behind load balancers, and ring buffers in networking all preserve arrival order." },
          ],
          learn: [
            "FIFO semantics: enqueue / dequeue, both O(1)",
            "Circular buffers (ring buffers) for fixed-size queues",
            "Deques (double-ended queues) and priority queues as variants",
            "Producer/consumer decoupling and back-pressure",
          ],
          resources: [
            { label: "VisuAlgo — Queue", url: "https://visualgo.net/en/list" },
            { label: "Kafka — intro to topics & partitions", url: "https://kafka.apache.org/intro" },
          ],
          quiz: [
            {
              q: "A queue follows which order?",
              options: ["LIFO", "FIFO (first in, first out)", "Sorted", "Random"],
              answer: 1,
              explain: "Queues are First-In-First-Out — the earliest enqueued item is dequeued first.",
            },
            {
              q: "Which traversal uses a queue?",
              options: ["Depth-first search (DFS)", "Breadth-first search (BFS)", "Binary search", "Quicksort"],
              answer: 1,
              explain: "BFS visits nodes level by level, using a queue to hold the frontier.",
            },
            {
              q: "Why do systems like Kafka put a queue between services?",
              options: ["To sort messages alphabetically", "To decouple producers and consumers so each runs at its own rate", "To encrypt data", "To reduce storage"],
              answer: 1,
              explain: "A buffer absorbs bursts and lets consumers process at their own pace — resilience and back-pressure.",
            },
          ],
        },
      ],
    },

    /* ===================================================================
       PHASE 2 — Hashing, trees & heaps
       =================================================================== */
    {
      id: "ds2",
      title: "Phase 2 — Hashing, Trees & Heaps",
      subtitle: "The workhorses of fast lookup and hierarchy: hash maps, binary trees, BSTs, heaps and tries.",
      icon: "🌳",
      courses: [
        {
          id: "hashtables",
          videoId: "shs0KM3wKv8",
          title: "Hash Tables, Maps & Sets",
          channel: "HackerRank · Gayle Laakmann McDowell",
          duration: "~10 min",
          level: "Intermediate",
          blurb:
            "Hash a key to a bucket and get average O(1) insert, lookup and delete. Hash maps are the most-used non-trivial structure in software — and a set is just a map that stores only keys.",
          complexity: [
            { label: "Search (avg)", value: "O(1)" },
            { label: "Insert / delete (avg)", value: "O(1)" },
            { label: "Worst case", value: "O(n)" },
            { label: "Space", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Python / Java", text: "Python dict and Java HashMap give O(1) average lookup/insert/delete (worst case O(n) under collisions). dict underpins objects, kwargs, and namespaces across the language." },
            { sys: "Redis", text: "Redis is fundamentally a giant hash table; its core dict uses incremental rehashing so resizing never blocks the server." },
            { sys: "Databases", text: "Hash joins and hash aggregation let query engines match millions of rows in roughly linear time instead of nested-loop O(n²)." },
            { sys: "Compilers & caches", text: "Symbol tables, deduplication, and in-memory caches (memcached) all lean on O(1) keyed access." },
          ],
          learn: [
            "Hash functions, buckets, and the load factor",
            "Collision handling: chaining vs. open addressing",
            "Why average is O(1) but worst case is O(n)",
            "Sets as keys-only maps; when hashing beats sorting",
          ],
          resources: [
            { label: "Python TimeComplexity (dict/set)", url: "https://wiki.python.org/moin/TimeComplexity" },
            { label: "VisuAlgo — Hash Table", url: "https://visualgo.net/en/hashtable" },
          ],
          quiz: [
            {
              q: "Average lookup time in a well-sized hash table is…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 0,
              explain: "Hashing maps a key to a bucket directly, giving amortized O(1) average lookups.",
            },
            {
              q: "What causes a hash table's worst case to degrade to O(n)?",
              options: ["Too much memory", "Many keys colliding into the same bucket", "Sorted input", "Using integers as keys"],
              answer: 1,
              explain: "If a poor hash (or adversarial input) piles keys into one bucket, lookups scan a long chain — O(n).",
            },
            {
              q: "A hash SET differs from a hash MAP in that it…",
              options: ["Is always sorted", "Stores only keys (membership), not key→value pairs", "Allows duplicates", "Is slower"],
              answer: 1,
              explain: "A set tracks presence/uniqueness; a map associates each key with a value. Same hashing machinery.",
            },
          ],
        },
        {
          id: "binarytrees",
          videoId: "H5JubkIy_p8",
          title: "Trees & Binary Trees",
          channel: "mycodeschool",
          duration: "~11 min",
          level: "Intermediate",
          blurb:
            "Hierarchy made explicit: a root, children, and recursive subtrees. Binary trees (≤2 children) are the foundation for search trees, heaps, parsers, and the DOM you render every day.",
          complexity: [
            { label: "Traversal", value: "O(n)" },
            { label: "Height (balanced)", value: "O(log n)" },
            { label: "Height (skewed)", value: "O(n)" },
            { label: "Space", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Browsers", text: "The DOM is a tree of nodes; rendering, CSS selectors and React's virtual DOM all walk and diff tree structures." },
            { sys: "Compilers", text: "Source code is parsed into an Abstract Syntax Tree (AST); every compiler, linter, and formatter operates on it." },
            { sys: "File systems & org charts", text: "Directories, XML/JSON documents, and hierarchies are naturally trees — parent/child with recursive traversal." },
          ],
          learn: [
            "Tree vocabulary: root, parent, child, leaf, height, depth",
            "Binary trees and the three DFS traversals (pre/in/post-order)",
            "Level-order (BFS) traversal with a queue",
            "Recursion as the natural way to process trees",
          ],
          resources: [
            { label: "VisuAlgo — Binary Tree", url: "https://visualgo.net/en/bst" },
            { label: "HackerRank — Trees video", url: "https://www.youtube.com/watch?v=oSWTXtMglKE" },
          ],
          quiz: [
            {
              q: "In a binary tree, each node has at most…",
              options: ["1 child", "2 children", "3 children", "Unlimited children"],
              answer: 1,
              explain: "Binary = at most two children (left and right). General trees allow any number.",
            },
            {
              q: "In-order traversal of a binary SEARCH tree yields…",
              options: ["Random order", "Sorted (ascending) order", "Reverse insertion order", "Level order"],
              answer: 1,
              explain: "Left → node → right visits keys in ascending sorted order — a defining BST property.",
            },
            {
              q: "A web page's DOM is best modeled as a…",
              options: ["Hash table", "Tree", "Stack", "Queue"],
              answer: 1,
              explain: "HTML nests elements as parent/child nodes — a tree the browser traverses to render.",
            },
          ],
        },
        {
          id: "bst",
          videoId: "pYT9F8_LFTM",
          title: "Binary Search Trees (BST)",
          channel: "mycodeschool",
          duration: "~7 min",
          level: "Intermediate",
          blurb:
            "A binary tree with order: left < node < right. That invariant gives O(log n) search/insert/delete when balanced — and motivates the self-balancing trees in the next phase.",
          complexity: [
            { label: "Search (balanced)", value: "O(log n)" },
            { label: "Insert / delete (balanced)", value: "O(log n)" },
            { label: "Worst case (skewed)", value: "O(n)" },
            { label: "In-order = sorted", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Ordered maps", text: "C++ std::map/std::set, Java TreeMap/TreeSet are balanced BSTs — used whenever you need keys kept in sorted order with fast range scans." },
            { sys: "Databases", text: "Range queries ('all orders between two dates') rely on ordered tree structures; the on-disk version is the B-tree you'll meet in Phase 3." },
            { sys: "Schedulers", text: "Keeping events/tasks ordered by key (time, priority) for fast 'next' and range lookups is a BST/ordered-map job." },
          ],
          learn: [
            "The BST ordering invariant and why it enables binary search",
            "Insert, search, delete (including the two-children delete case)",
            "Why an unbalanced BST degrades to a linked list — O(n)",
            "Successor/predecessor and range queries",
          ],
          resources: [
            { label: "VisuAlgo — BST / AVL", url: "https://visualgo.net/en/bst" },
            { label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
          ],
          quiz: [
            {
              q: "Binary search (and a balanced BST) requires/maintains data that is…",
              options: ["Sorted / ordered", "Hashed", "Empty", "Stored in a stack"],
              answer: 0,
              explain: "Ordering lets you discard half the remaining keys each step → O(log n).",
            },
            {
              q: "Why can a BST degrade to O(n)?",
              options: ["Too many duplicate values", "If inserts arrive sorted, it becomes a skewed chain (a linked list)", "Hash collisions", "Integer overflow"],
              answer: 1,
              explain: "Sorted inserts make every node a right child — height becomes n. Self-balancing trees fix this.",
            },
            {
              q: "Search in a balanced BST of n keys is…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              answer: 1,
              explain: "Each comparison halves the search space, giving logarithmic depth when balanced.",
            },
          ],
        },
        {
          id: "heaps",
          videoId: "t0Cq6tVNRBA",
          title: "Heaps & Priority Queues",
          channel: "HackerRank · Gayle Laakmann McDowell",
          duration: "~10 min",
          level: "Intermediate",
          blurb:
            "A binary heap is a complete tree kept in an array where the min (or max) is always on top. It gives O(1) peek and O(log n) insert/extract — the engine inside every priority queue.",
          complexity: [
            { label: "Find min / max", value: "O(1)" },
            { label: "Insert", value: "O(log n)" },
            { label: "Extract min / max", value: "O(log n)" },
            { label: "Build heap", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Dijkstra & A*", text: "Shortest-path algorithms repeatedly pull the closest unvisited node — a min-heap priority queue makes that O(log n) instead of O(n)." },
            { sys: "Schedulers & timers", text: "OS task schedulers, event-loop timers (which timer fires next?), and discrete-event simulations are priority queues backed by heaps." },
            { sys: "Top-K / streaming", text: "Keep a size-K heap to track the top-K items in a stream (trending topics, leaderboards) in O(n log K)." },
            { sys: "Median / merging", text: "Two heaps maintain a running median; a heap merges K sorted streams (external merge-sort, log compaction)." },
          ],
          learn: [
            "Min-heap vs. max-heap and the heap-order property",
            "Storing a complete tree in a flat array (parent/child by index)",
            "Sift-up / sift-down; why insert and extract are O(log n)",
            "Heapsort and the top-K streaming pattern",
          ],
          resources: [
            { label: "VisuAlgo — Heap", url: "https://visualgo.net/en/heap" },
            { label: "Binary heap walkthrough (Back To Back SWE)", url: "https://www.youtube.com/watch?v=g9YK6sftDi0" },
          ],
          quiz: [
            {
              q: "Peeking the minimum of a min-heap is…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              answer: 0,
              explain: "The min always sits at the root (index 0) — constant-time to read.",
            },
            {
              q: "Why is a heap ideal for Dijkstra's algorithm?",
              options: ["It sorts all nodes once", "It repeatedly extracts the smallest tentative distance in O(log n)", "It hashes nodes", "It stores edges"],
              answer: 1,
              explain: "Dijkstra needs the closest frontier node each step; a min-heap delivers it in O(log n).",
            },
            {
              q: "A binary heap is usually stored as…",
              options: ["A hash table", "A flat array using index arithmetic for parent/child", "A linked list", "A graph"],
              answer: 1,
              explain: "For node i, children are 2i+1 and 2i+2 — no pointers needed, great cache locality.",
            },
          ],
        },
        {
          id: "tries",
          videoId: "zIjfhVPRZCg",
          title: "Tries (Prefix Trees)",
          channel: "HackerRank · Gayle Laakmann McDowell",
          duration: "~9 min",
          level: "Intermediate",
          blurb:
            "A tree keyed by characters: each path from the root spells a prefix. Lookups cost O(L) in the key length — independent of how many keys are stored — which is why tries power autocomplete and IP routing.",
          complexity: [
            { label: "Insert", value: "O(L)" },
            { label: "Search", value: "O(L)" },
            { label: "Prefix query", value: "O(L)" },
            { label: "Space", value: "O(Σ·N·L) worst" },
          ],
          realWorld: [
            { sys: "Autocomplete & search", text: "Search bars and IDE completion walk a trie to find all keys sharing a typed prefix — Google Suggest, code completion, command palettes." },
            { sys: "Network routing", text: "Routers do longest-prefix-match on IP addresses using radix/Patricia tries (compressed tries) to pick the next hop at line rate." },
            { sys: "Spell-check & T9", text: "Dictionaries, predictive text, and fuzzy matching store words in tries for fast prefix and edit-distance lookups." },
          ],
          learn: [
            "How character-by-character paths encode prefixes",
            "Why lookup is O(key length), not O(number of keys)",
            "Compressed tries / radix trees (Patricia) to cut space",
            "Prefix queries: 'all words starting with…'",
          ],
          resources: [
            { label: "VisuAlgo — strings/trie demos", url: "https://visualgo.net/en/suffixtree" },
            { label: "Trie — overview & uses", url: "https://en.wikipedia.org/wiki/Trie" },
          ],
          quiz: [
            {
              q: "Looking up a word of length L in a trie costs…",
              options: ["O(1)", "O(L), independent of how many words are stored", "O(n) in the number of words", "O(log n)"],
              answer: 1,
              explain: "You follow one edge per character, so cost depends on key length L, not the dictionary size.",
            },
            {
              q: "Which task is a trie especially good at?",
              options: ["Sorting numbers", "Finding all keys that share a prefix (autocomplete)", "Computing averages", "Hashing files"],
              answer: 1,
              explain: "All descendants of the node reached by a prefix share that prefix — perfect for suggestions.",
            },
            {
              q: "Routers use Patricia/radix tries to…",
              options: ["Encrypt packets", "Do longest-prefix matching on IP addresses", "Compress images", "Schedule threads"],
              answer: 1,
              explain: "Compressed tries pick the most specific matching route prefix quickly, at line rate.",
            },
          ],
        },
      ],
    },

    /* ===================================================================
       PHASE 3 — Balanced & self-balancing trees
       =================================================================== */
    {
      id: "ds3",
      title: "Phase 3 — Balanced & Self-Balancing Trees",
      subtitle: "Guaranteeing O(log n): AVL, red-black, B-trees and skip lists — the structures inside databases and kernels.",
      icon: "🎄",
      courses: [
        {
          id: "avl",
          videoId: "jDM6_TnYIqE",
          title: "AVL Trees",
          channel: "Abdul Bari",
          duration: "~17 min",
          level: "Advanced",
          blurb:
            "The first self-balancing BST. By tracking each node's balance factor and rotating when it exceeds ±1, an AVL tree stays strictly height-balanced — guaranteeing O(log n) even against sorted inserts.",
          complexity: [
            { label: "Search", value: "O(log n)" },
            { label: "Insert", value: "O(log n)" },
            { label: "Delete", value: "O(log n)" },
            { label: "Rotations / op", value: "O(1)–O(log n)" },
          ],
          realWorld: [
            { sys: "In-memory ordered indexes", text: "AVL's strict balance gives the fastest lookups among BSTs, favored for read-heavy in-memory indexes and symbol tables where queries dominate updates." },
            { sys: "Foundational concept", text: "Rotations and rebalancing learned here transfer directly to red-black and B-trees — the workhorses inside real databases and kernels." },
          ],
          learn: [
            "The balance factor and the ±1 height invariant",
            "The four rotation cases: LL, RR, LR, RL",
            "Why strict balance gives the best-case lookup height",
            "AVL vs. red-black: stricter balance, more rotations",
          ],
          resources: [
            { label: "VisuAlgo — AVL Tree", url: "https://visualgo.net/en/bst" },
            { label: "AVL tree — overview", url: "https://en.wikipedia.org/wiki/AVL_tree" },
          ],
          quiz: [
            {
              q: "An AVL tree keeps every node's balance factor within…",
              options: ["±1", "±n", "0 only", "±log n"],
              answer: 0,
              explain: "Heights of left and right subtrees differ by at most 1; violations trigger rotations.",
            },
            {
              q: "What does a rotation cost?",
              options: ["O(n)", "O(1) — it just relinks a few pointers", "O(log n) always", "O(n log n)"],
              answer: 1,
              explain: "A single rotation rewires a constant number of pointers; an insert may do O(1) of them up the path.",
            },
            {
              q: "Why use an AVL tree instead of a plain BST?",
              options: ["It uses less memory", "It guarantees O(log n) height even on sorted input", "It allows duplicate keys", "It needs no comparisons"],
              answer: 1,
              explain: "Self-balancing prevents the skewed O(n) worst case a plain BST suffers on ordered inserts.",
            },
          ],
        },
        {
          id: "redblack",
          videoId: "qvZGUFHWChY",
          title: "Red-Black Trees",
          channel: "Michael Sambol",
          duration: "~4 min",
          level: "Advanced",
          blurb:
            "A looser-but-cheaper self-balancing BST: color rules keep the longest path ≤ 2× the shortest, so it rebalances with fewer rotations than AVL. This is the tree actually shipped in language libraries and the Linux kernel.",
          complexity: [
            { label: "Search", value: "O(log n)" },
            { label: "Insert", value: "O(log n)" },
            { label: "Delete", value: "O(log n)" },
            { label: "Rotations / insert", value: "≤ 2 (amortized O(1))" },
          ],
          realWorld: [
            { sys: "Linux kernel", text: "Red-black trees (rbtree) appear throughout the kernel — the Completely Fair Scheduler ordered tasks by runtime in an rbtree, and virtual-memory areas (VMAs) are indexed by one." },
            { sys: "Java & C++", text: "Java TreeMap/TreeSet and the typical C++ std::map/std::set are red-black trees — the default ordered associative containers." },
            { sys: "Fewer rotations", text: "Because writes are cheaper than AVL (≤2 rotations per insert), red-black trees win in update-heavy in-memory workloads." },
          ],
          learn: [
            "The five red-black color invariants and the black-height rule",
            "Why the tree stays within 2× of perfectly balanced",
            "Recoloring vs. rotations on insert/delete",
            "AVL vs. red-black: faster lookups vs. cheaper updates",
          ],
          resources: [
            { label: "Red-black rotations (Michael Sambol)", url: "https://www.youtube.com/watch?v=95s3ndZRGbk" },
            { label: "Red-black tree — overview", url: "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree" },
          ],
          quiz: [
            {
              q: "Compared to an AVL tree, a red-black tree…",
              options: ["Is more strictly balanced", "Allows looser balance but needs fewer rotations on writes", "Cannot self-balance", "Is always faster to search"],
              answer: 1,
              explain: "Red-black trades a bit of lookup speed for cheaper inserts/deletes — ideal for write-heavy use.",
            },
            {
              q: "Which production system famously uses red-black trees?",
              options: ["The Linux kernel (scheduler, VMAs)", "JPEG compression", "TCP handshakes", "DNS root servers"],
              answer: 0,
              explain: "Java TreeMap, C++ std::map, and the Linux kernel's rbtree all use red-black trees.",
            },
            {
              q: "Red-black invariants guarantee the longest root-to-leaf path is at most…",
              options: ["Equal to the shortest", "2× the shortest path", "n× the shortest", "log log n"],
              answer: 1,
              explain: "No red node has a red child and black-heights are equal, bounding the longest path to ≤2× the shortest → O(log n).",
            },
          ],
        },
        {
          id: "btrees",
          videoId: "K1a2Bk8NrYQ",
          title: "B-Trees & B+ Trees",
          channel: "Spanning Tree",
          duration: "~12 min",
          level: "Advanced",
          blurb:
            "The data structure behind modern databases. B-trees are wide, shallow trees where each node holds many keys and matches a disk page — minimizing the slow disk reads that dominate database cost.",
          complexity: [
            { label: "Search", value: "O(log n)" },
            { label: "Insert / delete", value: "O(log n)" },
            { label: "Disk reads", value: "O(log_b n)" },
            { label: "Range scan", value: "O(log n + k)" },
          ],
          realWorld: [
            { sys: "PostgreSQL", text: "The default index is a B-tree: levels are doubly-linked lists of pages with a single metapage; it grows by page splits that cascade upward, and deduplicates repeated keys into posting lists. (PostgreSQL docs)" },
            { sys: "MySQL / InnoDB", text: "InnoDB stores entire tables as B+ trees (the clustered index); leaf nodes are linked for fast ordered range scans." },
            { sys: "File systems", text: "NTFS, HFS+, ext4 (htree directories), and Btrfs use B-trees/B+ trees to index files and metadata on disk." },
          ],
          learn: [
            "Why high branching factor = shallow tree = fewer disk seeks",
            "B-tree vs. B+ tree (keys in leaves, linked leaves for range scans)",
            "Node = disk page; splits and merges to stay balanced",
            "Why databases pick B-trees over binary trees on disk",
          ],
          resources: [
            { label: "PostgreSQL — B-Tree indexes", url: "https://www.postgresql.org/docs/current/btree.html" },
            { label: "B+ trees in databases (Abdul Bari)", url: "https://www.youtube.com/watch?v=aZjYr87r1b8" },
          ],
          quiz: [
            {
              q: "Why do databases use B-trees instead of binary search trees on disk?",
              options: ["They use less code", "Wide nodes (one per disk page) mean a shallow tree and far fewer slow disk reads", "Binary trees can't store integers", "B-trees don't need balancing"],
              answer: 1,
              explain: "Each node holds many keys = high fan-out = low height, so a lookup touches only a handful of disk pages.",
            },
            {
              q: "In a B+ tree, actual records/values live in…",
              options: ["The root", "Internal nodes", "The linked leaf nodes", "A separate hash table"],
              answer: 2,
              explain: "B+ trees keep data in leaves and link them, enabling efficient ordered range scans.",
            },
            {
              q: "PostgreSQL's default index type is a…",
              options: ["Hash table", "B-tree", "Skip list", "Bloom filter"],
              answer: 1,
              explain: "Per PostgreSQL docs, B-tree is the default and most general-purpose index.",
            },
          ],
        },
        {
          id: "skiplist",
          videoId: "46lzF5Fbiwo",
          title: "Skip Lists",
          channel: "Fit Coder",
          duration: "~12 min",
          level: "Advanced",
          blurb:
            "A probabilistic alternative to balanced trees: stacked linked lists with express lanes that let you 'skip' ahead. It delivers O(log n) search/insert/delete on average with far simpler code — and is what Redis uses for sorted sets.",
          complexity: [
            { label: "Search (avg)", value: "O(log n)" },
            { label: "Insert / delete (avg)", value: "O(log n)" },
            { label: "Worst case", value: "O(n)" },
            { label: "Space", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Redis", text: "Redis Sorted Sets (ZSET) are backed by a skip list (plus a hash map), giving O(log n) ranked inserts and fast range-by-score queries — leaderboards, rate limiters, priority indexes." },
            { sys: "LevelDB / databases", text: "LevelDB's in-memory memtable is a skip list, chosen because it's easy to make lock-friendly for concurrent writes." },
            { sys: "Concurrency", text: "Java's ConcurrentSkipListMap provides a thread-safe ordered map without the locking complexity of a balanced tree." },
          ],
          learn: [
            "Express-lane levels and randomized promotion (coin flips)",
            "Why expected height is O(log n)",
            "Search/insert/delete by dropping down levels",
            "Skip list vs. balanced BST: simplicity & concurrency wins",
          ],
          resources: [
            { label: "Skip list — overview", url: "https://en.wikipedia.org/wiki/Skip_list" },
            { label: "Redis — Sorted Sets", url: "https://redis.io/docs/latest/develop/data-types/sorted-sets/" },
          ],
          quiz: [
            {
              q: "A skip list achieves O(log n) search by…",
              options: ["Sorting on every query", "Adding higher 'express' levels that skip over many nodes", "Hashing keys", "Using rotations"],
              answer: 1,
              explain: "Upper levels let you traverse big jumps, dropping down only near the target — like a balanced tree, but randomized.",
            },
            {
              q: "Which Redis feature is built on a skip list?",
              options: ["Strings", "Sorted Sets (ZSET)", "Pub/Sub", "Bitmaps"],
              answer: 1,
              explain: "Sorted Sets use a skip list + hash map for O(log n) ranked inserts and range-by-score queries.",
            },
            {
              q: "Skip lists are often preferred over balanced trees because…",
              options: ["They guarantee O(1) search", "They're simpler to implement and easier to make concurrent", "They use no memory", "They never degrade"],
              answer: 1,
              explain: "No rotations to coordinate makes lock-friendly concurrent versions much easier (e.g. ConcurrentSkipListMap).",
            },
          ],
        },
      ],
    },

    /* ===================================================================
       PHASE 4 — Graphs & range queries
       =================================================================== */
    {
      id: "ds4",
      title: "Phase 4 — Graphs & Range Queries",
      subtitle: "Model relationships (graphs, union-find) and answer interval questions fast (segment & Fenwick trees).",
      icon: "🕸️",
      courses: [
        {
          id: "graphs",
          videoId: "09_LlHjoEiY",
          title: "Graph Theory & Representations",
          channel: "freeCodeCamp · William Fiset",
          duration: "~6.5 hours",
          level: "Advanced",
          blurb:
            "Nodes and edges — the most general structure, modeling anything from friendships to road networks. A Google engineer's full tour: representations, BFS/DFS, shortest paths, MST, topological sort and more.",
          complexity: [
            { label: "BFS / DFS", value: "O(V + E)" },
            { label: "Dijkstra (heap)", value: "O(E log V)" },
            { label: "Adjacency list space", value: "O(V + E)" },
            { label: "Adjacency matrix space", value: "O(V²)" },
          ],
          realWorld: [
            { sys: "Meta / social", text: "The social graph (people = nodes, friendships = edges) powers friend suggestions, feed ranking, and 'people you may know' via graph traversal." },
            { sys: "Google", text: "The web is a graph of pages and links; PageRank ranks it. Google Maps runs shortest-path (Dijkstra/A*) over the road graph." },
            { sys: "Build & package tools", text: "Dependency resolution, build ordering (make, npm, Bazel) and task scheduling use topological sort over a directed acyclic graph." },
            { sys: "Networks & infra", text: "Routing protocols, service meshes, and cloud dependency maps are all graph problems (connectivity, shortest path, cycles)." },
          ],
          learn: [
            "Adjacency list vs. matrix — and the space/time trade-off",
            "BFS and DFS; detecting cycles and connected components",
            "Shortest paths (Dijkstra, Bellman-Ford) and MST (Prim, Kruskal)",
            "Topological sort for dependency ordering on DAGs",
          ],
          resources: [
            { label: "VisuAlgo — Graph traversal", url: "https://visualgo.net/en/dfsbfs" },
            { label: "William Fiset — Algorithms (GitHub)", url: "https://github.com/williamfiset/Algorithms" },
          ],
          quiz: [
            {
              q: "BFS/DFS over a graph with V nodes and E edges runs in…",
              options: ["O(V²)", "O(V + E)", "O(E log V)", "O(1)"],
              answer: 1,
              explain: "Each node and edge is visited a constant number of times → linear in V + E.",
            },
            {
              q: "Ordering build tasks so dependencies come first uses…",
              options: ["Topological sort on a DAG", "Binary search", "Hashing", "A min-heap only"],
              answer: 0,
              explain: "A directed acyclic graph's topological order respects every dependency edge.",
            },
            {
              q: "An adjacency matrix uses how much space for V nodes?",
              options: ["O(V)", "O(V + E)", "O(V²)", "O(log V)"],
              answer: 2,
              explain: "A V×V matrix is O(V²) — wasteful for sparse graphs, where adjacency lists (O(V+E)) win.",
            },
          ],
        },
        {
          id: "unionfind",
          videoId: "ibjEGG7ylHk",
          title: "Union-Find / Disjoint Set",
          channel: "William Fiset",
          duration: "~6 min",
          level: "Advanced",
          blurb:
            "Track a partition of elements into disjoint groups with two near-instant operations: find which group an item is in, and union two groups. With path compression + union by rank, both are effectively O(1).",
          complexity: [
            { label: "Find (amortized)", value: "≈ O(α(n))" },
            { label: "Union (amortized)", value: "≈ O(α(n))" },
            { label: "Effectively", value: "≈ O(1)" },
            { label: "Space", value: "O(n)" },
          ],
          realWorld: [
            { sys: "Kruskal's MST", text: "Building a minimum spanning tree (network/cluster design, image segmentation) uses union-find to detect whether adding an edge would form a cycle." },
            { sys: "Connectivity", text: "Dynamic 'are these two nodes connected?' queries — network connectivity, percolation, and friend-circle/island counting — are union-find's home turf." },
            { sys: "Image processing", text: "Connected-component labeling (grouping touching pixels into objects) is a classic union-find application." },
          ],
          learn: [
            "Disjoint-set forests: representatives and parent pointers",
            "Union by rank/size to keep trees shallow",
            "Path compression to flatten lookup paths",
            "The inverse-Ackermann α(n) — why it's effectively constant",
          ],
          resources: [
            { label: "Union-Find — overview", url: "https://en.wikipedia.org/wiki/Disjoint-set_data_structure" },
            { label: "VisuAlgo — Union-Find (UFDS)", url: "https://visualgo.net/en/ufds" },
          ],
          quiz: [
            {
              q: "Union-Find answers which kind of question fast?",
              options: ["What is the shortest path?", "Are these two elements in the same group / connected?", "What is the median?", "How many bytes are used?"],
              answer: 1,
              explain: "It maintains a partition and answers same-set / connectivity queries in near-constant time.",
            },
            {
              q: "Path compression and union by rank make operations…",
              options: ["O(n)", "O(log n) only", "Amortized near O(1) — α(n)", "O(n²)"],
              answer: 2,
              explain: "Together they bound amortized cost by the inverse-Ackermann α(n), which is ≤4 for any realistic n.",
            },
            {
              q: "Which algorithm relies on union-find?",
              options: ["Kruskal's minimum spanning tree", "Quicksort", "Dijkstra's shortest path", "Binary search"],
              answer: 0,
              explain: "Kruskal's adds edges in weight order, using union-find to skip edges that would create a cycle.",
            },
          ],
        },
        {
          id: "segtree",
          videoId: "ZBHKZF5w4YU",
          title: "Segment Trees",
          channel: "Tushar Roy · Coding Made Simple",
          duration: "~24 min",
          level: "Advanced",
          blurb:
            "A tree over array intervals that answers range queries (sum, min, max) AND point/range updates in O(log n) each. It builds in O(n), has exactly 2n−1 nodes, and decomposes any range into O(log n) segments.",
          complexity: [
            { label: "Build", value: "O(n)" },
            { label: "Range query", value: "O(log n)" },
            { label: "Point / range update", value: "O(log n)" },
            { label: "Space", value: "O(n)  (~4n array)" },
          ],
          realWorld: [
            { sys: "Analytics & dashboards", text: "Range aggregates over mutable data — 'sum of sales between two timestamps' while values keep changing — are exactly what segment trees accelerate." },
            { sys: "Competitive programming", text: "A staple for interval problems: range-min/max/sum with updates, lazy propagation for range updates, and 2-D variants." },
            { sys: "Genomics & geometry", text: "Interval/range queries over large sequences (coverage over genome regions, computational geometry sweeps) use segment-tree variants." },
          ],
          learn: [
            "Recursively splitting an array into interval nodes",
            "Why a range decomposes into O(log n) segments → O(log n) queries",
            "Point updates in O(log n) (one segment per level)",
            "Lazy propagation for efficient range updates",
          ],
          resources: [
            { label: "cp-algorithms — Segment Tree", url: "https://cp-algorithms.com/data_structures/segment_tree.html" },
            { label: "Efficient segment tree tutorial (JAlgs)", url: "https://www.youtube.com/watch?v=Oq2E2yGadnU" },
          ],
          quiz: [
            {
              q: "A segment tree answers a range-sum query in…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              answer: 1,
              explain: "Any range splits into at most O(log n) precomputed segments, so queries are logarithmic.",
            },
            {
              q: "What can a segment tree do that a simple prefix-sum array cannot do efficiently?",
              options: ["Answer range sums", "Handle updates to the underlying values in O(log n)", "Use O(n) space", "Be built in O(n)"],
              answer: 1,
              explain: "Prefix sums are O(1) query but O(n) to update; a segment tree keeps BOTH query and update at O(log n).",
            },
            {
              q: "Building a segment tree over n elements takes…",
              options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
              answer: 1,
              explain: "Each of the 2n−1 nodes is computed once with a constant-time merge → O(n) build.",
            },
          ],
        },
        {
          id: "fenwick",
          videoId: "RgITNht_f4Q",
          title: "Fenwick (Binary Indexed) Trees",
          channel: "William Fiset",
          duration: "~13 min",
          level: "Advanced",
          blurb:
            "A leaner cousin of the segment tree for prefix sums: point update and prefix/range query in O(log n), but in just O(n) space (vs. a segment tree's ~4n) with a tiny, elegant implementation built on bit tricks.",
          complexity: [
            { label: "Point update", value: "O(log n)" },
            { label: "Prefix / range query", value: "O(log n)" },
            { label: "Build", value: "O(n)" },
            { label: "Space", value: "O(n)  (leaner than seg-tree)" },
          ],
          realWorld: [
            { sys: "Cumulative frequency", text: "Running counts and cumulative-frequency tables that change over time (analytics counters, histograms) update and query in O(log n)." },
            { sys: "Order statistics", text: "Counting inversions, rank/select queries, and 'how many values ≤ x so far' in a stream are classic Fenwick uses." },
            { sys: "Memory-tight ranges", text: "When you only need prefix sums and want minimal memory, a Fenwick tree beats a segment tree on space (O(n) vs ~4n)." },
          ],
          learn: [
            "How the lowest set bit (i & -i) defines responsibility ranges",
            "Update and prefix-query loops in O(log n)",
            "Range query = prefix(r) − prefix(l−1)",
            "Fenwick vs. segment tree: less space, less flexible",
          ],
          resources: [
            { label: "cp-algorithms — Fenwick Tree", url: "https://cp-algorithms.com/data_structures/fenwick.html" },
            { label: "Fenwick vs. Segment Tree", url: "https://www.geeksforgeeks.org/dsa/fenwick-tree-vs-segment-tree/" },
          ],
          quiz: [
            {
              q: "A Fenwick tree's main advantage over a segment tree is…",
              options: ["Faster than O(log n) queries", "Lower memory — O(n) vs. a segment tree's ~4n", "It supports more operations", "It needs no array"],
              answer: 1,
              explain: "Fenwick trees use O(N) space versus a segment tree's typical ~4N, with a much smaller implementation.",
            },
            {
              q: "Point update and prefix-sum query in a Fenwick tree are both…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              answer: 1,
              explain: "Both walk O(log n) indices using the lowest-set-bit trick.",
            },
            {
              q: "A range sum [l, r] in a Fenwick tree is computed as…",
              options: ["prefix(r) − prefix(l−1)", "prefix(r) + prefix(l)", "r − l", "A single node read"],
              answer: 0,
              explain: "Fenwick trees give prefix sums; subtract the prefix before l to get the range.",
            },
          ],
        },
      ],
    },

    /* ===================================================================
       PHASE 5 — Data structures at scale (production systems)
       =================================================================== */
    {
      id: "ds5",
      title: "Phase 5 — Data Structures at Scale",
      subtitle: "The probabilistic & disk-oriented structures that make Cassandra, RocksDB, Git and blockchains work.",
      icon: "🏗️",
      courses: [
        {
          id: "bloom",
          videoId: "V3pzxngeLqw",
          title: "Bloom Filters",
          channel: "ByteByteGo",
          duration: "~6 min",
          level: "Advanced",
          blurb:
            "A space-efficient probabilistic set: it answers 'definitely not present' or 'probably present' using just a bit array and a few hash functions. False positives are possible, false negatives never — so it cheaply avoids expensive lookups.",
          complexity: [
            { label: "Insert", value: "O(k) hashes" },
            { label: "Query", value: "O(k) hashes" },
            { label: "Space", value: "sublinear (bits)" },
            { label: "Deletes", value: "not supported*" },
          ],
          realWorld: [
            { sys: "Cassandra", text: "Each SSTable has its own Bloom filter checked on reads: 'definitely not here' lets Cassandra skip a disk lookup entirely, 'probably here' triggers the read. (Apache Cassandra docs)" },
            { sys: "Bigtable / HBase", text: "Like Cassandra, these LSM-based stores use Bloom filters to avoid touching files that can't contain the key — huge read-path savings." },
            { sys: "Chrome & CDNs", text: "Chrome's Safe Browsing once used a Bloom filter to check URLs against the malware list locally; CDNs use them to test 'is this cached?' without hitting origin." },
          ],
          learn: [
            "Bit array + k hash functions; how membership is tested",
            "Why false positives happen but false negatives can't",
            "Tuning size and k to hit a target false-positive rate",
            "Why plain Bloom filters can't delete (→ counting/cuckoo variants)",
          ],
          resources: [
            { label: "Cassandra — Bloom filters", url: "https://cassandra.apache.org/doc/latest/cassandra/managing/operating/bloom_filters.html" },
            { label: "Bloom filter — overview", url: "https://en.wikipedia.org/wiki/Bloom_filter" },
          ],
          quiz: [
            {
              q: "A Bloom filter can produce…",
              options: ["False negatives but never false positives", "False positives but never false negatives", "Neither", "Both equally"],
              answer: 1,
              explain: "'Probably present' may be wrong (false positive), but 'definitely not present' is always correct.",
            },
            {
              q: "How does Cassandra use a Bloom filter on reads?",
              options: ["To sort rows", "To skip SSTables that definitely don't contain the key, avoiding disk I/O", "To compress data", "To encrypt keys"],
              answer: 1,
              explain: "A negative result means the key isn't in that SSTable, so Cassandra skips reading it from disk.",
            },
            {
              q: "Why are standard Bloom filters so space-efficient?",
              options: ["They store full keys", "They store only bits set by hash functions, not the elements themselves", "They compress with gzip", "They use a B-tree"],
              answer: 1,
              explain: "It keeps a bit array, not the items — trading exactness for sublinear space.",
            },
          ],
        },
        {
          id: "lsm",
          videoId: "I6jB0nM9SKU",
          title: "LSM-Trees (Log-Structured Merge Trees)",
          channel: "ByteByteGo",
          duration: "~9 min",
          level: "Advanced",
          blurb:
            "The write-optimized engine behind modern NoSQL. Buffer writes in an in-memory memtable, flush sorted runs (SSTables) to disk, and merge them later via compaction — turning random writes into fast sequential ones.",
          complexity: [
            { label: "Write (amortized)", value: "O(1) to memtable" },
            { label: "Read", value: "O(log n) + bloom checks" },
            { label: "Compaction", value: "background merge" },
            { label: "Optimized for", value: "high write throughput" },
          ],
          realWorld: [
            { sys: "RocksDB", text: "Organizes data into levels L0, L1, L2… where lower levels hold newer data and each level is many times larger; supports Leveled, Universal/Tiered and FIFO compaction trading write vs. space amplification. (RocksDB wiki)" },
            { sys: "Cassandra & ScyllaDB", text: "Writes hit a commit log + memtable, flush to immutable SSTables, and compact in the background — pairing with per-SSTable Bloom filters to keep reads fast." },
            { sys: "LevelDB / HBase", text: "Google's LevelDB and Apache HBase use the same memtable→SSTable→compaction design for write-heavy workloads (time-series, logs, feeds)." },
          ],
          learn: [
            "Memtable → SSTable → compaction write path",
            "Why sequential writes beat in-place random updates",
            "Compaction styles and write/space amplification trade-offs",
            "Why reads need Bloom filters + per-level search",
          ],
          resources: [
            { label: "RocksDB — Compaction (wiki)", url: "https://github.com/facebook/rocksdb/wiki/Compaction" },
            { label: "LSM Trees: Cassandra/RocksDB/HBase", url: "https://www.youtube.com/watch?v=Tk3XPSUXmjw" },
          ],
          quiz: [
            {
              q: "LSM-trees are optimized primarily for…",
              options: ["Read latency above all", "High write throughput (sequential writes)", "Minimal memory", "Graph traversal"],
              answer: 1,
              explain: "Buffering in memory and flushing sorted runs turns random writes into fast sequential ones.",
            },
            {
              q: "What is compaction's job in an LSM-tree?",
              options: ["Encrypt data", "Merge SSTables to reduce overlap and reclaim space", "Build a B-tree index", "Hash the keys"],
              answer: 1,
              explain: "Background compaction merges sorted runs, dropping deleted/overwritten data and bounding read cost.",
            },
            {
              q: "Which system is a flagship LSM-tree implementation?",
              options: ["PostgreSQL", "RocksDB", "SQLite", "Microsoft Excel"],
              answer: 1,
              explain: "RocksDB (and Cassandra, LevelDB, HBase) use the LSM-tree design; PostgreSQL's default is a B-tree.",
            },
          ],
        },
        {
          id: "merkle",
          videoId: "bBC-nXj3Ng4",
          title: "Merkle Trees & Blockchains",
          channel: "3Blue1Brown",
          duration: "~26 min",
          level: "Advanced",
          blurb:
            "A tree of hashes where each parent hashes its children, so one root hash fingerprints an entire dataset. Change any byte and the root changes — enabling tamper-evidence and O(log n) proofs. (Taught via Bitcoin's mechanics.)",
          complexity: [
            { label: "Build", value: "O(n)" },
            { label: "Membership proof", value: "O(log n)" },
            { label: "Verify proof", value: "O(log n)" },
            { label: "Tamper detection", value: "compare root hash" },
          ],
          realWorld: [
            { sys: "Git", text: "Every commit is a hash of its tree, which hashes its blobs — a Merkle DAG. The commit hash uniquely fingerprints the entire repository state, making history tamper-evident." },
            { sys: "Bitcoin / blockchains", text: "Each block's transactions are summarized by a Merkle root; light clients verify a transaction with an O(log n) Merkle proof instead of downloading every transaction." },
            { sys: "Cassandra / DynamoDB", text: "Anti-entropy repair compares Merkle trees of data ranges between replicas to find and fix divergent data while transferring minimal information." },
            { sys: "IPFS & Certificate Transparency", text: "Content-addressed storage and tamper-evident certificate logs use Merkle structures to prove inclusion and integrity." },
          ],
          learn: [
            "Hashing children up to a single root hash",
            "Why one changed byte cascades to a different root",
            "Merkle proofs: verify membership in O(log n)",
            "Content addressing and tamper-evidence in real systems",
          ],
          resources: [
            { label: "Merkle tree — overview", url: "https://en.wikipedia.org/wiki/Merkle_tree" },
            { label: "Git internals — objects (Merkle DAG)", url: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects" },
          ],
          quiz: [
            {
              q: "In a Merkle tree, each parent node stores…",
              options: ["The sum of its children", "A hash of its children's hashes", "A pointer to disk", "The largest child value"],
              answer: 1,
              explain: "Hashes roll up to a single root, so the root fingerprints the whole dataset.",
            },
            {
              q: "Why is a Merkle tree 'tamper-evident'?",
              options: ["It's encrypted", "Changing any leaf changes the root hash", "It can't be edited", "It stores backups"],
              answer: 1,
              explain: "Any modification cascades up and changes the root, instantly revealing tampering.",
            },
            {
              q: "A Bitcoin light client verifies a transaction using…",
              options: ["The full chain", "An O(log n) Merkle proof to the block's Merkle root", "A hash table", "A bloom filter only"],
              answer: 1,
              explain: "A short Merkle path proves inclusion without downloading every transaction in the block.",
            },
          ],
        },
        {
          id: "capstone",
          videoId: "RBSGKlAvoiM",
          title: "Capstone — Data Structures Easy to Advanced (Google Engineer)",
          channel: "freeCodeCamp · William Fiset",
          duration: "~8 hours",
          level: "Advanced",
          blurb:
            "Consolidate everything in one beautifully-animated 8-hour course by a Google engineer. Re-derive each structure with code (arrays, lists, stacks, queues, heaps, trees, hash tables, union-find, Fenwick, suffix arrays, AVL) — the perfect single reference to cement the roadmap.",
          complexity: [
            { label: "Coverage", value: "arrays → AVL" },
            { label: "Format", value: "animations + Java" },
            { label: "Length", value: "~8 hours" },
            { label: "Level", value: "easy → advanced" },
          ],
          realWorld: [
            { sys: "Interview prep", text: "This course maps directly onto the data-structure knowledge tested in coding interviews at top tech companies." },
            { sys: "Reference", text: "Pair it with William Fiset's open-source Algorithms repo to see production-quality implementations of every structure in this roadmap." },
          ],
          learn: [
            "Static & dynamic arrays, singly/doubly linked lists",
            "Stacks, queues, priority queues & binary heaps",
            "Binary trees/BSTs, hash tables, union-find",
            "Fenwick trees, suffix arrays and AVL trees with code",
          ],
          resources: [
            { label: "William Fiset — Algorithms (GitHub)", url: "https://github.com/williamfiset/Algorithms" },
            { label: "freeCodeCamp — course article", url: "https://www.freecodecamp.org/news/learn-data-structures-from-a-google-engineer/" },
          ],
          quiz: [
            {
              q: "Average lookup in a well-sized hash table is…",
              options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
              answer: 0,
              explain: "Hashing gives amortized O(1) average lookups — a recurring theme across this course.",
            },
            {
              q: "Which structure guarantees O(log n) operations by self-balancing?",
              options: ["A plain binary search tree", "An AVL tree", "An array", "A bloom filter"],
              answer: 1,
              explain: "AVL trees rotate to stay height-balanced, unlike a plain BST that can skew to O(n).",
            },
            {
              q: "Choosing the right data structure mostly comes down to…",
              options: ["Personal taste", "Which operations you need fast and their Big-O trade-offs", "The programming language only", "The amount of RAM"],
              answer: 1,
              explain: "Every structure optimizes some operations at others' expense — match it to your access pattern.",
            },
          ],
        },
      ],
    },
  ],
};
