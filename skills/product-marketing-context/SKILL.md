---
name: product-marketing-context
description: "When the user wants to create or update their product marketing context document. Also use when the user says 'set up context,' 'product context,' 'marketing context,' 'describe my product,' 'who is my ICP,' 'ideal customer profile,' 'positioning,' or wants to avoid repeating product information in every marketing task. Run this before any other marketing skill on a new project — it creates .agents/product-marketing-context.md that all other skills load for product, audience, and positioning context."
metadata:
  version: 1.0.0
---

# Product Marketing Context

You help users build and maintain a shared product marketing context document. This document captures the foundational information that every other marketing skill reads first — so the user never has to repeat themselves.

The document lives at `.agents/product-marketing-context.md`.

## Workflow

### Step 1: Check for Existing Context

Start by checking whether `.agents/product-marketing-context.md` already exists. Also check `.claude/product-marketing-context.md` for older project setups — if found there but not in `.agents/`, offer to migrate it.

**If a context file already exists:**
- Read it and summarize the key sections
- Ask which parts the user wants to update or expand
- Only ask for the missing or outdated sections

**If no context file exists, offer two paths:**

1. **Auto-draft from the codebase** (recommended): Scan the repo — README, landing pages, marketing copy, about pages, meta descriptions, package.json — and draft a first version. Then ask the user to review and fill gaps. This is faster than starting from nothing.

2. **Build from scratch conversationally**: Walk through each section one at a time. Don't ask everything at once.

Most users prefer the auto-draft path. After showing the draft, ask: "What needs fixing or filling in?"

### Step 2: Collect Information

**When auto-drafting:**
1. Read the codebase: README, landing pages, pricing pages, about pages, meta tags, existing docs
2. Draft all sections from what you find
3. Present the draft and ask for corrections or missing details
4. Iterate until the user is satisfied

**When building from scratch:**
Work through each section below in order, one at a time. For each section:
1. Briefly explain what you're capturing and why it matters
2. Ask the key questions for that section
3. Confirm what you heard before moving on

Push the user toward customer language — exact words customers use are more valuable than polished internal descriptions.

---

## Sections to Capture

### 1. Product Overview
- One-sentence description
- What it does (2–3 sentences)
- Product category (how customers would search for it)
- Product type (SaaS, marketplace, services, etc.)
- Business model and pricing structure

### 2. Target Audience
- Target company type (industry, size, growth stage)
- Decision-maker roles and departments
- Primary use case (the main problem being solved)
- Jobs to be done (2–3 outcomes customers hire this for)
- Specific scenarios where customers reach for this product

### 3. Personas (B2B)
For each buying stakeholder: User, Champion, Decision Maker, Financial Buyer, Technical Influencer
- What each persona cares most about
- Their main challenge
- The value you're promising them

### 4. Problems & Pain Points
- The core challenge before finding you
- Why existing alternatives fall short
- The cost of the problem (time, money, missed opportunities)
- Emotional weight (frustration, fear, doubt)

### 5. Competitive Landscape
- **Direct competitors**: Same product solving the same problem
- **Secondary competitors**: Different product, same problem
- **Indirect competitors**: Status quo or do-it-yourself approaches
- Where each alternative falls short

### 6. Differentiation
- Key capabilities competitors don't have
- How you solve the problem differently
- Why your approach produces better outcomes
- Why customers choose you over the alternatives

### 7. Objections & Anti-Personas
- Top 3 objections heard in sales or support
- Who is explicitly not a good fit

### 8. Switching Dynamics
- **Push**: Frustrations driving customers away from their current solution
- **Pull**: What attracts them to you
- **Habit**: What keeps them stuck with the old approach
- **Anxiety**: What worries them about switching

### 9. Customer Language
- Exact phrases customers use to describe the problem
- Exact phrases they use when talking about your solution
- Words and phrases to actively use
- Words and phrases to avoid
- Product-specific glossary

### 10. Brand Voice
- Tone (formal, casual, direct, warm, etc.)
- Communication style
- 3–5 personality adjectives

### 11. Proof Points
- Key metrics and results to cite
- Notable customer logos
- Testimonial excerpts
- Core value themes and supporting evidence

### 12. Goals
- Primary business goal right now
- The main conversion action you want visitors to take
- Current baseline metrics (if known)

---

## Step 3: Write the Document

Once you have all the information, create `.agents/product-marketing-context.md` with this structure:

```markdown
# Product Marketing Context

*Last updated: [date]*

## Product Overview
**One-liner:**
**What it does:**
**Product category:**
**Product type:**
**Business model:**

## Target Audience
**Target companies:**
**Decision-makers:**
**Primary use case:**
**Jobs to be done:**
-
**Scenarios:**
-

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| | | | |

## Problems & Pain Points
**Core problem:**
**Why alternatives fall short:**
-
**Cost of the problem:**
**Emotional weight:**

## Competitive Landscape
**Direct:** [Competitor] — falls short because...
**Secondary:** [Approach] — falls short because...
**Indirect:** [Alternative] — falls short because...

## Differentiation
**Key differentiators:**
-
**How we do it differently:**
**Why that's better:**
**Why customers choose us:**

## Objections
| Objection | Response |
|-----------|----------|
| | |

**Anti-persona:**

## Switching Dynamics
**Push:**
**Pull:**
**Habit:**
**Anxiety:**

## Customer Language
**How they describe the problem:**
- "[exact phrase]"
**How they describe us:**
- "[exact phrase]"
**Words to use:**
**Words to avoid:**
**Glossary:**
| Term | Meaning |
|------|---------|
| | |

## Brand Voice
**Tone:**
**Style:**
**Personality:**

## Proof Points
**Metrics:**
**Customers:**
**Testimonials:**
> "[quote]" — [attribution]
**Value themes:**
| Theme | Proof |
|-------|-------|
| | |

## Goals
**Business goal:**
**Conversion action:**
**Current metrics:**
```

---

## Step 4: Confirm and Save

- Show the completed document to the user
- Ask if anything needs adjustment
- Save to `.agents/product-marketing-context.md`
- Tell them: "All other marketing skills will now load this automatically. Run `/product-marketing-context` anytime to update it."

---

## Tips

- **Be specific in your questions**: "What's the #1 frustration that makes someone look for a tool like this?" beats "What problem do you solve?"
- **Capture verbatim language**: Customer words beat polished summaries every time
- **Ask for examples**: "Can you give me a real example?" consistently unlocks better answers
- **Validate as you go**: Summarize each section and confirm accuracy before moving on
- **Skip what doesn't apply**: Not every product needs every section (e.g., Personas for simple B2C products)
