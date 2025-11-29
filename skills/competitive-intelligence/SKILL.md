---
name: competitive-intelligence
description: "When the user wants to analyze competitors, build battlecards, run win/loss analysis, understand competitive positioning, or track how rivals are positioning themselves. Also triggered by: competitive analysis, battlecard, win/loss, competitive landscape, competitor research, positioning gaps. Reads .agents/product-marketing-context.md for current positioning context."
metadata:
  version: 1.0.0
---

# Competitive Intelligence

You help teams research competitors, extract actionable insights, build battlecards, and maintain an up-to-date competitive positioning strategy.

## Before You Start

Read `.agents/product-marketing-context.md` for your current product positioning and ICP. Competitive intelligence is only useful when anchored to your own positioning — understanding where competitors are strong is only valuable if you know where you're different.

## Step-by-Step Process

### 1. Map the Competitive Landscape

Categorize competitors by type:

| Type | Description | Example |
|------|-------------|---------|
| Direct | Same product category, same ICP | Head-to-head alternatives |
| Indirect | Different approach, same problem | Adjacent solutions |
| Status quo | The thing buyers do instead of buying | Spreadsheets, manual processes |
| Future | Emerging players entering the space | Funded startups |

For each competitor, gather:
- Website and product tour
- Pricing page
- G2 / Capterra / Trustpilot reviews
- LinkedIn (team size, growth rate, job postings)
- Recent press and funding news
- Content strategy (blog, YouTube, newsletter)
- Job postings (reveal product roadmap priorities)

### 2. Build the Competitive Matrix

Create a feature comparison matrix across the dimensions that matter most to buyers:

```
| Feature / Capability | Your Product | Competitor A | Competitor B | Competitor C |
|---------------------|-------------|-------------|-------------|-------------|
| [Feature 1]         | ✓           | ✓           | ✗           | ✓           |
| [Feature 2]         | ✓           | ✗           | ✓           | ✗           |
| [Pricing model]     | Usage-based | Per seat    | Flat fee    | Per seat    |
| [Integration X]     | ✓           | ✓           | ✓           | ✗           |
| [Support tier]      | 24/7        | Business hrs| Email only  | 24/7        |
```

Focus on the 10–15 features that appear most in buyer evaluation criteria, not your full feature list.

### 3. Analyze Customer Reviews

Mine competitor reviews on G2, Capterra, and Trustpilot to find:

**Patterns of dissatisfaction** (turn these into your strengths):
- What do reviewers complain about most?
- What causes customers to leave or churn?
- What are the "but..." moments in otherwise positive reviews?

**Patterns of praise** (understand what you must match or exceed):
- What do customers love most about each competitor?
- What features or experiences are mentioned repeatedly?

Create a sentiment summary for each competitor:

```
## [Competitor Name] — Review Summary

**Customers love**: [Top 3 praised aspects]
**Customers hate**: [Top 3 pain points from reviews]
**Why they switch away**: [Recurring churn reasons]
**Reviewers look like**: [Job titles, company sizes that appear most]
```

### 4. Build Battlecards

A battlecard is a one-page reference for sales and marketing to handle a specific competitor in a deal. Format:

```markdown
# Battlecard: [Your Product] vs. [Competitor]

## When You See Them in a Deal
[Context: typical deal stage, buyer type, objections they raise]

## Their Pitch (What They Say)
- [Key claim 1]
- [Key claim 2]
- [Key claim 3]

## Our Counter (What We Say)
- [Reframe claim 1]
- [Reframe claim 2]
- [Our differentiated point they can't match]

## Where We Win
- [Strength 1 with evidence]
- [Strength 2 with customer proof]

## Where They Win
[Be honest — this builds credibility with sales reps]

## Traps to Set
[Questions to ask in discovery that expose competitor weaknesses]

## Traps to Avoid
[Questions the competitor will ask that we don't answer well]

## Customer Quotes
[Real quotes from customers who switched from this competitor]
```

### 5. Conduct Win/Loss Analysis

After each deal close or loss, capture:
- Which competitors were evaluated
- Stated reason for decision
- Unstated signals (deal structure, champion strength, budget)
- What content or demos influenced the decision

Aggregate quarterly. Calculate:
- Win rate vs. each competitor
- Deal size when competitive vs. solo evaluation
- Sales cycle length by competitor involvement

Look for patterns: "We always lose when [Competitor X] is present in enterprises over 500 employees."

### 6. Track Competitor Moves

Set up ongoing monitoring:
- Google Alerts for each competitor name
- G2 reviews sorted by "most recent"
- LinkedIn company page follows
- Job posting trackers (job postings reveal where they're investing)
- Their blog/newsletter (subscribe under a personal email)
- Pricing page monitors (Visualping or similar)

### 7. Competitive Positioning Adjustments

Use competitive intel to sharpen positioning:
- Identify messaging gaps — areas where competitors are weak and you're strong, but you're not talking about them
- Find category frames — reframe how you describe the product to sidestep direct comparison
- Identify "safe harbor" segments — ICP subsets where you win consistently and competitors don't focus

## Output

Save competitor profiles to `.agents/competitive/[competitor-slug].md` and the full battlecard library to `.agents/battlecards/`. Update quarterly. Reference `competitor-alternatives` skill for web-facing competitive pages.
