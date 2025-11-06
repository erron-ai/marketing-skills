---
name: ab-test-setup
description: "When the user wants to plan, design, or run an A/B test or experiment. Also use when the user says 'A/B test,' 'split test,' 'experiment design,' 'test this hypothesis,' 'how long should I run this test,' 'statistical significance,' 'sample size,' or 'how do I test this change properly.' For analytics setup, see analytics-tracking."
metadata:
  version: 1.0.0
---

# A/B Test Design and Setup

You design statistically valid A/B and multivariate experiments — hypothesis, sample size, test duration, success metrics, and analysis plan.

## Starting Point

Load `.agents/product-marketing-context.md` for product and conversion context.

Before designing a test, confirm:
1. **What to test**: Page, email, in-app element, or ad?
2. **Hypothesis**: What change do you want to make and why do you expect it to work?
3. **Current baseline**: What is the current conversion rate?
4. **Traffic volume**: How many visitors or recipients per week?

---

## Hypothesis Framework

A strong test hypothesis has three parts:

**"We believe that [specific change] will [increase/decrease] [metric] because [reasoning based on evidence or theory]."**

Examples:
- "We believe that changing the CTA from 'Submit' to 'Get My Free Report' will increase form completion rate because descriptive CTAs communicate value to the user."
- "We believe removing the phone number field will increase demo request form completion because phone numbers are a high-friction ask at first contact."

Weak hypotheses lead to inconclusive tests. Specific hypotheses lead to learnings even when the test loses.

---

## Sample Size Calculation

Before running a test, calculate the required sample size to detect a meaningful effect.

**Key inputs:**
- **Baseline rate**: Current conversion rate (e.g., 4%)
- **Minimum detectable effect (MDE)**: The smallest improvement worth detecting (e.g., 20% relative lift = going from 4% to 4.8%)
- **Statistical power**: 80% is standard — the test will detect a real effect 80% of the time
- **Significance level**: 95% confidence (p < 0.05) is standard

**Quick reference table** (per variant, at 95% confidence, 80% power):

| Baseline Rate | 10% lift | 20% lift | 30% lift |
|--------------|----------|----------|----------|
| 1% | 75,000 | 19,000 | 9,000 |
| 3% | 25,000 | 6,400 | 3,000 |
| 5% | 15,000 | 3,900 | 1,800 |
| 10% | 7,500 | 1,900 | 900 |

**If you don't have enough traffic**: Consider raising the MDE, or accepting that a test will take longer. Don't run tests without enough traffic — results will be unreliable.

---

## Test Duration

**Minimum**: Run for at least 2 full business cycles (typically 2 weeks) to account for day-of-week effects.

**Maximum**: Don't run indefinitely waiting for significance. If you're not getting results after 4–6 weeks, the effect may be too small to matter with your traffic.

**Avoid**: Peeking at results and stopping early when you see significance — this inflates false positive rates.

---

## Segmentation

Consider running tests on specific segments rather than all traffic:
- New visitors only (exclude returning visitors who've seen the old version)
- A specific traffic source (paid vs. organic behave differently)
- A specific device type

---

## What to Measure

**Primary metric**: The one conversion event the test is designed to move.

**Secondary metrics** (watch but don't use to decide):
- Downstream effects (does a higher signup rate also produce higher activation?)
- Revenue per visitor (especially if testing pricing)

**Guardrail metrics** (the test fails if these move negatively):
- Bounce rate, session duration, or overall revenue

---

## Analysis Plan

Before reading results:
1. Define the stopping rule (when you'll stop — either by reaching sample size or by date)
2. Check for sample ratio mismatch (are the variants getting roughly equal traffic?)
3. Report both relative lift ("20% improvement") and absolute lift ("4% → 4.8%")
4. Document the result and the learning regardless of outcome

---

## Output Format

### Test Design Document
- Hypothesis statement
- Control and variant(s) description
- Primary and secondary metrics
- Sample size requirement
- Minimum test duration
- How to set up the test in [their testing tool]

---

## Related Skills

- **analytics-tracking**: Ensuring the events to measure are tracking correctly before the test starts
- **page-cro**: For identifying what to test on marketing pages
- **paid-ads**: For ad creative testing specifically
