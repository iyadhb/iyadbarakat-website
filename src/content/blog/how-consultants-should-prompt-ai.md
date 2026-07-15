---
title: "How Consultants Should Prompt AI: Use Frameworks, Not One-Liners"
description: "Most consultants get mediocre answers from AI because they brief it in six words, like a search box. The fix isn't a better tool — it's a thinking structure. Here's the shift, a worked before-and-after, and the six frameworks that turn AI into a consulting-grade partner."
publishDate: 2026-07-10
author: "Iyad Barakat"
tags: ["AI for consultants", "prompting", "consulting frameworks", "strategy", "generative AI"]
heroImage: "/assets/blog1-hero.png"
tldr: "Consultants get weak answers from AI for one reason: they type a six-word question and expect a partner-level answer. You would never brief a new analyst that way. The fix is to give the model a thinking structure every time — a role to play, the context it's missing, a precise ask, and a definition of what 'good' looks like. Do that consistently and AI stops behaving like a search box and starts behaving like a sharp associate. This post shows the exact shift, with a before-and-after prompt, and the six frameworks I use to make it repeatable."
draft: false
---

I have watched a lot of very capable people decide that AI is overhyped.

The scene is almost always the same. A smart consultant — someone who can walk into a boardroom and hold their own against a CFO — opens ChatGPT, types a single line, reads the flat little paragraph it hands back, and thinks: *is that it?* Then they close the tab and go back to doing the work by hand.

They are half right. The output really is flat. But the tool is not the problem. The brief is.

## You would never brief an analyst in six words

Here is a prompt I see constantly: *"Give me a market entry strategy for Southeast Asia."*

That is not a brief. It is a wish.

Think about what you would actually do if a new analyst joined your team on Monday and you needed that same piece of work. You wouldn't lean over their desk and say eight words. You would tell them who the client is, what's really driving the question, what the leadership team is afraid of, which markets are in scope, what a good answer looks like, and how long they have. You would give them *structure* — because you know the quality of the output is capped by the quality of the brief.

AI is no different. It is, in effect, the most widely-read junior associate you will ever manage: fast, tireless, astonishingly well-informed, and completely dependent on you to tell it what job it's doing. Give it six words and it will give you the six-word version of an answer — the safe, generic, Wikipedia-flavoured middle of the road. That's not the model failing. That's the model doing exactly what you asked.

The consultants who get remarkable work out of AI are not using a secret model or a magic phrase. They are simply briefing it like professionals.

## The same request, briefed properly

Let me show you the difference on a real problem. Say you're advising a large retailer that's losing customers, and the board wants options.

**The one-liner most people type:**

> Give me three strategies for a retailer that's losing customers.

You'll get three tidy, forgettable bullets. Improve the loyalty programme. Invest in e-commerce. Enhance the in-store experience. All true. All useless. Nothing you couldn't have written yourself in the lift on the way up.

**Now the same request, briefed the way you'd brief a person:**

> **Role:** You are a senior partner with 20 years of experience in retail transformations.
> **Context:** Our client is a $5B traditional retailer facing a 20% annual decline in store traffic, with activist investors pushing hard for change.
> **Ask:** Develop three genuinely distinct strategic options for the next 18 months that balance growth investment against margin protection.
> **Style:** Board-ready. Focus on financial returns, name the key assumptions behind each option, and flag implementation complexity.

Same model. Same thirty seconds of typing. Completely different animal on the other side.

Now you get three *philosophically* different paths — not three flavours of the same idea — each with an investment profile, the assumptions it's betting on, and where it could fall apart. You get something you can actually pressure-test and take into a room. The work still needs your judgement. But you've started from the 30-yard line instead of your own end zone.

The magic isn't in the words "senior partner." It's in the fact that you gave the model a **role** to reason from, the **context** it was missing, a **precise ask**, and a clear picture of what **good** looks like. Strip those four things out and you're back to the search box.

