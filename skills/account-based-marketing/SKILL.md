---
name: account-based-marketing
description: "When the user wants to run ABM campaigns, build a target account list, create account-specific content, align sales and marketing on key accounts, or asks about ABM, account-based, TAL, 1:1 or 1:few marketing. Reads .agents/product-marketing-context.md for ICP and positioning context."
metadata:
  version: 1.0.0
---

# Account-Based Marketing (ABM)

You help marketing and sales teams design and execute account-based marketing programs — targeting specific high-value accounts with personalized outreach and content rather than broad demand generation.

## Before You Start

Read `.agents/product-marketing-context.md` for ICP definition, product positioning, and current sales motion. ABM requires tight alignment between sales and marketing on which accounts matter and why.

## ABM Tiers

| Tier | Scale | Investment | Personalization |
|------|-------|------------|-----------------|
| 1:1 (Strategic) | 5–25 named accounts | Very high | Fully bespoke content, executive outreach |
| 1:Few (Cluster) | 25–200 accounts | Medium | Segment-level content, industry-specific |
| 1:Many (Programmatic) | 200–2000 accounts | Lower | Role-level personalization, automated sequences |

Select the tier based on deal size, sales cycle length, and available resources.

## Step-by-Step Process

### 1. Build the Target Account List (TAL)

Define criteria for inclusion:

**Firmographic fit**:
- Industry verticals most likely to benefit
- Employee count range (signals budget and complexity)
- Revenue band (aligns to deal size)
- Geography (if product has regional constraints)

**Technographic fit**:
- Technologies they already use that integrate with your product
- Tools they use that you replace
- Signals of digital maturity (tech stack complexity)

**Intent signals**:
- Visited your pricing or features pages
- Searched for your category keywords (from G2, Bombora, etc.)
- Job postings signaling a relevant initiative
- Funding events (Series A/B = budget expansion)
- Leadership change (new decision-maker open to new vendors)

Score each account (1–10 on fit + intent) and rank. Build Tier 1 from the top 1–3%.

### 2. Map the Buying Committee

For each Tier 1 account, identify:
- **Economic buyer**: approves the budget (VP/C-suite)
- **Technical buyer**: evaluates the product (manager/team lead)
- **Champion**: uses the product daily (practitioner)
- **Blocker**: may have competing priorities or incumbent preference

Document contacts per account in CRM with LinkedIn profiles and any known context.

### 3. Research Each Account

For Tier 1 accounts, gather:
- Recent company news (funding, product launches, layoffs, acquisitions)
- LinkedIn posts from decision-makers
- Job postings that reveal priorities
- Conference talks or podcast appearances by leadership
- Current tech stack (BuiltWith, LinkedIn Tech Tools, G2 profiles)

Synthesize into a one-page account brief with: current situation, likely pain, relevant product angle, best entry point.

### 4. Create Personalized Content

**Tier 1 (1:1)**:
- Custom landing page: `yourdomain.com/for/[company-name]`
- Personalized case study featuring a similar company
- Executive briefing deck tailored to their situation
- Direct mail or gift for key contacts
- Bespoke video from an AE or executive

**Tier 2 (1:Few)**:
- Industry-specific landing pages
- Segment-level email sequences with industry examples
- Webinar or roundtable targeting a specific vertical
- Case studies from the same industry

**Tier 3 (1:Many)**:
- Role-based email sequences (persona-level, not company-level)
- Retargeting ads with segment-specific messaging
- Dynamic website personalization by industry or company

### 5. Coordinate Sales and Marketing Plays

Define a play for each account tier:

**Standard ABM play sequence (Tier 1 example)**:
1. Marketing sends personalized content (Week 1)
2. SDR follows up referencing the content (Week 2)
3. AE requests a meeting with an executive hook (Week 3)
4. Marketing runs targeted ads while account is in active outreach
5. Custom demo or briefing prepared if meeting booked

Document who owns each step and what the handoff looks like.

### 6. Run Targeted Ad Campaigns

Use account-matched audiences in paid platforms:
- LinkedIn: upload contact or company list → target by job title and company
- Google/Meta: customer match lists for retargeting
- Display: programmatic ABM platforms (Terminus, Demandbase, 6sense)

Ad content should reflect the account's tier — industry-specific messaging for Tier 2, generic for Tier 3.

### 7. Measure ABM Performance

ABM metrics differ from demand gen. Track:

| Metric | How to Measure |
|--------|---------------|
| Account coverage | % of TAL with at least one active contact |
| Account engagement | # of meaningful interactions per account per quarter |
| Pipeline from TAL | $ pipeline generated from accounts on the list |
| Win rate vs. non-ABM | Compare close rate for ABM vs. general inbound |
| Deal velocity | Average days from first touch to close for ABM vs. non-ABM |
| Account penetration | Avg. contacts engaged per account |

Review monthly. Move accounts between tiers based on engagement signals.

## Output

For Tier 1 accounts, save account briefs to `.agents/abm-accounts/[company-slug].md`. Save the overall TAL and scoring model to `.agents/target-account-list.md`.
