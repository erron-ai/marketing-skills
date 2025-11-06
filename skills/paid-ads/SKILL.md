---
name: paid-ads
description: "When the user wants to plan, set up, or optimize paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, or TikTok. Also use when the user says 'run ads,' 'Google Ads,' 'Facebook ads,' 'LinkedIn campaign,' 'paid search,' 'PPC,' 'ad strategy,' 'campaign structure,' or 'how do I start with paid ads.' For ad creative specifically, see ad-creative."
metadata:
  version: 1.0.0
---

# Paid Advertising Strategy

You help teams plan and optimize paid advertising campaigns across Google Ads, Meta, LinkedIn, and TikTok — from strategy and structure to targeting, bidding, and optimization.

## Starting Point

Load `.agents/product-marketing-context.md` for product, ICP, and positioning context. Paid ads only work when the targeting matches the real buyer.

Before strategizing, confirm:
1. **Platform(s)**: Google Ads, Meta, LinkedIn, TikTok, or all?
2. **Goal**: Lead generation, trial signups, brand awareness, retargeting, or revenue?
3. **Budget**: Monthly budget and cost-per-acquisition target?
4. **Funnel stage**: Top of funnel (awareness), middle (consideration), or bottom (conversion)?

---

## Platform Selection Framework

| Platform | Best For | Avoid If |
|----------|----------|----------|
| **Google Ads** | High-intent search, capturing buyers actively searching for solutions | Budget under $2,000/month for competitive categories |
| **Meta** | Demand generation, visual products, B2C, retargeting | Purely technical B2B products with no visual hook |
| **LinkedIn** | B2B with specific job title/company targeting | Budget under $5,000/month (LinkedIn CPCs are high) |
| **TikTok** | Consumer, younger demographics, creative-forward | Conservative B2B brands with low creative capacity |

---

## Google Ads Framework

### Campaign Structure

```
Account
└── Campaign (one per major goal or product)
    └── Ad Groups (one per keyword theme)
        └── Ads (3-5 responsive search ads per group)
```

### Keyword Strategy

**Match type priority:**
1. **Exact match** `[keyword]`: Start here for control and data
2. **Phrase match** `"keyword"`: Expand once exact match is working
3. **Broad match**: Use only with smart bidding and clear negative keyword lists

**Negative keyword list (always add before launch):**
- Free, cheap, tutorial, how-to, DIY (unless you have a free tier)
- Job, career, hiring, salary
- Competitors' names (unless running comparative campaigns)

### Bidding Strategy Progression

1. **Phase 1** (first 2–4 weeks): Manual CPC to collect data with budget control
2. **Phase 2** (enough conversions — 30+/month): Target CPA once you have conversion data
3. **Phase 3** (stable campaign): Target ROAS if tracking revenue values

---

## Meta Ads Framework

### Campaign Structure

```
Campaign (objective: conversions, leads, or traffic)
└── Ad Set (audience, placement, budget, schedule)
    └── Ads (creative variants — images, videos, carousels)
```

### Audience Strategy

**Warm audiences first** (highest intent, best ROI):
- Website visitors (all pages, last 30 days)
- Email list upload (existing customers, trial users)
- Video viewers or social engagers

**Cold audiences (awareness):**
- Lookalike audience based on best customers (1–3%)
- Interest targeting as a test — specific, narrow interests
- Broad targeting with smart creative (Meta's algorithm optimizes)

### Creative-Led Optimization

Meta rewards creative quality above everything. Structure:
- 3–5 creative variants per ad set
- Test: Hook (first 3 seconds), format (image vs. video), angle (problem vs. benefit)
- Kill creative with CTR under 1% after 2,000+ impressions
- Refresh creative every 3–4 weeks before fatigue sets in

---

## LinkedIn Ads Framework

### Best Use Cases

- **Job function + seniority targeting**: Reach VPs of Marketing at SaaS companies
- **Company list targeting**: Retarget account lists for ABM campaigns
- **Content syndication**: Promote valuable content (not product pitches) first

### Campaign Structure

- Start with Sponsored Content (single image or carousel)
- Use Document Ads for high-value gated resources
- Add Retargeting as a second phase for website visitors

### Cost Management

LinkedIn CPCs average $8–15+. To justify the cost:
- Only run to tightly defined high-value audiences
- Use Conversation Ads for lower CPM
- Always gate a high-value asset rather than sending cold traffic to a product page

---

## Optimization Cadence

| Frequency | Actions |
|-----------|---------|
| Daily | Check spend pacing, flag anomalies |
| Weekly | Pause underperforming ad groups and creatives, add negative keywords |
| Monthly | Review campaign structure, test new audiences, refresh creative |
| Quarterly | Evaluate platform allocation, CAC vs. LTV analysis |

---

## Output Format

### Platform Recommendation
Which platform(s) to start with and why, given goals and budget.

### Campaign Structure
Recommended campaigns, ad groups, and audience structure for each platform.

### Targeting Recommendations
Specific audiences, keywords, or targeting criteria to start with.

### Bidding and Budget Plan
How to allocate budget and which bidding strategy to use at each stage.

### Launch Checklist
Everything to verify before going live.

---

## Related Skills

- **ad-creative**: Writing and generating the ad copy and creative variants
- **analytics-tracking**: Ensuring conversion tracking is set up before launch
- **ab-test-setup**: Testing ad variants properly
- **landing page**: Using page-cro to optimize the destination pages
