---
name: demand-generation
description: "When the user wants to build a full-funnel demand generation program, generate pipeline, attribute revenue to marketing channels, plan content + paid + events strategy, or improve MQL-to-SQL conversion. Also triggered by: demand gen, pipeline generation, MQL, SQL, pipeline attribution, full-funnel marketing, lead generation, inbound strategy. Reads .agents/product-marketing-context.md for ICP and positioning context."
metadata:
  version: 1.0.0
---

# Demand Generation

You help marketing teams design and execute full-funnel demand generation programs — connecting content, paid, and event strategies to measurable pipeline outcomes.

## Before You Start

Read `.agents/product-marketing-context.md`. Demand generation requires a clear ICP and defined value proposition. Without it, you'll generate volume but not quality pipeline.

## Demand Gen vs. Lead Gen

| Lead Generation | Demand Generation |
|-----------------|-------------------|
| Capture contact info | Create market awareness + desire |
| Volume-focused | Quality-focused |
| Gated content → form fills | Ungated content → intent-based outreach |
| Measured by MQL volume | Measured by pipeline and revenue |
| Often misaligns sales and marketing | Requires tight sales alignment |

Modern demand gen moves away from gating content and toward building brand in-market, then capturing intent when it surfaces.

## Step-by-Step Process

### 1. Define the Demand Funnel

Map the buyer journey to marketing activities:

```
AWARENESS
Problem-aware content, thought leadership, social, SEO
↓
CONSIDERATION  
Comparison content, demos, webinars, case studies
↓
DECISION
Free trials, ROI calculators, proof-of-concept support
↓
EXPANSION
Customer content, usage nudges, upsell campaigns
```

For each stage, define:
- What content or experience moves a buyer to the next stage?
- What signal tells us they've moved? (Page views, demo request, trial start)
- Who owns this stage — marketing or sales?

### 2. Build the ICP-Aligned Content Engine

Demand gen content should match the problem your ICP is actively searching for. Organize content by:

**Problem-aware content (top of funnel)**:
- Educational blog posts on the problem your product solves
- Thought leadership that helps buyers understand the space
- Original research (benchmark reports, surveys)
- Comparison guides (helps rank for "best [category]" searches)

**Solution-aware content (middle of funnel)**:
- Product demos and walkthroughs
- Integration guides and how-to content
- Case studies from similar companies
- Webinars on workflows your product enables

**Decision content (bottom of funnel)**:
- ROI calculators and value frameworks
- Competitor comparisons ("us vs. them" pages)
- Proof stories from similar customers
- Security and compliance documentation (for enterprise)

Aim for a content mix of roughly 60% top-of-funnel, 30% middle, 10% bottom.

### 3. Design the Paid Demand Gen Strategy

Paid channels amplify organic demand gen. Structure by goal:

**Paid search (Google/Bing)**:
- Target high-intent keywords: "[product category] software", "best [category] tool"
- Bid on competitor brand names (carefully — can be expensive)
- Use RLSA (remarketing lists for search ads) to bid higher for known website visitors

**Paid social (LinkedIn, Meta)**:
- LinkedIn: target by job title, company size, industry — best for B2B lead capture
- Meta: use lookalike audiences based on customer list — broader reach, lower CPL
- Use content amplification (boost high-performing organic posts) before running direct response ads

**Retargeting**:
- Target website visitors who viewed pricing, demo, or case study pages
- Use different creative for different stages: awareness visitors see thought leadership; pricing page visitors see testimonials

**Budget allocation starting point**:
- 40% search (captures existing demand)
- 35% social (creates new demand)
- 25% retargeting (closes latent demand)

### 4. Events and Webinars

Events generate pipeline at a higher average deal size than most digital channels.

**Webinar calendar**:
- 1–2 webinars per month; alternate product demos with educational content
- Partner webinars with ecosystem tools (shared audiences, shared costs)
- Record and repurpose as gated content (then ungate after 30 days)

**Conference strategy**:
- Sponsor 2–3 industry events per year where Tier 1 ICP gathers
- Speaking slots outperform booth presence for brand and pipeline
- Follow up within 48 hours; attendance-based outreach has 3–5x normal reply rates

### 5. Lead Scoring and Routing

Not all leads are equal. Build a scoring model:

**Demographic score** (fit):
- Job title matches ICP: +15
- Company size in range: +10
- Industry matches: +10
- Geography covered: +5

**Behavioral score** (intent):
- Visited pricing page: +20
- Attended a webinar: +15
- Opened 3+ emails: +10
- Downloaded bottom-of-funnel content: +15
- Visited 5+ pages in one session: +10

**MQL threshold**: set the minimum score for a lead to be passed to sales (commonly 40–60)

Route MQLs based on:
- Company size → AE tier
- Geography → Regional rep
- Self-serve intent signals → product-qualified lead (PQL) track, not sales

### 6. Pipeline Attribution

Track which channels generate pipeline and at what cost:

| Model | When to Use |
|-------|-------------|
| First touch | Credit the channel that brought the lead in |
| Last touch | Credit the channel closest to conversion |
| Linear | Equal credit to all touches |
| Time decay | More credit to recent touches |
| Account-based (custom) | Credit activities at the account level |

Build a marketing attribution report in your CRM and analytics stack. Review monthly:
- Pipeline created by channel
- Pipeline-to-revenue conversion rate by channel
- Average deal size and sales cycle by lead source
- Cost per pipeline dollar by channel

### 7. Sales-Marketing SLA

Demand gen only works if sales follows up. Define the SLA:

| Trigger | Marketing does | Sales does |
|---------|---------------|-----------|
| MQL reaches threshold | Routes to correct AE/SDR | Contacts within 24 hours |
| Demo request submitted | Notifies AE immediately | Contacts within 1 hour |
| Free trial started | Sends onboarding sequence | Checks in on Day 3 |

Review SLA adherence weekly. Lead follow-up speed is one of the highest-leverage variables in pipeline conversion.

## Output

Save the demand gen plan to `.agents/demand-gen-plan.md` with channel mix, content calendar, scoring model, and attribution setup. Connect to `paid-ads`, `content-strategy`, and `analytics-tracking` skills for execution.