<figure>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="640" viewBox="0 0 1200 640" role="img" aria-label="The same request briefed two ways — a one-liner prompt versus a structured RCAS brief">
    <rect width="1200" height="640" fill="#FAF9F6"/>
    <text x="600" y="58" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="700" fill="#1F3A5F">The same request, briefed two ways</text>
    <rect x="60" y="110" width="150" height="34" rx="17" fill="#E4E1D8"/>
    <text x="135" y="132" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="1.5" fill="#5B6B7C">ONE-LINER</text>
    <rect x="60" y="162" width="500" height="110" rx="8" fill="#FFFFFF" stroke="#E4E1D8" stroke-width="1.5"/>
    <text x="86" y="205" font-family="Inter, Arial, sans-serif" font-size="19" fill="#22303F">Give me three strategies for a</text>
    <text x="86" y="235" font-family="Inter, Arial, sans-serif" font-size="19" fill="#22303F">retailer that's losing customers.</text>
    <line x1="310" y1="284" x2="310" y2="316" stroke="#9AA6B2" stroke-width="2"/>
    <path d="M303 310 L310 320 L317 310 Z" fill="#9AA6B2"/>
    <rect x="60" y="330" width="500" height="86" rx="8" fill="#F0EDE4" stroke="#E4E1D8" stroke-width="1.5"/>
    <text x="86" y="366" font-family="Inter, Arial, sans-serif" font-size="17" fill="#5B6B7C">Generic bullets — nothing you</text>
    <text x="86" y="392" font-family="Inter, Arial, sans-serif" font-size="17" fill="#5B6B7C">couldn't write in the lift.</text>
    <rect x="640" y="110" width="190" height="34" rx="17" fill="#B8860B"/>
    <text x="735" y="132" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="1.5" fill="#FFFFFF">THE RCAS BRIEF</text>
    <rect x="640" y="162" width="500" height="292" rx="8" fill="#FFFFFF" stroke="#D4A017" stroke-width="2"/>
    <circle cx="675" cy="205" r="17" fill="#1F3A5F"/><text x="675" y="211" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#D4A017">R</text>
    <text x="708" y="200" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#1F3A5F">Role</text>
    <text x="708" y="222" font-family="Inter, Arial, sans-serif" font-size="15" fill="#5B6B7C">Senior partner, 20 yrs in retail transformation</text>
    <circle cx="675" cy="275" r="17" fill="#1F3A5F"/><text x="675" y="281" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#D4A017">C</text>
    <text x="708" y="270" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#1F3A5F">Context</text>
    <text x="708" y="292" font-family="Inter, Arial, sans-serif" font-size="15" fill="#5B6B7C">$5B retailer, traffic down 20%, activists circling</text>
    <circle cx="675" cy="345" r="17" fill="#1F3A5F"/><text x="675" y="351" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#D4A017">A</text>
    <text x="708" y="340" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#1F3A5F">Ask</text>
    <text x="708" y="362" font-family="Inter, Arial, sans-serif" font-size="15" fill="#5B6B7C">Three distinct 18-month options: growth vs margin</text>
    <circle cx="675" cy="415" r="17" fill="#1F3A5F"/><text x="675" y="421" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#D4A017">S</text>
    <text x="708" y="410" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#1F3A5F">Style</text>
    <text x="708" y="432" font-family="Inter, Arial, sans-serif" font-size="15" fill="#5B6B7C">Board-ready; name assumptions; flag complexity</text>
    <line x1="890" y1="466" x2="890" y2="498" stroke="#B8860B" stroke-width="2"/>
    <path d="M883 492 L890 502 L897 492 Z" fill="#B8860B"/>
    <rect x="640" y="512" width="500" height="86" rx="8" fill="#1F3A5F"/>
    <text x="890" y="562" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600" fill="#FFFFFF">Three defensible, <tspan fill="#D4A017">board-ready</tspan> options.</text>
  </svg>
  <figcaption>The RCAS brief — Role, Context, Ask, Style — turns a one-line wish into three defensible, board-ready options.</figcaption>
</figure>

## Why structure changes the answer

There's a mechanical reason this works, and it's worth understanding rather than taking on faith.

A language model doesn't have a fixed "consulting mode" it switches into. On every prompt, it's inferring — from your words — what kind of response is expected. A vague question sits in a vast neighbourhood of possible answers, so it gives you the statistical centre of that neighbourhood: the blandest, most defensible thing. When you specify a role, a context, and a standard, you collapse that space dramatically. You're telling it *which* neighbourhood to stand in. "Board-ready, returns-focused, name your assumptions" is a world away from open silence.

There's a second effect, and this one is about you, not the model. Writing a proper brief forces you to say the quiet part out loud — the context you were carrying in your head and never handed over. Half the time, the act of briefing the AI properly sharpens your *own* thinking about the problem. That alone is worth the thirty seconds.

## Make it repeatable: the six frameworks

Here's the trap. Once people see the before-and-after, they agree the structured prompt is better — and then they never do it, because reconstructing that structure from scratch every time is a hassle. Under deadline, at 11pm, staring at a blank deck, nobody wants to think about prompt architecture.

So don't. Turn the structure into a habit you can reach for without thinking. That's all a framework is: a repeatable shape for a recurring kind of task, so you never start from a blank prompt again.

The one in the example above is what I call **RCAS** — Role, Context, Ask, Style — and it's my workhorse for anything that has to leave the building and land in front of a client. But different jobs need different shapes. Over years of doing this work, I ended up with six:

- **GOAL** — the daily driver for fast, structured thinking under time pressure.
- **RCAS** — for client-ready deliverables that demand rigour and nuance.
- **RISE** — for genuine strategy work, when you need to explore real options rather than the obvious one.
- **CRISP-C** — for communication: the board narrative, the difficult message, the slide that has to persuade.
- **CAPE** — for research and analysis, so investigation stays focused instead of sprawling.
- **IDEA** — for innovation, when you're trying to break out of best-practice and into next-practice.

You don't need to memorise them today. The point is simply this: the difference between a consultant who finds AI useful and one who finds it transformational is not talent, and it's not access to a better model. It's whether they prompt with structure or without it.

## Where to start tomorrow

You don't need a course or a subscription to change this. You need one small habit.

Before you type your next real prompt, spend fifteen seconds answering three questions: *Who do I want the AI to be? What does it not yet know that I do? What does a good answer actually look like?* Put those three things in front of your request. That's 80% of the gain, available immediately.

Then, when you want the full system — all six frameworks laid out, with the exact templates — I've made them free. You can [get the six frameworks here](/frameworks/). And the hundred ready-to-run prompts built on them, each with its framework, template and adaptation notes, come with the book as the companion [Prompt Vault](/vault/) for readers.

The consultants who win the next few years won't be the ones who resisted AI, and they won't be the ones who used it lazily as a faster search engine. They'll be the ones who learned to brief it like the sharp, fast, slightly over-eager associate it is — and gave it the structure to do genuinely good work.

Start with the brief. Everything else follows.
