---
name: form-cro
description: "When the user wants to optimize any form that is NOT a signup or registration form — including lead capture forms, contact forms, demo request forms, checkout forms, survey forms, or any multi-field input on a marketing page. Also use when the user says 'our form isn't getting submissions,' 'lead form completion rate is low,' 'people start filling out the form but abandon it,' or 'how do I get more demo requests.' For signup and registration forms, see signup-flow-cro."
metadata:
  version: 1.0.0
---

# Form Conversion Rate Optimization

You help teams increase form completion rates for lead capture, contact, demo request, and checkout forms on marketing pages.

## Starting Point

Load `.agents/product-marketing-context.md` before asking questions. Use the product and audience context to frame your recommendations.

Before analyzing, identify:

1. **Form purpose**: Lead capture, demo request, contact, checkout, survey, content download?
2. **Current completion rate**: What percentage of visitors who view the form complete it?
3. **Traffic source**: Where are visitors coming from when they encounter this form?
4. **What happens after submission**: What does the user experience next?

---

## Analysis Framework

### 1. Field Audit

The single highest-impact improvement to any form is almost always reducing fields.

For each field, ask:
- **Is this required to fulfill the user's request?** (If not, cut it or make it optional)
- **Is this information available through other means?** (IP-based company detection, email domain enrichment)
- **Will this field cause a meaningful segment of users to abandon?** (Phone number is the most common abandonment trigger)

**Default field decisions for lead capture forms:**
- Keep: First name, email address
- Make optional or remove: Last name, phone number, company name, company size, job title
- Never put on first contact: Budget, timeline, detailed requirements

### 2. Form Length vs. Lead Quality Trade-Off

More fields = fewer submissions but higher intent. Fewer fields = more submissions but more unqualified leads. Match form length to the value being exchanged:

| Value exchange | Appropriate field count |
|----------------|------------------------|
| Newsletter signup | 1 (email only) |
| Free resource download | 2–3 (name + email) |
| Free trial request | 2–4 |
| Demo request | 4–6 |
| Enterprise sales contact | 5–7 |
| High-value assessment | 7–10 (multi-step) |

### 3. CTA Copy and Framing

The submit button is a conversion element, not a formality:
- **Avoid**: Submit, Send, Click Here, Go
- **Use**: Get My Free Report, Request a Demo, Start My Trial, Send My Results
- The button should describe what the user receives, not what they do

### 4. Placement and Visibility

- Is the form visible on load without scrolling?
- On mobile, is the form stacked properly and is the submit button reachable?
- If the form is below the fold: Is there a compelling reason to scroll to it?
- Consider using a sticky CTA or anchor link to the form from the top of the page

### 5. Trust and Friction Reducers

Add reassurances near the submit button:
- Privacy statement ("We never share your information")
- Response time expectation ("We'll respond within one business day")
- Social proof near the form ("Trusted by 5,000+ SaaS teams")
- Security badges for sensitive data forms

### 6. Post-Submission Experience

The thank-you page is often an optimization opportunity:
- Is the thank-you message specific about what happens next?
- Is there a secondary conversion or content offer on the confirmation page?
- If demo request: Show calendar directly on the confirmation page instead of waiting for a follow-up email

### 7. Error Handling

- Are error messages inline (next to the field) or only shown at the top?
- Are errors specific ("Enter a valid business email") or generic ("Invalid input")?
- Does the form clear all fields on error, or only the problematic one?

---

## Output Format

### Field Reduction Recommendations
Which fields to remove, make optional, or move to post-submission.

### Quick Wins
Changes that can ship fast with immediate impact.

### Structural Changes
Bigger redesigns worth the investment.

### Copy Recommendations
Rewritten CTA button copy, headline, and supporting text with rationale.

---

## Related Skills

- **signup-flow-cro**: For registration and account creation flows specifically
- **page-cro**: If the page context around the form needs optimization
- **copywriting**: If the form page needs a full copy overhaul
- **ab-test-setup**: To properly test form changes
