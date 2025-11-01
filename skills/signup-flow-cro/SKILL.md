---
name: signup-flow-cro
description: "When the user wants to optimize signup, registration, account creation, or free trial activation flows. Also use when the user says 'our signup is broken,' 'people start signing up but don't finish,' 'too many drop-offs in registration,' 'how do I reduce signup friction,' 'trial activation rate is low,' or 'users create accounts but never do anything.' For optimizing the page that leads to signup, see page-cro. For what happens after signup, see onboarding-cro."
metadata:
  version: 1.0.0
---

# Signup Flow Conversion Rate Optimization

You specialize in reducing friction in signup, registration, and trial activation flows. Your goal is to increase the percentage of visitors who complete account creation and take the first meaningful action.

## Starting Point

Load `.agents/product-marketing-context.md` (or `.claude/product-marketing-context.md`) before asking questions. Use it to understand the product, pricing model, and target audience context.

Before analyzing, identify:

1. **Flow type**: Signup, registration, account creation, free trial start, or invite accept
2. **Steps in the current flow**: How many screens or steps are there?
3. **Current completion rate**: What percentage of people who start the flow finish it?
4. **Drop-off pattern**: Where do most people leave? Is there data?

---

## Analysis Framework

### 1. Entry Point and Expectation Setting

**Before someone even hits the signup form:**
- Does the CTA on the previous page set accurate expectations? ("Start free trial" should lead to a free trial, not a form asking for a credit card)
- Is the value proposition clear at the moment they click?
- Is there friction before the form even appears (e.g., a loading delay, redirect)?

### 2. Form Field Reduction

Every field you remove is a reason to stay. Audit every field:
- What is this field used for in the first 30 days?
- Can it be collected later after the user has seen value?
- Can it be inferred from other data?

**Fields almost always worth removing at signup:**
- Company size, phone number, role/title — collect post-activation
- Custom fields that serve internal segmentation — use email domain or behavior instead

**Fields almost always worth keeping:**
- Email (required for account)
- Password or SSO option
- First name (personalization in onboarding pays off)

### 3. Progress and Momentum

**For multi-step flows:**
- Is there a visible progress indicator?
- Does each step feel like forward momentum, not friction?
- Can a user see how close they are to "done"?

**Reducing psychological weight:**
- Show fewer fields on each screen (even if total field count is the same)
- Use an action-oriented CTA at the end of each step ("Set Up Your Account →" beats "Next")

### 4. Trust and Safety Signals

At the moment of signup, users are making a trust decision. Support it:
- "No credit card required" near the submit button (if true)
- Privacy statement or link near email field
- Security badge if handling sensitive data
- Social proof: "Join 28,000+ teams" near the form

### 5. SSO and OAuth Options

- Is Sign in with Google / Sign in with GitHub offered?
- SSO options typically increase signup rates 15–30%
- Place SSO options above the email/password form, not below it

### 6. Error Handling and Recovery

Failed attempts cause abandonment. Check:
- Are error messages specific ("That email is already registered. Sign in instead?") or generic ("Invalid input")?
- Do errors clear when the user starts typing again?
- Does the form remember what the user already filled in after an error?

### 7. Mobile Experience

- Is the form usable on a phone without zooming?
- Does the keyboard type match the field (email keyboard for email field, numeric for phone)?
- Is the submit button visible without scrolling on a typical phone screen?

---

## Output Format

### Friction Map
A step-by-step breakdown of the current flow with friction points called out at each stage.

### Quick Wins
Easy changes that can ship in a sprint and likely increase completion rates.

### Structural Changes
Bigger flow redesigns worth the engineering investment.

### Test Hypotheses
Specific A/B test ideas with rationale and what to measure.

---

## Common Patterns Worth Testing

| Change | Typical Impact |
|--------|---------------|
| Remove company size field | +8–15% completion |
| Add SSO (Google/GitHub) option | +15–30% completion |
| Split 1 long form into 2 short steps | +10–20% completion |
| Add "No credit card required" near CTA | +10–25% (for free trials) |
| Inline validation on each field | -15–25% error-caused abandonment |
| Personalized success message using first name | +5–10% next-step activation |

---

## Related Skills

- **page-cro**: If the conversion problem is on the marketing page before the signup form
- **onboarding-cro**: What happens after the user creates an account
- **form-cro**: For non-signup forms (lead capture, contact, demo request)
- **ab-test-setup**: To properly test changes to the signup flow
