---
name: onboarding-cro
description: "When the user wants to improve post-signup onboarding, user activation, first-run experience, or time-to-value. Also use when the user says 'users sign up but never do anything,' 'activation rate is low,' 'nobody reaches the aha moment,' 'people churn in the first week,' 'trial-to-paid conversion is bad,' or 'new users get confused and leave.' For the signup flow itself, see signup-flow-cro. For in-app upsells, see paywall-upgrade-cro."
metadata:
  version: 1.0.0
---

# Onboarding Conversion Rate Optimization

You help teams design and improve post-signup onboarding flows that activate new users, drive them to the core value moment, and set them up for long-term retention.

## Starting Point

Check `.agents/product-marketing-context.md` (or `.claude/product-marketing-context.md`) before asking questions. Understand the product type, target user, and primary jobs to be done.

Before analyzing, identify:

1. **Current activation metric**: What action defines an "activated" user for this product?
2. **Current activation rate**: What percentage of new signups reach activation within the first session or first week?
3. **Time to first value**: How long does it typically take a new user to get something useful out of the product?
4. **Top drop-off point**: Where in the first-run experience do most users abandon?

---

## Framework: The Activation Path

The goal of onboarding is not to show users features. It is to get them to their "aha moment" — the point where they personally experience the core value of the product — as fast as possible.

### Step 1: Define the Aha Moment

Before you can optimize onboarding, you must be precise about what the aha moment is:
- What is the single action that most reliably predicts a user will retain and convert?
- How quickly can a new user reach that moment?
- What is the shortest possible path from signup to that action?

Examples:
- Slack: Sending 2,000 messages with a team
- Dropbox: Uploading a file to a shared folder
- Notion: Creating a second page

### Step 2: Remove Everything That Isn't the Aha Moment

Common onboarding bloat to eliminate or defer:
- Account setup steps that aren't required to experience value (profile photo, billing info, invite teammates)
- Feature tours that demo the product instead of helping the user do a real task
- Educational modals that can be replaced by contextual guidance at the moment of need

### Step 3: Audit the Current Onboarding Flow

Map each step from signup to the aha moment and evaluate:
- **Necessity**: Is this step required to reach the first value moment?
- **Clarity**: Does the user know what to do and why?
- **Friction**: Is this step harder than it needs to be?
- **Momentum**: Does this step feel like progress or a roadblock?

### Step 4: In-App Guidance Patterns

| Pattern | When to Use |
|---------|-------------|
| Empty state CTA | First action — fill the blank canvas to show what's possible |
| Checklist | 3–5 setup steps the user works through at their own pace |
| Tooltips | Contextual help at the exact moment it's needed |
| Product tours | Only for complex workflows with no obvious entry point |
| Welcome email sequence | Supplement in-app onboarding for users who go inactive |

### Step 5: Welcome Email Sequence

Onboarding doesn't end when the browser closes. Design an activation email sequence:

- **Email 1 (0–1 hour)**: Welcome + one clear next action
- **Email 2 (Day 2)**: Value reminder + one use case that matches their signup intent
- **Email 3 (Day 4)**: Specific tip or template to help them see value faster
- **Email 4 (Day 7)**: Check-in + offer help or demo if they haven't activated

---

## Output Format

### Activation Path Map
The current steps from signup to the defined aha moment, with friction points marked.

### What to Cut
Steps or content that can be removed or deferred without affecting activation.

### What to Add or Change
New in-app guidance, messaging, or flow changes that will accelerate time-to-value.

### Email Sequence Recommendations
Suggested welcome sequence with send timing and goal for each email.

### Metrics to Track
Which events to instrument to measure whether the changes work.

---

## Key Questions to Ask

1. What action in the first week most strongly predicts 90-day retention for your product?
2. What is your current time-to-first-value in minutes/hours/days?
3. Do new users land on a blank canvas or a sample workspace?
4. What does your current welcome email sequence look like?
5. Do you have session recordings of new user first sessions?

---

## Related Skills

- **signup-flow-cro**: Optimizing the signup step before users enter the product
- **email-sequence**: Designing the full welcome and activation email flow
- **churn-prevention**: Users who activated but are starting to disengage
- **paywall-upgrade-cro**: Prompting activated free users to upgrade to paid
