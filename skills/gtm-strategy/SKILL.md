---
name: gtm-strategy
description: "When the user wants to build a go-to-market plan, choose launch channels, tier their ICP, sequence a product launch, or answer 'how should we go to market?'. Also triggered by: GTM plan, channel strategy, launch sequencing, ICP tiers, first 100 customers. Reads .agents/product-marketing-context.md for product and audience context."
metadata:
  version: 1.0.0
---

# Go-to-Market Strategy

You help teams design and execute a go-to-market plan — from ICP definition and channel selection through launch sequencing and post-launch iteration.

## Before You Start

Read `.agents/product-marketing-context.md` for current product context, ICP definition, and positioning. If it doesn't exist, run the `product-marketing-context` skill first.

## What You'll Build

A structured GTM document covering:
- ICP tiers ranked by fit, value, and reachability
- Channel mix with rationale and sequencing
- 30/60/90-day launch roadmap
- Success metrics by phase
- Feedback loops and iteration triggers

## Step-by-Step Process

### 1. Define ICP Tiers

Ask the user to describe their ideal customers. Then organize them into tiers:

```
Tier 1 — Ideal: high willingness to pay, short sales cycle, strong product fit, referral potential
Tier 2 — Good: strong fit but longer cycle or smaller deal size
Tier 3 — Possible: workable fit, use only when Tier 1–2 pipeline is thin
```

For each tier, document:
- Job title / company profile
- Primary pain this product solves
- Where they congregate online
- How they evaluate and buy software
- Estimated deal size and time to close

### 2. Audit Available Channels

For each channel below, rate: Reach (how many Tier 1 ICPs), Speed (time to first result), Cost (budget required), Control (ability to scale or pause):

| Channel | Reach | Speed | Cost | Control | Verdict |
|---------|-------|-------|------|---------|---------|
| Content / SEO | | | | | |
| Cold outbound (email/LinkedIn) | | | | | |
| Product-led (free tier / trial) | | | | | |
| Community (Slack, Reddit, Discord) | | | | | |
| Partnerships / integrations | | | | | |
| Paid search | | | | | |
| Paid social | | | | | |
| Events / webinars | | | | | |
| PR / media | | | | | |
| Referral / word of mouth | | | | | |

Select 2–3 primary channels for launch. Secondary channels can activate in Month 2+.

### 3. Design the Launch Sequence

Structure the timeline into phases:

**Phase 0 — Foundation (2–4 weeks pre-launch)**
- Finalize ICP, messaging, and positioning
- Set up tracking (analytics, CRM, attribution)
- Build or prepare primary channel assets
- Identify 10–20 design partners for early feedback

**Phase 1 — Seed (Launch through Day 30)**
- Activate primary channels with controlled distribution
- Drive sign-ups or pipeline from Tier 1 ICP only
- Daily check on conversion rates and drop-off points
- Collect qualitative feedback from every new user

**Phase 2 — Grow (Day 31–60)**
- Double down on channels that converted in Phase 1
- Activate one secondary channel
- Begin referral or expansion motions if activation is strong
- Update positioning based on early customer language

**Phase 3 — Scale (Day 61–90)**
- Systematize what worked
- Launch remaining secondary channels
- Build playbooks for each channel for the team
- Set OKRs for Q2 based on Phase 1–2 learnings

### 4. Define Success Metrics

For each phase, set specific targets:

```
Phase 1 targets:
- Signups / demos booked: [N]
- Activation rate (users who hit key value moment): [%]
- Week-1 retention: [%]
- Conversion to paid (if applicable): [%]
- Qualitative NPS or CSAT: [score]

Phase 2 targets:
- Pipeline generated: [$]
- CAC by channel: [$]
- Payback period: [months]
```

### 5. Build the GTM Document

Output a GTM plan with these sections:

```markdown
# GTM Plan — [Product Name]

## Overview
[One paragraph: what we're launching, to whom, via which primary channel, goal by Day 90]

## ICP Tiers
[Table with Tier 1/2/3 profiles]

## Channel Strategy
[Primary channels with rationale, secondary channels and activation trigger]

## Launch Timeline
[Phase 0 → 1 → 2 → 3 with dates and owners]

## Success Metrics
[Metrics table by phase]

## Risks & Mitigations
[Top 3 risks and contingency plan]
```

## Iteration Triggers

Recommend re-evaluating the GTM plan if:
- Activation rate < 20% after 200 signups
- No channel shows CAC < 3x LTV estimate
- Fewer than 5 Tier 1 customers convert in first 60 days
- Churn in Month 1 exceeds 15%

## Output

Save the final GTM document to `.agents/gtm-plan.md` so other skills (like `paid-ads`, `cold-email`, and `content-strategy`) can reference the chosen channels and ICP priorities.
