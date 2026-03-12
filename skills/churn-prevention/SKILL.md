---
name: churn-prevention
description: "When the user wants to reduce churn, build cancellation flows, create save offers, set up dunning sequences for failed payments, recover delinquent accounts, or win back churned users. Also use when the user says 'reduce churn,' 'cancel flow,' 'retention,' 'save offer,' 'payment failed,' 'dunning,' 'win back churned users,' or 'involuntary churn.' For trial-to-paid conversion, see onboarding-cro."
metadata:
  version: 1.0.0
---

# Churn Prevention

You help teams design and implement systems to reduce voluntary churn (cancellations), involuntary churn (failed payments), and win back former customers.

## Starting Point

Load `.agents/product-marketing-context.md` for product and pricing context.

Before designing, identify:
1. **Churn type**: Voluntary (cancellations), involuntary (payment failures), or both?
2. **Current churn rate**: Monthly or annual churn percentage?
3. **Top cancellation reasons**: What do customers say when they cancel?
4. **Pricing model**: Subscription, annual, or usage-based?

---

## Voluntary Churn: Cancel Flow

### Cancel Flow Design

The cancel flow is one of the highest-leverage, lowest-effort interventions in SaaS. Most teams don't have one.

**The three goals of a cancel flow:**
1. Understand why they're cancelling (segment by reason)
2. Offer a specific save offer matched to their reason
3. If they still cancel, capture feedback and plant seeds for a win-back

**Flow structure:**

```
Cancel button clicked
    ↓
Step 1: Cancellation reason survey (required — data is gold)
    ↓
Step 2: Dynamic save offer based on reason
    - "Too expensive" → Offer a discount or downgrade
    - "Not using it enough" → Offer a pause option or coaching session
    - "Missing a feature" → Show the feature roadmap or workaround
    - "Switching to a competitor" → Show comparison or offer a migration guide
    ↓
Step 3: If they decline the offer → confirm cancellation
    - Set an automatic win-back sequence trigger
    - Ask for permission to follow up
```

### Save Offer Types

| Cancellation reason | Save offer |
|---------------------|------------|
| Too expensive | 30–50% discount for 3 months, or annual plan at a reduced rate |
| Not using it | 30-day pause option + offer a free onboarding session |
| Missing a feature | Show feature roadmap + offer beta access if relevant |
| Switching to competitor | Side-by-side comparison + free migration help |
| Business circumstances | Long pause option or credit for future use |

---

## Involuntary Churn: Dunning

Involuntary churn from failed payments accounts for 20–40% of total SaaS churn. A dunning sequence automatically retries and communicates with customers whose payments failed.

### Dunning Email Sequence

| Email | Timing | Message |
|-------|--------|---------|
| 1 | Day 0 (immediately after failure) | Payment failed — update your card. No alarm, just helpful. |
| 2 | Day 3 | Reminder — account will be paused. One-click update link. |
| 3 | Day 7 | Final notice before downgrade/suspension. |
| 4 | Day 14 | Account paused/downgraded — here's how to reactivate. |

**Keys to effective dunning:**
- Make updating the card one click — no logging in, finding billing settings, etc.
- Keep the tone helpful and non-punishing
- Show what they'll lose access to (specific features, data) to create urgency

### Smart Retry Logic

Don't just retry on the same schedule as the original failure. Retry on:
- Day 1, Day 4, Day 7 after failure
- End of month (payday timing)
- A random time during the day (banking system availability varies)

---

## Win-Back Sequences

For already-churned customers:

### Timing
- 30 days after cancel: "Things have changed" email with new features or improvements
- 90 days after cancel: Reactivation offer with limited-time discount
- 180 days after cancel: Simple "still thinking about it?" check-in

### Win-Back Email Structure
1. Acknowledge they left without being desperate
2. Share what's new since they left (1–2 specific improvements relevant to their cancel reason)
3. Simple, low-friction offer to return
4. Easy reactivation CTA (pre-fill their account details if possible)

---

## Output Format

### Cancel Flow Design
Step-by-step flow with cancellation reason options and matched save offers.

### Save Offer Copy
Copy for each save offer variant matched to cancellation reason.

### Dunning Sequence
Full email sequence with timing, subject lines, and body copy.

### Win-Back Sequence
Timing and email outlines for win-back.

---

## Related Skills

- **onboarding-cro**: Preventing churn starts at activation — users who don't activate churn faster
- **email-sequence**: For the full email flows used in dunning and win-back
- **pricing-strategy**: If pricing is the top cancellation reason, the problem may be structural
