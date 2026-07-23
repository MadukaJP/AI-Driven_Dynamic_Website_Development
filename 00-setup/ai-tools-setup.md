# Setting Up AI Tools for This Course

We'll use AI assistants throughout the course. Here's what to set up now, and the ground rules for using them well.

## Tools

| Tool | Where | Good for |
|---|---|---|
| **Claude** (claude.ai) | Browser, or VS Code extension | Explaining concepts, reviewing code, debugging, writing longer examples |
| **ChatGPT / OpenAI** (chat.openai.com) | Browser | Same as above — good to compare answers between models |
| **GitHub Copilot** | VS Code extension | Inline autocomplete as you type — needs a GitHub account (free tier for students via GitHub Education) |

You don't need all three. Pick one chat-based assistant (Claude or ChatGPT) and, optionally, Copilot for inline suggestions.

## The ground rule for this course

> **AI explains and assists. It doesn't replace you writing and understanding the code.**

Concretely:
- If you ask AI to write something, **read every line it gives you** before using it. If you can't explain what a line does, don't submit it.
- Use AI to explain an error message before searching Stack Overflow — it's often faster and more tailored.
- Use AI to review your own code ("what would you improve here?") after you've written it yourself, not instead of writing it.
- In exercises, you may use AI for hints, but write the solution in your own words/code.

## A few good prompts to start with

```
Explain this error message to me like I'm new to web development:
[paste error]

Review this HTML for accessibility issues:
[paste code]

I don't understand the difference between let, const, and var — explain
with a simple example.
```

## What AI is bad at (worth knowing early)

- It sometimes suggests outdated syntax (e.g., `var`, jQuery) unless you ask for "modern" or "current" approaches — call this out explicitly in your prompts.
- It can be confidently wrong about browser support — always verify with [caniuse.com](https://caniuse.com).
- It can't run your code for you — you still need to test in the actual browser.

Each session's README has a **"Where AI fits in"** section with a topic-specific example of this — pay attention to where AI helps and where it doesn't.
