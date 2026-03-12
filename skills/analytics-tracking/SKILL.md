---
name: analytics-tracking
description: "When the user wants to set up, audit, or improve analytics tracking and event measurement. Also use when the user says 'set up tracking,' 'event tracking,' 'GA4 setup,' 'GTM,' 'Mixpanel events,' 'Segment,' 'UTM parameters,' 'conversion tracking,' 'attribution,' or 'our analytics are broken.' For A/B test measurement specifically, see ab-test-setup."
metadata:
  version: 1.0.0
---

# Analytics and Conversion Tracking

You help teams set up, audit, and improve event tracking across GA4, GTM, Mixpanel, Segment, and other analytics platforms.

## Starting Point

Load `.agents/product-marketing-context.md` for product and funnel context. Tracking strategy depends on what matters most to the business.

Before setting up or auditing, confirm:
1. **Platform(s)**: GA4, GTM, Mixpanel, Amplitude, Segment, or custom?
2. **Goal**: New setup, audit, or fixing broken tracking?
3. **Business model**: SaaS free trial, SaaS demo-led, e-commerce, or content?
4. **Key conversions**: What actions matter most to track?

---

## Tracking Plan Framework

Before writing a single line of tracking code, build a tracking plan:

| Event Name | Trigger | Properties to Send | Platform | Priority |
|-----------|---------|-------------------|----------|----------|
| signed_up | User completes signup | plan, source, email_domain | GA4, Mixpanel | P1 |
| trial_started | Trial period begins | plan, trial_days | GA4, Mixpanel | P1 |
| feature_used | First use of a core feature | feature_name, user_id | Mixpanel | P2 |
| upgraded | Free to paid conversion | plan_from, plan_to, revenue | GA4, Mixpanel | P1 |

**Priority levels:**
- **P1**: Must track — these events tie directly to revenue and business goals
- **P2**: Should track — product analytics and feature adoption
- **P3**: Nice to have — micro-interactions and engagement signals

---

## GA4 Setup Essentials

### Conversion Events
Every P1 event should be marked as a conversion in GA4:
1. Go to Admin → Events
2. Toggle "Mark as conversion" on for key events
3. Or create conversion events via the Conversions menu

### Enhanced Measurement
Enable in GA4: Admin → Data Streams → Enhanced Measurement
Automatically tracks: page views, scrolls, outbound clicks, video engagement, file downloads

### Custom Dimensions and Metrics
For properties you want to report on:
- User-scoped: plan, user_id, company_size
- Event-scoped: feature_name, form_id, campaign_id

---

## UTM Parameter Strategy

Every link from an external source should have UTM parameters. Use a consistent taxonomy:

| Parameter | Value Pattern | Example |
|-----------|--------------|---------|
| `utm_source` | Platform name | `google`, `linkedin`, `newsletter` |
| `utm_medium` | Channel type | `cpc`, `email`, `social`, `organic` |
| `utm_campaign` | Campaign name | `q4-trial-push`, `seo-launch-2025` |
| `utm_content` | Ad or link variant | `headline-a`, `blog-cta-inline` |
| `utm_term` | Keyword (paid) | `project-management-software` |

**Rule**: Never send traffic without UTMs from campaigns you're paying for or actively managing.

---

## Segment (CDP) Setup

If using Segment to route events to multiple tools:

```javascript
analytics.identify('user_123', {
  email: 'user@example.com',
  plan: 'trial',
  company: 'Acme Corp',
  created_at: '2025-11-01'
});

analytics.track('Trial Started', {
  plan: 'pro',
  trial_days: 14,
  source: 'organic'
});
```

Connect Segment to: GA4 (via Google Analytics destination), Mixpanel, Amplitude, Intercom, customer.io

---

## Audit Checklist

For auditing existing tracking:
- [ ] Are all P1 conversion events firing correctly?
- [ ] Are UTM parameters being captured on GA4 sessions?
- [ ] Are there duplicate events (double-firing from both hardcoded and GTM)?
- [ ] Are conversion events attributed to the correct traffic source?
- [ ] Are custom dimensions populated consistently?
- [ ] Is cross-domain tracking set up if users move between subdomains?
- [ ] Is the data layer populated before GTM fires?

---

## Output Format

### Tracking Plan
A table of all events to track, with properties, platforms, and priority.

### Implementation Code
Ready-to-use code snippets for each tracking event in the right format for the target platform.

### UTM Taxonomy
The naming convention to use for UTM parameters.

### Audit Findings
For audits: a list of issues found with specific fixes.

---

## Related Skills

- **ab-test-setup**: Measuring A/B test results requires clean event tracking
- **paid-ads**: Ensuring paid campaign conversions are tracked correctly
- **ga4**: See the ga4 tool integration guide for API access to reporting
