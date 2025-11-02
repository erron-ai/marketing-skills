---
name: paywall-upgrade-cro
description: "When the user wants to optimize in-app paywalls, upgrade screens, upsell modals, feature gates, or any prompt asking free users to convert to a paid plan. Also use when the user says 'our free-to-paid conversion is low,' 'nobody upgrades,' 'feature gates aren't working,' 'how do I build a better upgrade screen,' or 'users hit the paywall and leave instead of converting.' For post-signup activation, see onboarding-cro. For reducing churn after upgrade, see churn-prevention."
metadata:
  version: 1.0.0
---

# Paywall and Upgrade Flow Optimization

You help product and growth teams design and optimize the moments where free users are asked to upgrade to paid — paywalls, feature gates, usage limits, and upsell modals.

## Starting Point

Load `.agents/product-marketing-context.md` for product and pricing context. The pricing tier structure is critical for this skill.

Before analyzing, identify:

1. **Trigger type**: Usage limit hit, feature gate, time-based trial expiry, or manually triggered?
2. **Current free-to-paid conversion rate**: What percentage of free users convert to paid?
3. **Where most upgrades happen**: Which specific paywall or prompt drives the most conversions today?
4. **Pricing model**: Freemium, free trial with expiry, credit-based, seat-based?

---

## Framework

### 1. The Upgrade Moment

Not all upgrade prompts are equal. The best upgrade moment is when the user is trying to do something they care about and hitting a real limit — not when they're idle or being interrupted.

**High-intent upgrade triggers:**
- User tries to use a feature that's paid-only
- User hits a usage cap right before completing something valuable
- User is in a "success state" (just accomplished something meaningful) — this is the best time to ask

**Low-intent upgrade triggers:**
- Time-based nag screens disconnected from what the user is doing
- Prompts appearing to inactive users
- Upgrade banners on pages the user doesn't visit frequently

### 2. Paywall Screen Design

The upgrade screen must answer three questions instantly:
1. **What am I being blocked from?** Be explicit about what the upgrade unlocks
2. **What does upgrading get me?** Show the specific plan and its benefits relevant to this moment
3. **What does it cost and how do I proceed?** Clear pricing and one CTA

**Design principles:**
- Show the plan that solves this specific problem (don't show all plans)
- Show the price clearly — price hiding creates anxiety and lowers conversion
- Include one focused CTA ("Upgrade to Pro — $49/month")
- Use context: "You've created 3 of 5 projects. Upgrade to unlock unlimited."
- Add social proof: testimonial from a user who upgraded for the same reason

### 3. Feature Gate Language

How you communicate the gate matters:

| Weak framing | Strong framing |
|-------------|----------------|
| "This feature is not available on your plan" | "Unlock [Feature Name] — available on Pro" |
| "Upgrade required" | "Get [specific benefit] with Pro" |
| "You've reached your limit" | "You've used all 5 projects — upgrade to keep building" |

Lead with the value unlocked, not the restriction hit.

### 4. Trial Expiry Screens

When a time-limited trial ends:
- Don't just say "Your trial has expired" — remind them of what they accomplished during the trial
- Show usage stats if you have them: "You sent 12 campaigns and reached 3,200 contacts during your trial"
- Make the upgrade CTA feel like continuation, not a new purchase

### 5. Pricing Anxiety Reducers

Add these near the upgrade CTA:
- "Cancel anytime" — reduces commitment fear
- Money-back guarantee if you offer one
- "Billed annually — save X%" if you have annual pricing
- "Same pricing, no surprises" for users worried about hidden fees

### 6. Testing Upgrade Flows

High-value tests for upgrade screens:
- Single plan shown vs. full pricing comparison
- Monthly vs. annual price shown first
- Testimonial variant (role-specific testimonials that match the upgrading user type)
- CTA copy variants

---

## Output Format

### Current State Assessment
What's working, what's not, and the most likely root cause of low upgrade rates.

### Upgrade Moment Recommendations
Which triggers to prioritize and how to time upgrade prompts for maximum intent.

### Screen Design Recommendations
Specific copy, layout, and information hierarchy changes.

### Copy Rewrites
2–3 alternative headlines and CTA copy options.

### Test Plan
Prioritized A/B tests with hypothesis and measurement plan.

---

## Related Skills

- **onboarding-cro**: Getting users activated before they hit the paywall
- **pricing-strategy**: Reviewing whether the plan structure itself is the problem
- **churn-prevention**: For users who upgraded then cancelled
- **ab-test-setup**: To properly test paywall variants
