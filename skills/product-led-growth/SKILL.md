---
name: product-led-growth
description: "When the user wants to design a PLG motion, build viral loops, improve activation metrics, define the 'aha moment', or plan expansion revenue triggers. Also triggered by: product-led growth, PLG, free tier, freemium, activation funnel, viral coefficient, expansion MRR, usage-based pricing. Reads .agents/product-marketing-context.md for product context."
metadata:
  version: 1.0.0
---

# Product-Led Growth

You help teams design and optimize a product-led growth motion — building the product itself into the primary acquisition, activation, and expansion engine.

## Before You Start

Read `.agents/product-marketing-context.md`. PLG only works when the product can demonstrate value quickly without a salesperson. If the product requires deep implementation before value is felt, note this and adjust the approach.

## Core PLG Concepts

**Acquisition**: Users find and try the product without talking to sales.
**Activation**: Users reach the "aha moment" — the point where they experience core value.
**Retention**: Users build habits around the product (daily/weekly engagement).
**Expansion**: Activated users invite others or upgrade to paid.
**Viral loop**: Each new user creates conditions for additional users to join.

## Step-by-Step Process

### 1. Define the Aha Moment

The aha moment is the earliest point at which a user experiences the core value of the product. It must be:
- Specific (observable behavior, not a feeling)
- Early (reachable within first session or first week)
- Correlated with long-term retention

Ask:
- "What does a user DO in the product before they become a long-term customer?"
- "What behavior separates churned users from retained users in Month 1?"
- "If you had to pick one action that defines success, what is it?"

Example aha moments by product type:
- Collaboration tool: Invited a teammate
- Analytics tool: Created first dashboard with live data
- Automation tool: Ran first workflow that saved measurable time
- AI writing tool: Published first piece of content

Document the aha moment as: **"[User] [verb] [object] within [timeframe]"**

### 2. Map the Activation Funnel

Trace the steps between signup and the aha moment:

```
Step 1: Sign up
Step 2: [First action — e.g., create project]
Step 3: [Setup step — e.g., connect data source]
Step 4: [Value action — e.g., generate first report]
Step 5: AHA MOMENT — [specific behavior]
```

For each step, measure:
- % of users who reach this step
- Median time to reach this step
- Top drop-off point and likely reason

Identify the "activation bottleneck" — the step with the highest drop-off rate — and prioritize fixing it.

### 3. Design Viral Loops

A viral loop is a cycle where existing users generate new users as a natural byproduct of using the product. Types:

**Collaborative loops**: Product requires or benefits from teammates (invite to get value)
**Output loops**: Product creates shareable outputs (reports, documents, links) that bring visitors back
**Integration loops**: Product connects to tools others use, creating passive visibility
**Referral loops**: Product rewards users for inviting others

For each potential loop, document:
- Trigger: What causes a user to share or invite?
- Action: What does the new person see or do?
- Conversion: What converts the new person to a user?
- Viral coefficient: Estimated new users per existing user per 30 days

Target a viral coefficient > 0.3 for meaningful compounding growth.

### 4. Structure Free vs. Paid Tiers

Design tiers so that:
- Free tier demonstrates core value without the full product
- Upgrade triggers are natural friction points, not artificial limits
- Paid features unlock collaboration, scale, or advanced capabilities

Common upgrade triggers:
- Seat limit hit (need to add a teammate)
- Usage cap reached (need more API calls, storage, or runs)
- Advanced feature needed (AI, automation, analytics)
- Administrative need (SSO, audit logs, SLA)

Avoid paywalling features that are needed to reach the aha moment.

### 5. Define Expansion Revenue Triggers

Expansion MRR comes from upgrades and seat growth. Map expansion triggers:

| Trigger | Type | Action |
|---------|------|--------|
| Team uses product daily for 2+ weeks | Usage signal | Prompt seat expansion |
| User hits usage limit | Hard cap | Upgrade prompt |
| User invites 3+ teammates on free | Collaboration signal | Offer team plan |
| Admin joins an existing team | Authority signal | Present enterprise pitch |

Build in-product nudges at each trigger point. Track expansion MRR as a separate metric from new MRR.

### 6. PLG Metrics Dashboard

Core metrics to track weekly:

| Metric | Target |
|--------|--------|
| Signup-to-aha rate | > 40% |
| Time to aha moment | < 7 days |
| D7 retention of activated users | > 60% |
| Viral coefficient | > 0.3 |
| Free-to-paid conversion rate | > 5% |
| Expansion MRR as % of total MRR | > 20% |

### 7. PLG Improvement Playbook

When metrics are below target:

- **Low signup-to-aha rate**: Simplify onboarding, reduce steps to first value, add inline guidance
- **Long time to aha**: Add a quick-start template or sample data so users see value before configuring
- **Low viral coefficient**: Add in-product sharing surfaces, make outputs more shareable
- **Low free-to-paid conversion**: Revisit upgrade triggers, add value-based prompts, check that free tier isn't too generous
- **Low expansion MRR**: Add seat-based collaboration features, build team notifications

## Output

Save PLG analysis to `.agents/plg-motion.md` with the aha moment definition, funnel metrics, viral loop design, and tier structure. Share with product and engineering for implementation prioritization.
