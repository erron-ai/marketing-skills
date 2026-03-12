---
name: influencer-marketing
description: "When the user wants to run an influencer campaign, find creators in their niche, write influencer briefs, track campaign performance, or measure influencer ROI. Also triggered by: creator partnerships, sponsored content, influencer outreach, creator brief, UGC, micro-influencer, nano-influencer, creator program. Reads .agents/product-marketing-context.md for product and audience context."
metadata:
  version: 1.0.0
---

# Influencer Marketing

You help teams identify, brief, and measure influencer partnerships — from micro-creator collaborations to large-scale sponsored campaigns.

## Before You Start

Read `.agents/product-marketing-context.md` for product context, ICP, and any past campaigns. Influencer marketing works best when there's a natural overlap between the creator's audience and the product's ICP.

## Influencer Tiers

| Tier | Follower Range | Characteristics |
|------|---------------|-----------------|
| Nano | 1K–10K | High engagement, niche authority, very affordable |
| Micro | 10K–100K | Strong niche trust, moderate engagement, cost-effective |
| Mid-tier | 100K–500K | Broader reach, moderate engagement, higher cost |
| Macro | 500K–2M | Mass awareness, lower engagement rate, expensive |
| Celebrity | 2M+ | Broad awareness only, very low engagement, very expensive |

For B2B and SaaS products, nano and micro-influencers in the relevant professional niche almost always outperform macro influencers on ROI.

## Step-by-Step Process

### 1. Define Campaign Objectives

Choose one primary goal per campaign:
- **Awareness**: Reach new audiences who've never heard of the product
- **Consideration**: Drive traffic and signups from warm audiences
- **Conversion**: Direct response — trial starts, purchases, demo bookings
- **Content creation**: Generate authentic UGC for use in ads or social

The goal determines which metrics to track and which type of influencer to target.

### 2. Identify Ideal Influencers

Define the criteria:
- **Niche**: Topic area that overlaps with the product's use case
- **Audience demographics**: Job titles, industries, geographies that match the ICP
- **Engagement rate**: > 3% for micro, > 1.5% for mid-tier
- **Content quality**: Clear visuals, coherent narrative, authentic tone
- **Audience authenticity**: Low bot/fake-follower ratio (check with tools like HypeAuditor or Modash)
- **Brand safety**: No controversial recent posts; values alignment

Finding influencers:
- Search hashtags and keywords on YouTube, LinkedIn, Instagram, TikTok
- Use tools: Modash, Grin, CreatorIQ, or LinkedIn Creator Mode profiles
- Ask existing customers who they follow for industry content
- Check who mentions competitors (likely already familiar with the category)

### 3. Evaluate Influencer Fit

Before outreach, score each candidate:

| Criterion | Weight | Score (1–5) |
|-----------|--------|-------------|
| Audience ICP match | 30% | |
| Engagement rate | 25% | |
| Content quality | 20% | |
| Past brand partnership quality | 15% | |
| Niche authority | 10% | |

Prioritize influencers with a weighted score > 3.5.

### 4. Write the Outreach Message

Keep initial outreach short and personal. Template:

```
Subject: [First name] — partnership with [Product]

Hi [First name],

I've been following your content on [platform] — your recent post about [specific topic] 
was exactly what our audience needs more of.

We're building [Product] — [one sentence description of value]. We think your audience 
of [their niche] would find it genuinely useful.

We'd love to explore a paid partnership. The campaign would involve [2-sentence overview].

Are you open to a quick conversation this week?

[Your name]
```

Avoid mass outreach templates — personalization is the difference between a 5% and 30% reply rate.

### 5. Write the Campaign Brief

Once an influencer agrees, send a clear brief:

```markdown
# Campaign Brief — [Product] x [Creator Name]

## Objective
[One sentence — what should audience think/do after seeing this content?]

## Deliverables
- [Format: video/post/story/thread]
- [Platform: YouTube/Instagram/LinkedIn/TikTok]
- [Quantity: e.g., 1 YouTube video + 3 Instagram stories]
- [Timeline: publish window]

## Key Messages (must include)
1. [Core message 1]
2. [Core message 2]
3. [CTA — link in bio / discount code / landing page URL]

## Brand Guidelines
- Do: [approved language, tone notes]
- Don't: [off-limits topics, competitor mentions, claims to avoid]

## Approval Process
Content draft due: [date]
Feedback window: 48 hours
Publish date: [date]

## Compensation
[Flat fee / commission / gifting + commission]
[Payment timeline]

## Tracking
Use link: [UTM-tagged link]
Discount code: [CODE] (for tracking conversions)
```

### 6. Measure Campaign Performance

| Metric | How to Measure |
|--------|---------------|
| Reach | Views/impressions on sponsored content |
| Engagement | Likes + comments + shares / reach |
| Click-through rate | Clicks on tracked link / views |
| Conversion rate | Signups or purchases / clicks |
| Cost per acquisition | Total spend / conversions |
| Earned media value | Estimated value of organic reach beyond paid impressions |

Compare against benchmarks by tier and platform. Micro-influencer campaigns typically achieve 1–5% CTR; macro campaigns 0.1–0.5%.

### 7. Creator Relationship Management

Long-term creator relationships outperform one-off campaigns. After the first campaign:
- Share results with the creator (they appreciate the data)
- Provide genuine feedback on what resonated
- Ask if they'd like to join an ongoing creator program
- Consider ambassador programs with recurring commissions (see `referral-program` skill)

## Output

Document campaign briefs in `.agents/influencer-campaigns/[creator-slug].md` with deliverables, tracking links, and post-campaign performance notes.
