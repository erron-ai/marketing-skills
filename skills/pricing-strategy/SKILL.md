---
name: pricing-strategy
description: "When the user wants help with pricing decisions, packaging, or monetization strategy. Also use when the user says 'pricing,' 'how should I price this,' 'pricing tiers,' 'freemium vs trial,' 'raise prices,' 'packaging,' 'value metric,' 'willingness to pay,' or 'our pricing isn't working.' For in-app upgrade optimization, see paywall-upgrade-cro."
metadata:
  version: 1.0.0
---

# Pricing Strategy

You help founders and product teams make pricing decisions — model selection, tier design, value metrics, freemium vs. trial, and price increase strategy.

## Starting Point

Load `.agents/product-marketing-context.md` for product, audience, and competitive context.

Before advising, understand:
1. **Current pricing**: What is the current model and where is it breaking down?
2. **Competitors**: What do competitors charge?
3. **Buyer type**: SMB self-serve, mid-market, or enterprise sales-led?
4. **Core problem**: Low conversion, low expansion, wrong segment attracted, price anxiety?

---

## Pricing Model Selection

| Model | When to Use |
|-------|-------------|
| **Flat rate** | Simple product, one buyer type, predictable usage |
| **Per-seat** | Collaboration tools where value scales with team size |
| **Usage-based** | Infrastructure, API, or consumption tools where usage = value |
| **Freemium** | High viral/network potential, low marginal cost, self-serve distribution |
| **Free trial** | Product value visible fast, no strong reason to stay free forever |
| **Hybrid** | Free tier + usage-based overages, or freemium + per-seat paid |

**The core question**: What is the unit of value your customers are actually buying? Price on that metric.

---

## Tier Design Principles

### Three Tiers is the Standard

Most SaaS products work best with three paid tiers. Four is often one too many. Two feels like you're forcing a binary choice.

**Tier naming**: Name tiers after the customer they're for ("For solo founders," "For growing teams," "For organizations") — not after abstract sizes ("Starter, Growth, Enterprise").

### Value Metric Alignment

Each tier should offer meaningfully more of the value metric, not just more features:
- Bad: Tier 1 has feature A. Tier 2 has feature A + B. (Feature-stacking)
- Good: Tier 1 for 3 users. Tier 2 for 10 users. Tier 3 for unlimited users. (Scale with value)

### Anchoring with a Top Tier

A high-priced enterprise or top tier makes the middle tier look reasonable. It also captures high-value buyers who would pay more than your middle tier.

### Freemium vs. Free Trial

**Choose freemium when:**
- The product has viral or sharing mechanics
- Marginal cost per user is low
- The product has enough value in a limited form to attract and retain users

**Choose free trial when:**
- You want urgency (a deadline to convert)
- The product requires full access to demonstrate value
- The free tier would cannibalize paid

**Hybrid approach**: Freemium with a trial of paid features (e.g., "Try Pro free for 14 days, then continue on the free tier or upgrade").

---

## Price Increase Strategy

Raise prices when:
- New customers are converting at a significantly higher rate than your price expectations suggested
- Customers routinely tell you the product is underpriced
- Feature additions have increased the value delivered since you last reviewed pricing

**How to raise prices:**
1. Grandfather existing customers for 6–12 months (maintains goodwill)
2. Announce to new customers immediately
3. Communicate clearly to existing customers with a specific end date
4. Frame it around value added, not costs increased
5. Offer an annual plan lock-in at current rates before the increase takes effect

---

## Common Pricing Mistakes

| Mistake | Fix |
|---------|-----|
| Pricing on cost instead of value | Research willingness-to-pay; charge what the outcome is worth |
| Too many tiers | Simplify to 3 |
| Feature-stacking instead of value-metric scaling | Price on the unit that grows with customer success |
| Same page layout as every other SaaS | Design the page to answer "which plan is right for me?" |
| Never raising prices | Review pricing annually against value delivered |

---

## Output Format

### Pricing Model Recommendation
Which model and why, given product type and buyer behavior.

### Tier Design
Recommended tier structure with names, value metrics, and price points (if you have competitive data).

### Freemium vs. Trial Decision
A clear recommendation with the reasoning.

### Implementation Plan
What to change on the pricing page and in the product.

---

## Related Skills

- **paywall-upgrade-cro**: Optimizing the in-app moments that ask free users to upgrade
- **page-cro**: Improving the pricing page itself for conversion
- **marketing-psychology**: Anchoring, framing, and choice architecture for pricing pages
- **churn-prevention**: If pricing is the top cancellation reason
