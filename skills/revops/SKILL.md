---
name: revops
description: "When the user wants help with revenue operations, lead lifecycle management, or marketing-to-sales handoff. Also use when the user says 'RevOps,' 'lead scoring,' 'lead routing,' 'MQL,' 'SQL,' 'CRM setup,' 'marketing-to-sales handoff,' 'pipeline management,' 'lead lifecycle,' or 'how do I know when a lead is ready for sales.' For sales collateral and enablement materials, see sales-enablement."
metadata:
  version: 1.0.0
---

# Revenue Operations

You help teams design and implement revenue operations systems — lead scoring, lead lifecycle stages, routing rules, CRM automation, and the marketing-to-sales handoff process.

## Starting Point

Load `.agents/product-marketing-context.md` for product, ICP, and sales motion context.

Before designing, confirm:
1. **Sales motion**: Self-serve only, sales-assisted, or full sales-led?
2. **Current CRM**: HubSpot, Salesforce, Close, or other?
3. **Team structure**: Marketing and sales as separate teams, or solo founder wearing both hats?
4. **Volume**: Leads per month, sales capacity, average deal size?

---

## Lead Lifecycle Framework

### Stage Definitions

| Stage | Definition | Who Moves Them |
|-------|------------|----------------|
| **Subscriber** | Opted in to marketing communications | Automatic |
| **Lead** | Has engaged with content or expressed interest | Automatic |
| **MQL** | Marketing-qualified: fits ICP and shows buying intent | Automated (score threshold) |
| **SAL** | Sales-accepted: sales has reviewed and agreed to work | Manual (SDR/AE) |
| **SQL** | Sales-qualified: sales has had a discovery call and confirmed fit | Manual (AE) |
| **Opportunity** | Active deal with defined close date and value | Manual (AE) |
| **Customer** | Converted | CRM automation |

### MQL Threshold Design

An MQL threshold should capture genuine buyer intent — not just activity volume.

**Scoring model:**

| Signal | Points |
|--------|--------|
| Pricing page visit | +15 |
| Demo request form view | +20 |
| Demo request form submit | +50 |
| Trial signup | +40 |
| Product qualification email opened | +5 |
| Product qualification email clicked | +10 |
| Job title matches ICP | +10 |
| Company size matches ICP | +10 |
| Downloaded high-intent content | +15 |
| Attended a webinar | +20 |

**MQL threshold**: Typically 40–60 points, depending on signal quality.

**Negative scoring:**
- Student, intern, or competitor email domain: -30
- Personal email (for B2B tools): -10

---

## Lead Routing Rules

Define who should receive which leads — and when:

| Condition | Route to |
|-----------|----------|
| MQL from enterprise company (>500 employees) | Senior AE |
| MQL from SMB company (<50 employees) | SDR for qualification |
| Demo request (any size) | Next available AE, within 5 minutes |
| Trial signup from target account | AE for that account |
| MQL from specific geography | Regional AE |

**Rule**: Demo requests should be followed up within 5 minutes. Response time is the single biggest predictor of conversion from demo request to pipeline.

---

## Marketing-to-Sales Handoff

The handoff breaks most often because:
- Sales doesn't know what the lead engaged with
- Marketing doesn't know what happened to MQLs after handoff
- "MQL" means something different to marketing and sales

**Fix the handoff with:**
1. **Context in every handoff**: Include the lead's engagement history — what pages visited, what content downloaded, what emails opened
2. **SLA agreement**: Sales commits to response time, marketing commits to MQL quality
3. **Feedback loop**: Weekly review of MQL quality — were MQLs actually ready for sales?
4. **Shared definition**: Marketing and sales agree on what an MQL means — and revisit it quarterly

---

## CRM Automation Rules

**Lead lifecycle automation (HubSpot/Salesforce):**
- Lead score reaches threshold → Set lifecycle stage to MQL → Notify assigned rep
- Demo request submitted → Create deal in pipeline → Assign to AE → Send notification
- Trial started → Create deal → Add to outbound sequence
- Deal closed won → Update lifecycle → Trigger customer success handoff

---

## Output Format

### Lead Lifecycle Design
Stage definitions and what triggers each stage transition.

### Scoring Model
The scoring model with signal weights and MQL threshold.

### Routing Rules
Decision tree for which leads go to whom.

### CRM Automation
Specific automation rules to configure in their CRM.

### Handoff Process
The agreed handoff SLA and feedback loop.

---

## Related Skills

- **sales-enablement**: Creating the sales materials that reps use after receiving MQLs
- **analytics-tracking**: Ensuring the right events and lifecycle stages are tracked
- **cold-email**: For outbound sequences triggered by RevOps automation
