# erron.ai / marketing-skills

> Agent skills and tool integrations for marketing work — built for teams using AI coding agents.

erron.ai is an Agentic AI consulting company. This is our open-source library of marketing skills for AI coding agents: structured, reusable instructions that give agents deep marketing knowledge across CRO, SEO, copywriting, paid, growth, and strategy.

Works with Claude Code, Cursor, Windsurf, OpenAI Codex, and any agent runtime that reads markdown skill files.

---

## The idea

AI coding agents are good at following instructions. They're less good at knowing *which* marketing frameworks to apply, *when* to apply them, or *what questions to ask first*.

These skills fix that. Each one is a focused workflow — scoped to a single task, written for agents, and designed to produce consistent, high-quality outputs without extra prompting.

Every skill starts by reading `.agents/product-marketing-context.md` — a shared document that holds your product description, audience, and positioning. Write it once; all skills use it automatically.

---

## What's in here

**42 skills** across conversion, copy, SEO, paid, growth, strategy, and more.

**78 tool integration guides** covering the most common marketing platforms — how to authenticate, which APIs to call, and which operations matter for each category.

**71 CLI scripts** — zero-dependency Node.js scripts for interacting with marketing tools directly from the terminal or from within an agent workflow.

---

## Skills

| Skill | What it does |
|-------|-------------|
| [product-marketing-context](skills/product-marketing-context/) | Build the shared context document all other skills read first |
| **Conversion** | |
| [page-cro](skills/page-cro/) | Audit and optimize any marketing page for conversions |
| [signup-flow-cro](skills/signup-flow-cro/) | Reduce friction in signup and trial activation flows |
| [onboarding-cro](skills/onboarding-cro/) | Get users to first value faster after signup |
| [form-cro](skills/form-cro/) | Optimize lead capture, contact, and checkout forms |
| [popup-cro](skills/popup-cro/) | Create and improve modals, overlays, and sticky bars |
| [paywall-upgrade-cro](skills/paywall-upgrade-cro/) | Convert free users to paid at in-app upgrade moments |
| **Copy** | |
| [copywriting](skills/copywriting/) | Write conversion-focused copy for any marketing page |
| [copy-editing](skills/copy-editing/) | Edit and sharpen existing copy without changing core message |
| [cold-email](skills/cold-email/) | Write B2B cold outreach sequences that get replies |
| [email-sequence](skills/email-sequence/) | Design automated email flows and lifecycle programs |
| [social-content](skills/social-content/) | Create content for LinkedIn, X, Instagram, and TikTok |
| [brand-voice](skills/brand-voice/) | Define tone guidelines, vocabulary, and writing style standards |
| **SEO** | |
| [seo-audit](skills/seo-audit/) | Diagnose technical and on-page SEO issues |
| [ai-seo](skills/ai-seo/) | Optimize content to appear in AI-generated answers |
| [programmatic-seo](skills/programmatic-seo/) | Build SEO content at scale from templates and data |
| [site-architecture](skills/site-architecture/) | Plan URL structure, navigation, and internal linking |
| [competitor-alternatives](skills/competitor-alternatives/) | Build comparison and "alternatives to" pages |
| [schema-markup](skills/schema-markup/) | Implement JSON-LD structured data for rich snippets |
| [content-strategy](skills/content-strategy/) | Plan topic clusters, pillars, and editorial calendars |
| [video-marketing](skills/video-marketing/) | YouTube strategy, video SEO, and repurposing workflows |
| **Paid** | |
| [paid-ads](skills/paid-ads/) | Run campaigns across Google, Meta, LinkedIn, and TikTok |
| [ad-creative](skills/ad-creative/) | Generate and iterate ad creative at scale |
| **Analytics & Testing** | |
| [analytics-tracking](skills/analytics-tracking/) | Set up and audit event tracking across GA4, Mixpanel, and GTM |
| [ab-test-setup](skills/ab-test-setup/) | Design statistically valid A/B and multivariate experiments |
| **Growth** | |
| [churn-prevention](skills/churn-prevention/) | Build cancel flows, save offers, and win-back campaigns |
| [free-tool-strategy](skills/free-tool-strategy/) | Plan calculators and generators for SEO and lead gen |
| [referral-program](skills/referral-program/) | Design referral and affiliate growth loops |
| [product-led-growth](skills/product-led-growth/) | Design PLG motions, viral loops, and expansion triggers |
| [community-led-growth](skills/community-led-growth/) | Build and grow a product community |
| [influencer-marketing](skills/influencer-marketing/) | Run creator partnerships from brief to measurement |
| **Strategy** | |
| [gtm-strategy](skills/gtm-strategy/) | Build go-to-market plans with ICP tiers and channel sequencing |
| [launch-strategy](skills/launch-strategy/) | Plan product launches with timelines and channel playbooks |
| [pricing-strategy](skills/pricing-strategy/) | Advise on pricing models, tiers, and packaging |
| [marketing-ideas](skills/marketing-ideas/) | Library of proven SaaS marketing ideas matched to your stage |
| [marketing-psychology](skills/marketing-psychology/) | Apply behavioral science to marketing decisions |
| [demand-generation](skills/demand-generation/) | Build full-funnel pipeline programs with attribution |
| [competitive-intelligence](skills/competitive-intelligence/) | Build battlecards, run win/loss analysis, track competitors |
| **Partnerships & ABM** | |
| [account-based-marketing](skills/account-based-marketing/) | Target account programs with 1:1 and 1:few personalization |
| [partnership-strategy](skills/partnership-strategy/) | Tech partnerships, co-marketing, and channel programs |
| **Sales & RevOps** | |
| [revops](skills/revops/) | Lead scoring, routing, and marketing-to-sales handoff |
| [sales-enablement](skills/sales-enablement/) | Pitch decks, one-pagers, objection handling, demo scripts |

---

## Getting started

### Step 1 — Install skills

```bash
# All skills
npx skills add erron-ai/marketing-skills

# Pick specific ones
npx skills add erron-ai/marketing-skills --skill page-cro copywriting seo-audit

# See what's available
npx skills add erron-ai/marketing-skills --list
```

Or clone and copy manually:

```bash
git clone https://github.com/erron-ai/marketing-skills.git
cp -r marketing-skills/skills/* .agents/skills/
```

### Step 2 — Set up context

Run the `product-marketing-context` skill first. It creates `.agents/product-marketing-context.md` — a shared file that every other skill reads before starting work.

```
"Set up my product marketing context"
```

You only do this once per project.

### Step 3 — Start working

Describe what you need:

```
"Audit this landing page and tell me what to change"
"Write a 5-email onboarding sequence for new signups"
"Plan our Q1 SEO content calendar"
"Set up conversion tracking for our checkout flow"
"Build a go-to-market plan for our new product"
```

Or invoke a skill directly:

```
/page-cro
/gtm-strategy
/cold-email
/demand-generation
```

---

## Tool integrations

The `tools/` directory has integration guides for 78 marketing platforms — authentication setup, common API operations, and agent-specific guidance for each tool.

Categories: Analytics · SEO · CRM · Email · Cold Email · Paid Ads · Referral · Enrichment · CRO · Automation · Forms · Messaging · Social · Video · Reviews · Push · Webinars · Product Analytics · Competitive Intel · Commerce · and more.

See [`tools/REGISTRY.md`](tools/REGISTRY.md) for the full index.

---

## Contributing

PRs are welcome — new skills, improvements to existing ones, or additional tool integrations.

Open an [issue](https://github.com/erron-ai/marketing-skills/issues) before building something large so we can align on scope.

---

## License

[MIT](LICENSE)
