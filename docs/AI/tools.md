---
sidebar_position: 1
---
# AI Tools & Infrastructure

## ⚡ 1. Overview

AI development can be done **online (cloud-based)** or **offline (local inference)**.
Below are the best tools, models, and methods categorized by how you want to work — **with or without a powerful GPU**.

---

## ☁️ 2. Online AI Tools

### 🚀 General & Cloud Platforms

| Tool                    | Purpose                                | Notes                                                     |
| ----------------------- | -------------------------------------- | --------------------------------------------------------- |
| **Google Colab**        | Run Jupyter notebooks online           | Great for users without GPUs; free tier may have timeouts |
| **n8n**                 | No-code workflow automation            | Like Zapier but open-source; can integrate AI nodes       |
| **Hugging Face Spaces** | Host, test, and share ML models        | Community-driven; easy web UI                             |
| **TensorFlow Hub**      | Pre-trained model library              | Great for deploying ready AI models                       |
| **Gemini 2.5 Flash**    | Fast Google research & analysis        | Optimized for search + summarization                      |
| **ChatGPT (GPT-4/4o)**  | Text generation, reasoning, creativity | Best for general writing, code, and logic                 |
| **Claude (Anthropic)**  | Code, documentation, long context      | Known for code understanding and safety                   |
| **GLM 4.5**             | Reasoning & logic-heavy tasks          | Performs strong in multilingual and math reasoning        |
| **DeepSeek R1**         | Reasoning + code generation            | Efficient with logic and Python-heavy workloads           |
| **Qwen (Alibaba)**      | Coding and multi-language support      | Highly efficient at local fine-tuning                     |

---

## 💻 3. Offline LLMs (Run Locally)

Offline models are ideal when you want full control, privacy, or can’t depend on internet.
They use **quantized weights** (compressed versions of large models) to fit on CPUs and small GPUs.

---

### 🧩 Method 1 — **Ollama**

**Ollama** makes it simple to run models locally.

* **Website:** [https://ollama.ai](https://ollama.ai)
* **Command Example:**

  ```bash
  ollama run llama3
  ```
* ⚙️ *RAM usage:* depends on model size — e.g., **3B models need ~6–8GB RAM** during load/inference.
* 🧠 Ollama automatically downloads & manages model binaries.

---

### 🧠 Method 2 — **LM Studio**

A friendly desktop GUI for running open-source LLMs locally.

* **Website:** [https://lmstudio.ai](https://lmstudio.ai)
* Supports **chat + API server mode**
* Auto-downloads models in `.gguf` format
* Great for beginners who prefer GUI

---

### ⚙️ Method 3 — **llama.cpp**

A **C++ inference engine** optimized for CPU and edge devices.

#### Installation:

```bash
# 1. Clone llama.cpp
git clone https://github.com/ggerganov/llama.cpp.git
cd llama.cpp

# 2. Build llama-server
make server

# 3. Run model
./build/bin/llama-server -m models/Llama-3.2-3B-Instruct-Q4_K_M.gguf
```

#### ⚡ Notes:

* Very lightweight — runs well even on CPUs.
* *Q4_K_M quantization* uses ~4 bits per parameter → lower memory cost.
* Example small model:

  * [Index 1.9B Chat GGUF](https://huggingface.co/IndexTeam/Index-1.9B-Chat-GGUF)
  * [Llama 3.2 3B Instruct GGUF](https://huggingface.co/lmstudio-community/Llama-3.2-3B-Instruct-GGUF)

---

### 🧮 About Quantization

> Quantization reduces the model’s precision (e.g., from 16-bit to 4-bit) to save space — like running **GTA 5 in “low graphics mode”** to fit weaker hardware.
> You lose a bit of accuracy, but gain massive speed and memory efficiency.

---

### 📦 About `.GGUF` Models

`.gguf` is an optimized binary format for quantized LLMs — used by Ollama, LM Studio, and llama.cpp.
It allows models to be portable, fast to load, and run directly on CPU without GPU.

---

## 🧠 4. Understanding “Inference”

**Inference** is the process of generating output (text, image, etc.) from a trained model.

* **Token** = smallest text unit (word fragment).
* **Token/sec** = how fast model outputs words.

  * Example: 10 tokens/sec feels instant.
  * Raspberry Pi 5 might do 1–2 tokens/sec.
  * A Jetson Orin Nano can push 15–20 tokens/sec (good local speed).
* **Latency** = time before the first token appears.

---

## ⚙️ 5. Hardware Guide

| Device                             | Type             | Notes                                                 |
| ---------------------------------- | ---------------- | ----------------------------------------------------- |
| **Laptop GPU 3050 / 4050 (4–8GB)** | Consumer-grade   | Ideal for most small LLM or Stable Diffusion work     |
| **Raspberry Pi 5**                 | Edge device      | Can run small quantized models (slow but possible)    |
| **Jetson Orin Nano**               | Compact AI board | Great performance per watt; ideal for robotics + LLMs |
| **CPU-Only Systems**               | (via llama.cpp)  | Work fine for small quantized models                  |

💡 *CPU inference is slower but cheaper; GPU inference is faster but power-hungry.*

---

## 🧑‍💻 6. Developer Tools & IDEs

| Category                  | Tools                                         | Notes                                     |
| ------------------------- | --------------------------------------------- | ----------------------------------------- |
| **Code Assistants**       | Cursor, Windsurf, Replit Ghostwriter, Copilot | Smart coding, debugging, AI completions   |
| **Wireframing & Diagram** | Eraser.io, Mermaid, presentation.ai           | Visual design + UML-style documentation   |
| **Image & Video AI**      | Midjourney, Runway ML, Sora ,veo3             | Text-to-image/video creativity tools      |
| **Simulation / Robotics** | Isaac Sim                                     | NVIDIA robotics simulation for AI control |

---