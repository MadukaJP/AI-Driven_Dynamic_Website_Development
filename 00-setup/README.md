# Session 0: Setup

Before we write a line of HTML, we set up the tools you'll use for the entire course. Do this once, carefully, and everything after this is smooth.

## What you'll install

| Tool | Why |
|---|---|
| [VS Code](https://code.visualstudio.com/) | The code editor we'll use all course |
| [Git](https://git-scm.com/) | Version control — tracks every change you make |
| [GitHub account](https://github.com/) | Where your repo lives online |
| [Node.js (LTS)](https://nodejs.org/) | Needed later for local dev servers and tooling |
| A modern browser (Chrome/Edge/Firefox) | For running and inspecting your pages |

## 1. Install VS Code

Download and install from the link above. Then install these extensions (Extensions panel, `Ctrl+Shift+X` / `Cmd+Shift+X`):

- **Live Server** — reload your page automatically as you save
- **Prettier** — auto-formats your code consistently
- **GitLens** — see git history inline

## 2. Install Git and connect to GitHub

```bash
# Check it's installed
git --version

# Set your identity — used in every commit you make
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Create a free account at [github.com](https://github.com) if you don't have one.

## 3. Create your course repo

Create a **new, empty** repository on GitHub called `building-modern-websites` (or clone this one if it was handed to you as a starter). Then on your machine:

```bash
git clone https://github.com/MadukaJP/AI-Driven_Dynamic_Website_Development.git
cd AI-Driven_Dynamic_Website_Development
```

This is the repo you'll work in for the rest of the course. Every session folder gets added, committed, and pushed as you complete it.

## 4. Your daily git workflow

You'll repeat this pattern after every session, every practical, every exercise:

```bash
git status                       # see what changed
git add .                        # stage your changes
git commit -m "Session 03: text formatting practical"
git push
```

**Commit message convention for this course:** `Session NN: short description of what you did`. This gives you a clean, readable history by the end — and it's genuinely how professional teams work.

> **Try it yourself:** Make a tiny change to this README (add your name under a "Student" heading), then commit and push it. That's your first commit of the course.

## 5. Set up AI coding assistance

See [`ai-tools-setup.md`](./ai-tools-setup.md) for getting Claude, ChatGPT, or GitHub Copilot ready. We'll use these throughout — not to skip learning, but the way working developers actually use them: to explain errors, suggest approaches, and speed up boilerplate once you understand the fundamentals.

## Checklist before Session 1

- [ ] VS Code installed with Live Server extension
- [ ] Git installed and configured with your name/email
- [ ] GitHub account created
- [ ] Repo cloned locally
- [ ] First commit pushed
- [ ] An AI assistant (Claude / ChatGPT / Copilot) available in your browser or editor
