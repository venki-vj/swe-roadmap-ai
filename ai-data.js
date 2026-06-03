/*
 * SkillForge AI — Build-Your-Own-ChatGPT Roadmap
 * ------------------------------------------------------------
 * 100% FREE, most-loved YouTube videos for learning AI/LLMs,
 * ordered basic -> advanced. Taught by 3Blue1Brown,
 * Andrej Karpathy (OpenAI founding member), and freeCodeCamp.
 * Every videoId is verified. Attached to window.ROADMAP so the
 * shared app.js / styles.css render this page too.
 */
window.ROADMAP = {
  meta: {
    title: "SkillForge AI",
    tagline: "Build your own ChatGPT — the free, progressive AI & LLM roadmap.",
    subtitle:
      "From neural-network intuition to coding a GPT from scratch and shipping real LLM apps. Each course is the most-loved free video on its topic — by 3Blue1Brown, Andrej Karpathy (OpenAI founding member), and freeCodeCamp. Follow the phases in order.",
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
        },
      ],
    },

    {
      id: "ai5",
      title: "Phase 5 — Go Pro: Full Stack & AI Apps",
      subtitle: "The complete training stack (like ChatGPT) and shipping real LLM products.",
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
        },
      ],
    },
  ],
};
