# InterviewForge — AI Technical Interview & Code Assessment Simulator ⚡

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-6366f1?style=for-the-badge&logo=vercel)](https://interview-forge.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-Vanilla_JS_•_HTML5_•_CSS3-06b6d4?style=for-the-badge)](https://github.com/abhijaylg09/interview-forge)
[![Architecture](https://img.shields.io/badge/Architecture-Sandboxed_Client_Runner-10b981?style=for-the-badge)](#architecture)

> An interactive, client-side **Technical Interview & Code Assessment Simulator** designed to mimic real-world FAANG engineering assessments. Features an in-browser sandboxed test runner, live Big-O complexity analyzer, AI interviewer dialogue feed, and candidate evaluation scorecard generator.

---

## 🌟 Key Highlights

- **⚡ In-Browser Sandboxed Code Execution Engine:** Evaluates algorithms in real-time across multiple test cases (including hidden corner cases), reporting sub-millisecond execution times and pass/fail states.
- **📊 Real-Time Big-O Complexity Analyzer:** Inspects code syntax patterns for loop nesting, hash operations, sorting, and recursion to calculate asymptotic time ($O(N)$, $O(N \log N)$, $O(N^2)$) and space bounds.
- **🤖 Simulated AI Technical Interviewer:** Real-time conversational dialogue with Principal AI Evaluator Dr. Sarah Lin, providing dynamic hints, follow-up trade-off questions, and communication grading.
- **🏆 FAANG Candidate Scorecard Generator:** Generates a comprehensive performance report evaluating Problem Solving (96%), Big-O Efficiency (92%), and Code Quality (95%), exportable to PDF.
- **🎯 Curated Algorithmic Problem Suite:** Includes classic interview challenges: *Two Sum (Hash Table)*, *Valid Parentheses (Stack)*, *Best Time to Buy & Sell Stock (DP/Sliding Window)*, and *LRU Cache (System Design / DLL + Hash Map)*.
- **🎨 Ultra-Sleek Dark Mode IDE Aesthetic:** JetBrains Mono typography, syntax line numbers, celebration particle confetti, synthesized Web Audio sound FX, and responsive 3-column layout.

---

## 💼 Resume & Interview Talking Points (For CS Recruiters)

When discussing this project during technical interviews:
1. **Sandboxed Code Execution:** *"I built an in-browser code execution sandbox that safely evaluates algorithmic functions, captures runtime exceptions, measures execution duration with high-resolution performance timers (`performance.now()`), and validates deep object equality against automated test cases."*
2. **Static AST & Heuristic Complexity Analysis:** *"I implemented a real-time syntax heuristic analyzer that detects loop nesting depth, sorting operations, and auxiliary collections (Hash Maps, Sets) to provide instant Big-O asymptotic complexity feedback and recommendations."*
3. **Zero-Dependency Resilience:** *"The platform runs 100% client-side with zero external runtime dependencies, utilizing native Web Audio API synthesis for auditory micro-interactions and canvas physics for celebratory feedback."*

---

## 📁 Repository Structure

```
interview-forge/
├── index.html         # Main 3-column workspace interface & semantic markup
├── style.css          # Dark-mode IDE theme, neon tokens, line numbers & modals
├── app.js             # Code runner, test suite, Big-O heuristics, AI chat & scorecard
├── vercel.json        # Zero-config deployment & security header configuration
└── README.md          # Project documentation & engineering resume overview
```

---

## 🚀 Instant Deployment to GitHub & Vercel

### Step 1: Push to GitHub
```bash
cd "C:\Users\abhij\.gemini\antigravity-ide\scratch\interview-forge"
git remote add origin https://github.com/abhijaylg09/interview-forge.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com/) and click **"Add New..."** → **"Project"**.
2. Select `interview-forge` and click **"Import"**.
3. Leave all settings default and click **"Deploy"**.
4. Your simulator is live on a global HTTPS URL in seconds!

---

## 👤 Author
**Abhijay** — [GitHub Profile](https://github.com/abhijaylg09)
