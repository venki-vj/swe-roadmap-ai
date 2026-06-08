/*
 * SkillForge AI — Build-Your-Own-ChatGPT Roadmap
 * ------------------------------------------------------------
 * 100% FREE, most-loved YouTube videos for learning AI/LLMs,
 * ordered basic -> advanced. Taught by 3Blue1Brown,
 * Andrej Karpathy (OpenAI founding member), freeCodeCamp,
 * Computerphile, and AssemblyAI. Every videoId is verified
 * (checked via YouTube's oEmbed endpoint). Attached to
 * window.ROADMAP so the shared app.js / styles.css render this page.
 *
 * Each course may carry a `quiz` array of { q, options[], answer, explain }
 * for the interactive "Check your understanding" section (see engage.js).
 */
window.ROADMAP = {
  meta: {
    title: "SkillForge AI",
    tagline: "Build your own ChatGPT — the free, progressive AI & LLM roadmap.",
    subtitle:
      "From neural-network intuition to coding a GPT from scratch and shipping real LLM apps — prompt engineering, RAG, fine-tuning, and generative media. Each course is the most-loved free video on its topic. Earn XP, keep a streak, and quiz yourself as you go.",
  },

  phases: [
    {
      id: "ai1",
      title: "Phase 1 — AI & ML Foundations",
      subtitle: "Build the intuition: what a neural network is and how machines learn.",
      icon: "🧠",
      courses: [
        {
          id: "nn-intuition",
          videoId: "aircAruvnKk",
          title: "But what is a Neural Network? (Deep Learning Ch.1)",
          channel: "3Blue1Brown",
          duration: "~19 min",
          level: "Beginner",
          blurb:
            "The most beautiful introduction to neural networks ever made. Visual, intuitive, and the perfect first step before any code — understand what a network actually is and how it 'sees'.",
          learn: [
            "What neurons and layers really represent",
            "Weights, biases, and activations",
            "How a network recognizes handwritten digits",
            "The intuition every AI concept builds on",
          ],
          resources: [
            { label: "3Blue1Brown Deep Learning series", url: "https://www.3blue1brown.com/topics/neural-networks" },
            { label: "Continue: Gradient descent (Ch.2)", url: "https://www.youtube.com/watch?v=IHZwWFHWa-w" },
          ],
          quiz: [
            {
              q: "In a neural network, a 'weight' controls…",
              options: ["The screen brightness", "How strongly one neuron's output influences the next", "The file size", "The learning rate only"],
              answer: 1,
              explain: "Weights scale the connections between neurons; training adjusts them to fit the data.",
            },
            {
              q: "What is an 'activation' of a neuron?",
              options: ["Its on/off switch in hardware", "A number representing how 'lit up' it is", "Its memory address", "Its color"],
              answer: 1,
              explain: "An activation is the neuron's output value, often squashed by a function like sigmoid/ReLU.",
            },
            {
              q: "Stacking layers lets a network…",
              options: ["Run slower", "Learn increasingly abstract features", "Avoid using data", "Skip training"],
              answer: 1,
              explain: "Deeper layers compose simple features (edges) into complex ones (shapes, digits).",
            },
          ],
        },
        {
          id: "ml-everybody",
          videoId: "i_LwzRVP7bg",
          title: "Machine Learning for Everybody — Full Course",
          channel: "freeCodeCamp · Kylie Ying",
          duration: "~4 hours",
          level: "Beginner",
          blurb:
            "A hands-on tour of classic ML: classification, regression, and how models train. Gives you the vocabulary and the Python/TensorFlow muscle memory before diving into deep learning.",
          learn: [
            "Supervised learning: classification & regression",
            "KNN, Naive Bayes, logistic regression, SVMs",
            "Training, features, and evaluation",
            "First neural network with TensorFlow",
          ],
          resources: [
            { label: "Google ML Crash Course (free)", url: "https://developers.google.com/machine-learning/crash-course" },
            { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
          ],
          quiz: [
            {
              q: "Classification predicts…",
              options: ["A continuous number", "A discrete category/label", "Only images", "Random noise"],
              answer: 1,
              explain: "Classification outputs categories (spam/not-spam); regression outputs continuous values (price).",
            },
            {
              q: "Why do we split data into train and test sets?",
              options: ["To save disk space", "To measure how the model generalizes to unseen data", "To make training slower", "To encrypt the data"],
              answer: 1,
              explain: "Testing on held-out data estimates real-world performance and detects overfitting.",
            },
            {
              q: "'Supervised' learning means the training data has…",
              options: ["No labels", "Known correct answers (labels)", "Only images", "Been encrypted"],
              answer: 1,
              explain: "Supervised learning trains on input→label pairs; unsupervised has no labels.",
            },
          ],
        },
      ],
    },

    {
      id: "ai2",
      title: "Phase 2 — Deep Learning, Hands-On",
      subtitle: "Code neural nets and backprop yourself, then go pro with PyTorch.",
      icon: "🔥",
      courses: [
        {
          id: "micrograd",
          videoId: "VMj-3S1tku0",
          title: "Neural Networks: Zero to Hero — Building micrograd",
          channel: "Andrej Karpathy",
          duration: "~2.5 hours",
          level: "Intermediate",
          blurb:
            "Karpathy builds a tiny autograd engine and a neural net from scratch in pure Python, spelling out backpropagation step by step. After this, neural networks stop being magic.",
          learn: [
            "Backpropagation, derived by hand and in code",
            "Building an autograd engine from scratch",
            "How gradients train a network",
            "The foundation for everything that follows",
          ],
          resources: [
            { label: "Neural Networks: Zero to Hero (full series)", url: "https://karpathy.ai/zero-to-hero.html" },
            { label: "micrograd on GitHub", url: "https://github.com/karpathy/micrograd" },
          ],
          quiz: [
            {
              q: "Backpropagation computes…",
              options: ["Random weights", "Gradients of the loss with respect to each parameter", "The screen layout", "The dataset size"],
              answer: 1,
              explain: "Backprop applies the chain rule to get each parameter's gradient, telling us how to reduce the loss.",
            },
            {
              q: "Gradient descent updates a weight by moving it…",
              options: ["In the direction of the gradient", "Opposite the gradient (downhill on the loss)", "Randomly", "To zero"],
              answer: 1,
              explain: "We step opposite the gradient to decrease the loss; the step size is the learning rate.",
            },
            {
              q: "An autograd engine's job is to…",
              options: ["Draw graphs", "Automatically track operations and compute gradients", "Download data", "Render video"],
              answer: 1,
              explain: "Autograd records the computation graph and back-propagates gradients automatically.",
            },
          ],
        },
        {
          id: "pytorch",
          videoId: "V_xro1bcAuA",
          title: "PyTorch for Deep Learning & Machine Learning — Full Course",
          channel: "freeCodeCamp · Daniel Bourke",
          duration: "~25 hours",
          level: "Intermediate",
          blurb:
            "The industry-standard deep-learning framework, taught end to end. PyTorch is what researchers and companies (including the GPT/Claude lineage of models) actually build with.",
          learn: [
            "Tensors, autograd, and the training loop",
            "Building, training, and evaluating models",
            "Computer vision and custom datasets",
            "Going from notebook to real models",
          ],
          resources: [
            { label: "learnpytorch.io (free book)", url: "https://www.learnpytorch.io/" },
            { label: "Official PyTorch tutorials", url: "https://pytorch.org/tutorials/" },
          ],
          quiz: [
            {
              q: "The core data structure in PyTorch is the…",
              options: ["DataFrame", "Tensor", "Array list", "Socket"],
              answer: 1,
              explain: "A tensor is an n-dimensional array (with GPU support and autograd) — the building block of PyTorch.",
            },
            {
              q: "What does `loss.backward()` do?",
              options: ["Reverses the dataset", "Computes gradients via backpropagation", "Saves the model", "Prints the loss"],
              answer: 1,
              explain: "backward() populates the .grad of each parameter so the optimizer can update them.",
            },
            {
              q: "Why move tensors/models to the GPU (cuda)?",
              options: ["For prettier output", "Massively parallel math speeds up training", "To save battery", "It's required by Python"],
              answer: 1,
              explain: "GPUs parallelize the matrix math that dominates deep learning, accelerating training dramatically.",
            },
          ],
        },
      ],
    },

    {
      id: "ai3",
      title: "Phase 3 — How ChatGPT & Claude Work",
      subtitle: "Transformers, attention, and the architecture behind every modern LLM.",
      icon: "✨",
      courses: [
        {
          id: "intro-llms",
          videoId: "zjkBMFhNj_g",
          title: "[1hr Talk] Intro to Large Language Models",
          channel: "Andrej Karpathy",
          duration: "~1 hour",
          level: "Intermediate",
          blurb:
            "The clearest big-picture explainer of LLMs that power ChatGPT and Claude — pretraining, fine-tuning, and the 'LLM OS' mental model. Watch this to understand the whole landscape.",
          learn: [
            "What an LLM is and how it's trained",
            "Pretraining vs. fine-tuning vs. RLHF",
            "Tool use, agents, and the 'LLM OS' idea",
            "Where the technology is heading",
          ],
          resources: [
            { label: "Companion: How I Use LLMs", url: "https://www.youtube.com/watch?v=EWvNQjAaOHw" },
            { label: "State of GPT (talk)", url: "https://www.youtube.com/watch?v=bZQun8Y4L2A" },
          ],
          quiz: [
            {
              q: "At its core, an LLM is trained to…",
              options: ["Sort numbers", "Predict the next token given previous tokens", "Render images", "Compress files"],
              answer: 1,
              explain: "LLMs are next-token predictors trained on huge text corpora; everything else emerges from that objective.",
            },
            {
              q: "Pretraining vs fine-tuning: pretraining is…",
              options: ["The small, task-specific stage", "The large, general stage on massive text", "Only for images", "A type of prompt"],
              answer: 1,
              explain: "Pretraining builds broad knowledge on massive data; fine-tuning then specializes/aligns the model.",
            },
            {
              q: "Karpathy's 'LLM OS' analogy frames the model as…",
              options: ["A spreadsheet", "A kernel/CPU orchestrating tools, memory, and I/O", "A web server", "A database index"],
              answer: 1,
              explain: "He likens the LLM to an operating-system kernel coordinating tools, context window (RAM), and peripherals.",
            },
          ],
        },
        {
          id: "what-is-gpt",
          videoId: "wjZofJX0v4M",
          title: "But what is a GPT? Visual Intro to Transformers (Ch.5)",
          channel: "3Blue1Brown",
          duration: "~27 min",
          level: "Intermediate",
          blurb:
            "A stunning visual breakdown of the Transformer — the architecture inside GPT and Claude. See how text becomes tokens, embeddings, and predictions.",
          learn: [
            "Tokens and embeddings",
            "The high-level Transformer data flow",
            "How a GPT predicts the next token",
            "Where 'attention' fits in",
          ],
          resources: [
            { label: "3Blue1Brown — Transformers lesson", url: "https://www.3blue1brown.com/lessons/gpt" },
            { label: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
          ],
          quiz: [
            {
              q: "An 'embedding' is…",
              options: ["A compressed image", "A vector of numbers representing a token's meaning", "A CSS rule", "A type of GPU"],
              answer: 1,
              explain: "Tokens are mapped to high-dimensional vectors (embeddings) so similar meanings sit near each other.",
            },
            {
              q: "What does the 'GPT' in GPT stand for?",
              options: ["General Purpose Tool", "Generative Pre-trained Transformer", "Graph Processing Tensor", "Global Prompt Template"],
              answer: 1,
              explain: "Generative Pre-trained Transformer — generative output, pretrained on text, Transformer architecture.",
            },
            {
              q: "A tokenizer turns text into…",
              options: ["Pixels", "Discrete tokens (sub-word units) the model consumes", "Audio", "SQL rows"],
              answer: 1,
              explain: "Text is split into tokens (often sub-words) that map to embedding vectors.",
            },
          ],
        },
        {
          id: "attention",
          videoId: "eMlx5fFNoYc",
          title: "Attention in Transformers, Step-by-Step (Ch.6)",
          channel: "3Blue1Brown",
          duration: "~26 min",
          level: "Advanced",
          blurb:
            "The single most important mechanism in modern AI — self-attention — explained visually. 'Attention Is All You Need' finally made crystal clear.",
          learn: [
            "Queries, keys, and values",
            "The attention pattern and masking",
            "Multi-head attention",
            "Why attention scaled to today's LLMs",
          ],
          resources: [
            { label: "Paper: Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
            { label: "3Blue1Brown — Attention lesson", url: "https://www.3blue1brown.com/lessons/attention" },
          ],
          quiz: [
            {
              q: "Self-attention lets each token…",
              options: ["Ignore all other tokens", "Look at and weight other tokens for context", "Become an image", "Run on its own GPU"],
              answer: 1,
              explain: "Attention computes how much each token should attend to every other token, mixing context.",
            },
            {
              q: "The three projections at the heart of attention are…",
              options: ["Queries, Keys, Values", "Red, Green, Blue", "Input, Hidden, Output", "Train, Val, Test"],
              answer: 0,
              explain: "Each token produces a Query, Key, and Value; Q·K scores decide how Values are combined.",
            },
            {
              q: "Why use MULTIPLE attention heads?",
              options: ["To slow the model", "To attend to different relationships in parallel", "To save memory", "To avoid training"],
              answer: 1,
              explain: "Different heads learn to focus on different patterns (syntax, references, etc.) simultaneously.",
            },
          ],
        },
      ],
    },

    {
      id: "ai4",
      title: "Phase 4 — Build Your Own GPT From Scratch",
      subtitle: "Write the code: a working GPT, its tokenizer, and an LLM in Python.",
      icon: "🛠️",
      courses: [
        {
          id: "build-gpt",
          videoId: "kCc8FmEb1nY",
          title: "Let's Build GPT: From Scratch, in Code, Spelled Out",
          channel: "Andrej Karpathy",
          duration: "~2 hours",
          level: "Advanced",
          blurb:
            "The legendary lecture. Build and train a Transformer (the core of nanoGPT) line by line, following the 'Attention Is All You Need' paper. This is how you truly learn how ChatGPT works.",
          learn: [
            "Implementing self-attention in code",
            "Building a Transformer block by block",
            "Training a character-level language model",
            "The core of nanoGPT, fully understood",
          ],
          resources: [
            { label: "nanoGPT on GitHub", url: "https://github.com/karpathy/nanoGPT" },
            { label: "Google Colab notebook", url: "https://colab.research.google.com/drive/1JMLa53HDuA-i7ZBmqV7ZnA3c_fvtXnx-?usp=sharing" },
          ],
          quiz: [
            {
              q: "A 'causal' (masked) attention mask ensures a token can only attend to…",
              options: ["Future tokens", "Past and current tokens", "No tokens", "Random tokens"],
              answer: 1,
              explain: "Causal masking blocks attention to future positions so the model truly predicts the next token.",
            },
            {
              q: "Karpathy's nanoGPT in this video trains at the level of…",
              options: ["Whole documents", "Characters", "Images", "Audio frames"],
              answer: 1,
              explain: "The lecture builds a character-level language model on tiny Shakespeare for clarity.",
            },
            {
              q: "A Transformer 'block' typically combines…",
              options: ["Only a database", "Self-attention + a feed-forward network (with residuals/norm)", "Two GPUs", "A tokenizer only"],
              answer: 1,
              explain: "Each block stacks multi-head attention and an MLP, with residual connections and layer norm.",
            },
          ],
        },
        {
          id: "tokenizer",
          videoId: "zduSFxRajkE",
          title: "Let's Build the GPT Tokenizer",
          channel: "Andrej Karpathy",
          duration: "~2 hours",
          level: "Advanced",
          blurb:
            "Tokenization is the quietly critical first stage of every LLM. Build a Byte-Pair-Encoding tokenizer from scratch and understand the quirks behind many LLM behaviors.",
          learn: [
            "Why tokenizers exist and why they matter",
            "Byte Pair Encoding (BPE) from scratch",
            "encode() and decode() between text and tokens",
            "Tokenization gotchas that bite real models",
          ],
          resources: [
            { label: "minbpe on GitHub", url: "https://github.com/karpathy/minbpe" },
            { label: "OpenAI tiktoken", url: "https://github.com/openai/tiktoken" },
          ],
          quiz: [
            {
              q: "Byte Pair Encoding (BPE) builds its vocabulary by…",
              options: ["Picking random words", "Repeatedly merging the most frequent adjacent pairs", "Sorting alphabetically", "Deleting rare letters"],
              answer: 1,
              explain: "BPE iteratively merges the most common symbol pairs into new tokens, balancing vocab size and length.",
            },
            {
              q: "Why can tokenization explain weird LLM behavior (e.g. counting letters)?",
              options: ["Models see tokens, not raw characters", "Tokenizers add bugs", "It encrypts text", "It uses the GPU"],
              answer: 0,
              explain: "Because the model operates on tokens (chunks), character-level tasks can be surprisingly hard.",
            },
            {
              q: "encode() converts…",
              options: ["Tokens → text", "Text → token IDs", "Images → text", "Audio → tokens"],
              answer: 1,
              explain: "encode() maps text to token IDs; decode() maps IDs back to text.",
            },
          ],
        },
        {
          id: "llm-from-scratch",
          videoId: "UU1WVnMk4E8",
          title: "Create a Large Language Model from Scratch with Python",
          channel: "freeCodeCamp · Elliot Arledge",
          duration: "~6 hours",
          level: "Advanced",
          blurb:
            "A full project course: build a complete LLM in Python — data handling, the model, training, and generation — assuming only basic Python. The hands-on capstone of the build path.",
          learn: [
            "Data loading and batching for LLMs",
            "Implementing the model and training loop",
            "Optimization, GPUs, and saving models",
            "Generating text from your own LLM",
          ],
          resources: [
            { label: "Course repo & notes", url: "https://github.com/Infatoshi/fcc-intro-to-llms" },
            { label: "Book: Build a Large Language Model (Raschka)", url: "https://github.com/rasbt/LLMs-from-scratch" },
          ],
          quiz: [
            {
              q: "Why do we train in 'batches' instead of one example at a time?",
              options: ["To use more disk", "For efficient, stable gradient estimates on parallel hardware", "To avoid the GPU", "Batches are required by Python"],
              answer: 1,
              explain: "Batching parallelizes computation and averages gradients, making training faster and more stable.",
            },
            {
              q: "During text generation, the model produces output by…",
              options: ["Sampling one token at a time, feeding it back in", "Outputting the whole document at once", "Reading from a database", "Copying the prompt"],
              answer: 0,
              explain: "Generation is autoregressive: sample a token, append it, repeat.",
            },
            {
              q: "'Temperature' during sampling controls…",
              options: ["GPU heat", "How random vs. deterministic the output is", "Model size", "Training speed"],
              answer: 1,
              explain: "Higher temperature flattens the distribution (more random/creative); lower makes it sharper/safer.",
            },
          ],
        },
      ],
    },

    {
      id: "ai5",
      title: "Phase 5 — Go Pro: The Full Training Stack",
      subtitle: "The complete production pipeline (like ChatGPT) and how to actually use LLMs well.",
      icon: "🚀",
      courses: [
        {
          id: "deep-dive-llms",
          videoId: "7xTGNNLPyMI",
          title: "Deep Dive into LLMs like ChatGPT",
          channel: "Andrej Karpathy",
          duration: "~3.5 hours",
          level: "Advanced",
          blurb:
            "The full training stack of a production LLM: pretraining, supervised fine-tuning, and RLHF — plus hallucinations, tool use, and reasoning. Exactly how ChatGPT and Claude are actually made.",
          learn: [
            "Pretraining → SFT → RLHF pipeline",
            "Why models hallucinate, and mitigations",
            "Tool use, reasoning, and inference",
            "Mental models for modern LLM products",
          ],
          resources: [
            { label: "Companion blog summary", url: "https://karpathy.ai/" },
            { label: "Hugging Face LLM Course", url: "https://huggingface.co/learn/llm-course" },
          ],
          quiz: [
            {
              q: "What does RLHF stand for?",
              options: ["Reinforcement Learning from Human Feedback", "Recursive Linear Hidden Functions", "Rapid Local Hyper-Fitting", "Random Layer Hash Fusion"],
              answer: 0,
              explain: "RLHF aligns the model to human preferences using a reward model trained on human comparisons.",
            },
            {
              q: "In the training pipeline, SFT (supervised fine-tuning) comes…",
              options: ["Before pretraining", "After pretraining, before/around RLHF", "Never", "Only for images"],
              answer: 1,
              explain: "Order: pretraining → supervised fine-tuning (instruction data) → preference optimization / RLHF.",
            },
            {
              q: "A 'hallucination' is when the model…",
              options: ["Crashes", "Produces fluent but false/unsupported content", "Runs out of memory", "Refuses to answer"],
              answer: 1,
              explain: "Hallucinations are confident-sounding but incorrect outputs; grounding (e.g. RAG) helps reduce them.",
            },
          ],
        },
        {
          id: "how-i-use-llms",
          videoId: "EWvNQjAaOHw",
          title: "How I Use LLMs (Practical Guide)",
          channel: "Andrej Karpathy",
          duration: "~2 hours",
          level: "All levels",
          blurb:
            "The practical counterpart: how to actually use ChatGPT/Claude and friends effectively — tools, modes, and workflows. Turns understanding into day-to-day productivity.",
          learn: [
            "Choosing models and modes for a task",
            "Tool use, files, and multimodal inputs",
            "Prompting patterns that work",
            "Real workflows from an AI expert",
          ],
          resources: [
            { label: "OpenAI Prompt Engineering guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
            { label: "Anthropic prompting docs", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          ],
          quiz: [
            {
              q: "The 'context window' of an LLM is…",
              options: ["The app's UI", "How much text it can consider at once", "Its training cost", "The GPU count"],
              answer: 1,
              explain: "The context window is the token budget the model can attend to in a single request.",
            },
            {
              q: "Giving the model tools (web, code, files) is valuable because…",
              options: ["It looks cool", "It grounds answers in fresh/verifiable data and extends capability", "It reduces accuracy", "It's required to boot"],
              answer: 1,
              explain: "Tool use lets the model fetch real data and perform actions, mitigating stale knowledge and hallucination.",
            },
            {
              q: "A good general prompting habit is to…",
              options: ["Be vague", "Give clear context, examples, and the desired format", "Use one word", "Avoid instructions"],
              answer: 1,
              explain: "Specific context, examples (few-shot), and an explicit output format dramatically improve results.",
            },
          ],
        },
        {
          id: "langchain",
          videoId: "lG7Uxts9SXs",
          title: "LangChain for LLM Application Development",
          channel: "freeCodeCamp · Rishab Kumar",
          duration: "~1 hour",
          level: "Intermediate",
          blurb:
            "Ship your own AI app. Connect LLMs to your data and tools with LangChain to build chatbots and RAG systems — the practical layer on top of the models you now understand.",
          learn: [
            "Chains, prompts, and memory",
            "Connecting LLMs to external data (RAG)",
            "Vector stores and embeddings",
            "Building a knowledgeable chatbot",
          ],
          resources: [
            { label: "LangChain docs", url: "https://python.langchain.com/docs/introduction/" },
            { label: "Build with the Claude API", url: "https://docs.anthropic.com/en/home" },
          ],
          quiz: [
            {
              q: "A 'chain' in LangChain is…",
              options: ["A blockchain", "A sequence of steps/calls composed together", "A GPU cluster", "A database table"],
              answer: 1,
              explain: "Chains compose prompts, models, and tools into multi-step pipelines.",
            },
            {
              q: "Why add 'memory' to an LLM app?",
              options: ["To store passwords", "To retain conversation/context across turns", "To speed up the GPU", "To encrypt prompts"],
              answer: 1,
              explain: "Memory carries prior messages/state forward so the assistant stays coherent across a conversation.",
            },
            {
              q: "A vector store is used to…",
              options: ["Compile code", "Store embeddings and retrieve by semantic similarity", "Render UI", "Send email"],
              answer: 1,
              explain: "Vector stores index embeddings so you can fetch the most relevant chunks for RAG.",
            },
          ],
        },
      ],
    },

    {
      id: "ai6",
      title: "Phase 6 — Applied LLM & Generative-AI Engineering",
      subtitle:
        "Ship real AI products: master prompt engineering, the Hugging Face ecosystem, Retrieval-Augmented Generation (RAG), fine-tuning with LoRA, and how generative image models work. This is the in-demand 'LLM engineer' skill set.",
      icon: "🧬",
      courses: [
        {
          id: "prompt-eng",
          videoId: "_ZvnD73m40o",
          title: "Prompt Engineering Tutorial — Master ChatGPT & LLM Responses",
          channel: "freeCodeCamp.org",
          duration: "~40 min",
          level: "Beginner",
          blurb:
            "Prompt engineering is the cheapest, fastest lever on LLM quality — and the first skill of an applied AI engineer. Learn zero/few-shot prompting, role and format control, chain-of-thought, and how to systematically get reliable outputs.",
          learn: [
            "Zero-shot vs few-shot prompting",
            "Roles, context, and output-format control",
            "Chain-of-thought and step-by-step reasoning",
            "Iterating prompts toward reliable results",
          ],
          resources: [
            { label: "OpenAI Prompt Engineering guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
            { label: "Anthropic prompt engineering", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          ],
          quiz: [
            {
              q: "'Few-shot' prompting means…",
              options: ["Giving zero examples", "Including a few worked examples in the prompt", "Using a small model", "Limiting tokens"],
              answer: 1,
              explain: "Few-shot prompts include example input/output pairs so the model infers the pattern.",
            },
            {
              q: "Asking the model to 'think step by step' is an example of…",
              options: ["Quantization", "Chain-of-thought prompting", "Fine-tuning", "Tokenization"],
              answer: 1,
              explain: "Chain-of-thought prompts elicit intermediate reasoning, improving multi-step accuracy.",
            },
            {
              q: "A reliable way to get structured output is to…",
              options: ["Ask vaguely", "Specify the exact format (e.g. JSON schema) and give an example", "Use no instructions", "Increase temperature to max"],
              answer: 1,
              explain: "Explicitly stating the schema/format (and showing an example) makes outputs parseable and consistent.",
            },
          ],
        },
        {
          id: "huggingface",
          videoId: "QEaBAZQCtwE",
          title: "Getting Started with Hugging Face — Transformers, Pipelines & Models",
          channel: "AssemblyAI",
          duration: "~15 min",
          level: "Intermediate",
          blurb:
            "Hugging Face is the 'GitHub of AI' — the hub of open models, datasets, and the Transformers library every practitioner uses. Learn to load a model, run a pipeline, and tokenize in minutes, so you can use thousands of free open-source models.",
          learn: [
            "The Hugging Face Hub: models & datasets",
            "The transformers pipeline() one-liner",
            "Tokenizers and AutoModel/AutoTokenizer",
            "Running open models locally or in Colab",
          ],
          resources: [
            { label: "Hugging Face LLM Course (free)", url: "https://huggingface.co/learn/llm-course" },
            { label: "Transformers docs", url: "https://huggingface.co/docs/transformers/index" },
          ],
          quiz: [
            {
              q: "The Hugging Face `pipeline()` helper lets you…",
              options: ["Train from scratch only", "Run common tasks (sentiment, generation, etc.) in one line", "Build UIs", "Manage Git branches"],
              answer: 1,
              explain: "pipeline('task') loads a sensible default model + tokenizer and runs inference immediately.",
            },
            {
              q: "The Hugging Face Hub mainly hosts…",
              options: ["Only documentation", "Pretrained models, datasets, and demos", "Video games", "Email accounts"],
              answer: 1,
              explain: "The Hub is a repository of shareable models, datasets, and Spaces (demos).",
            },
            {
              q: "AutoTokenizer.from_pretrained(name) gives you…",
              options: ["A random tokenizer", "The exact tokenizer matching that model", "A GPU", "A dataset"],
              answer: 1,
              explain: "Using the model's matching tokenizer is essential — token IDs must align with how the model was trained.",
            },
          ],
        },
        {
          id: "rag",
          videoId: "sVcwVQRHIc8",
          title: "Learn RAG From Scratch — Python AI Tutorial (LangChain Engineer)",
          channel: "freeCodeCamp.org",
          duration: "~2.5 hours",
          level: "Advanced",
          blurb:
            "Retrieval-Augmented Generation is how you make an LLM answer from YOUR documents — the #1 pattern behind real enterprise AI. Built by a LangChain engineer: chunking, embeddings, vector search, and generation, including query translation and routing.",
          learn: [
            "Why RAG beats fine-tuning for fresh/private knowledge",
            "Indexing: chunking, embeddings, vector stores",
            "Retrieval + generation flow end to end",
            "Advanced RAG: query translation, routing, re-ranking",
          ],
          resources: [
            { label: "RAG Fundamentals & Advanced Techniques (freeCodeCamp)", url: "https://www.youtube.com/watch?v=ea2W8IogX80" },
            { label: "LangChain RAG docs", url: "https://python.langchain.com/docs/tutorials/rag/" },
          ],
          quiz: [
            {
              q: "RAG improves answers by…",
              options: ["Retraining the model each query", "Retrieving relevant documents and adding them to the prompt", "Increasing temperature", "Deleting the context window"],
              answer: 1,
              explain: "RAG fetches relevant chunks from a knowledge base and grounds the model's answer in them.",
            },
            {
              q: "Documents are matched to a query in RAG using…",
              options: ["Exact keyword equality only", "Semantic similarity between embeddings", "File timestamps", "Random choice"],
              answer: 1,
              explain: "Both query and chunks are embedded; nearest vectors (cosine similarity) are retrieved.",
            },
            {
              q: "A key advantage of RAG over fine-tuning for company knowledge is…",
              options: ["It needs more GPUs", "You can update the knowledge base without retraining", "It removes the LLM", "It's always cheaper to ignore"],
              answer: 1,
              explain: "RAG keeps knowledge in an external store you can update anytime — no expensive retraining for new facts.",
            },
          ],
        },
        {
          id: "finetune",
          videoId: "CcrC5zSv1iA",
          title: "LLM Fine-Tuning — Supervised FT, RLHF, LoRA & Multimodal",
          channel: "freeCodeCamp.org",
          duration: "~3 hours",
          level: "Advanced",
          blurb:
            "When prompting and RAG aren't enough, you fine-tune. Learn the modern, affordable approach — parameter-efficient fine-tuning (LoRA/QLoRA) — plus supervised fine-tuning and RLHF, so you can specialize open models on your own data without a data-center budget.",
          learn: [
            "Full fine-tuning vs. parameter-efficient (PEFT)",
            "LoRA & QLoRA: adapt models cheaply",
            "Supervised fine-tuning and instruction tuning",
            "When to fine-tune vs. prompt vs. RAG",
          ],
          resources: [
            { label: "Hugging Face PEFT docs", url: "https://huggingface.co/docs/peft/index" },
            { label: "LoRA paper", url: "https://arxiv.org/abs/2106.09685" },
          ],
          quiz: [
            {
              q: "LoRA makes fine-tuning cheaper by…",
              options: ["Training all weights twice", "Training small low-rank adapter matrices, freezing the base model", "Deleting layers", "Using more data"],
              answer: 1,
              explain: "LoRA injects small trainable rank-decomposition matrices and freezes the original weights — far fewer params to train.",
            },
            {
              q: "What does the 'Q' in QLoRA add?",
              options: ["Quantization of the base model (e.g. 4-bit) to save memory", "A quantum computer", "Quality scoring", "Query routing"],
              answer: 0,
              explain: "QLoRA quantizes the frozen base model to 4-bit, letting you fine-tune large models on a single GPU.",
            },
            {
              q: "You should prefer fine-tuning over RAG when you need…",
              options: ["Fresh facts that change daily", "A specific style/skill/format learned into the model", "To avoid any training", "A bigger context window"],
              answer: 1,
              explain: "Fine-tuning teaches behavior/style/format; RAG is better for changing or private factual knowledge.",
            },
          ],
        },
        {
          id: "diffusion",
          videoId: "1CIpzeNxIhU",
          title: "How AI Image Generators Work (Stable Diffusion / DALL·E)",
          channel: "Computerphile",
          duration: "~17 min",
          level: "Intermediate",
          blurb:
            "Beyond text: generative image models power Midjourney, DALL·E, and Stable Diffusion. Dr Mike Pound explains diffusion models intuitively — how random noise is iteratively denoised into an image guided by your text prompt.",
          learn: [
            "The forward (noising) and reverse (denoising) process",
            "How a model learns to remove noise step by step",
            "Text conditioning: guiding generation with a prompt",
            "Why latent diffusion is efficient",
          ],
          resources: [
            { label: "Follow-up: Stable Diffusion in Code (Computerphile)", url: "https://www.youtube.com/watch?v=-lz30by8-sU" },
            { label: "The Illustrated Stable Diffusion", url: "https://jalammar.github.io/illustrated-stable-diffusion/" },
          ],
          quiz: [
            {
              q: "Diffusion models generate an image by…",
              options: ["Drawing shapes by hand", "Starting from noise and iteratively denoising it", "Copying a database image", "Rendering 3D polygons"],
              answer: 1,
              explain: "A diffusion model learns to reverse a noising process, turning random noise into a coherent image.",
            },
            {
              q: "How does the text prompt influence the image?",
              options: ["It doesn't", "It conditions/guides the denoising toward matching content", "It sets the file name", "It picks the resolution only"],
              answer: 1,
              explain: "Text embeddings condition each denoising step so the result matches the prompt.",
            },
            {
              q: "'Latent' diffusion is more efficient because it operates in…",
              options: ["Full pixel space", "A compressed latent space, not raw pixels", "The cloud only", "Audio space"],
              answer: 1,
              explain: "Latent diffusion denoises in a smaller learned latent space, drastically cutting compute vs. full pixels.",
            },
          ],
        },
      ],
    },
  ],
};
