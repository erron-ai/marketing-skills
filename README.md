# Marketing Skills for AI Agents

A curated collection of agent skills and tool integrations for marketing work. Built by the [erron.ai](https://erron.ai) team for technical marketers, founders, and growth engineers who want AI coding agents to handle conversion optimization, copywriting, SEO, analytics, and growth engineering. Works with Claude Code, OpenAI Codex, Cursor, Windsurf, and any agent that supports the [Agent Skills spec](https://agentskills.io).

**Contributions welcome.** Found a better approach or have a new skill to add? [Open a PR](#contributing).

Have a question or found a bug? [Open an issue](https://github.com/erron-ai/marketing-skills/issues).

## What are Skills?

Skills are markdown files that give AI agents specialized knowledge and step-by-step workflows for specific domains. Drop them into your project and your agent will recognize marketing tasks, apply the right frameworks, and produce higher-quality outputs without needing extra prompting.

## How Skills Work Together

Every skill reads from a shared context document before doing anything. This `product-marketing-context` file holds your product description, target audience, and positioning — so you never repeat yourself across tasks.

```
                         ┌─────────────────────────────────────┐
                         │       product-marketing-context      │
                         │   (all skills read this document)   │
                         └─────────────────┬───────────────────┘
                                           │
   ┌──────────────┬────────────┬───────────┼───────────┬─────────────┬──────────────┐
   ▼              ▼            ▼           ▼           ▼             ▼              ▼
┌────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐ ┌──────────┐
│ SEO &  │ │   CRO    │ │Content & │ │  Paid & │ │ Growth  │ │ Sales &  │ │ Strategy │
│Content │ │          │ │   Copy   │ │  Meas.  │ │& Retain │ │   GTM    │ │          │
├────────┤ ├──────────┤ ├──────────┤ ├─────────┤ ├─────────┤ ├──────────┤ ├──────────┤
│seo-    │ │page-cro  │ │copywrite │ │paid-ads │ │referral │ │revops    │ │mktg-ideas│
│audit   │ │signup-cro│ │copy-edit │ │ad-creat.│ │free-tool│ │sales-    │ │mktg-psych│
│ai-seo  │ │onboard-  │ │cold-email│ │ab-test  │ │churn-   │ │enable    │ │          │
│prog-   │ │ cro      │ │email-seq │ │analytics│ │prevent  │ │launch    │ │          │
│seo     │ │form-cro  │ │social    │ │         │ │         │ │pricing   │ │          │
│schema  │ │popup-cro │ │          │ │         │ │         │ │competitor│ │          │
│content │ │paywall   │ │          │ │         │ │         │ │          │ │          │
│site-   │ │          │ │          │ │         │ │         │ │          │ │          │
│arch    │ │          │ │          │ │         │ │         │ │          │ │          │
└────────┘ └──────────┘ └──────────┘ └─────────┘ └─────────┘ └──────────┘ └──────────┘
```

Skills also cross-reference each other:
- `copywriting` ↔ `page-cro` ↔ `ab-test-setup`
- `revops` ↔ `sales-enablement` ↔ `cold-email`
- `seo-audit` ↔ `schema-markup` ↔ `ai-seo`

## Available Skills

| Skill | Description |
|-------|-------------|
| [ab-test-setup](skills/ab-test-setup/) | Design statistically valid A/B tests and multivariate experiments with proper sample sizes and success metrics |
| [ad-creative](skills/ad-creative/) | Generate and iterate ad creative at scale — headlines, descriptions, and primary text for any ad platform |
| [ai-seo](skills/ai-seo/) | Optimize content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and Gemini |
| [analytics-tracking](skills/analytics-tracking/) | Set up, audit, and improve event tracking across GA4, Mixpanel, Segment, and GTM |
| [churn-prevention](skills/churn-prevention/) | Build cancel flows, save offers, dunning sequences, and win-back campaigns to reduce involuntary and voluntary churn |
| [cold-email](skills/cold-email/) | Write B2B cold outreach emails and multi-step follow-up sequences that get replies |
| [competitor-alternatives](skills/competitor-alternatives/) | Create SEO-optimized comparison and "alternatives to" pages in four formats |
| [content-strategy](skills/content-strategy/) | Plan topic clusters, content pillars, editorial calendars, and SEO-driven content roadmaps |
| [copy-editing](skills/copy-editing/) | Edit and sharpen existing marketing copy through multiple focused passes without changing the core message |
| [copywriting](skills/copywriting/) | Write conversion-focused marketing copy for homepages, landing pages, pricing pages, and feature pages |
| [email-sequence](skills/email-sequence/) | Design automated email sequences, welcome series, nurture flows, and lifecycle programs |
| [form-cro](skills/form-cro/) | Optimize lead capture, contact, demo request, and checkout forms to maximize completion rates |
| [free-tool-strategy](skills/free-tool-strategy/) | Plan engineering-as-marketing tools — calculators, graders, and generators — for SEO and lead generation |
| [launch-strategy](skills/launch-strategy/) | Plan product launches, feature announcements, and go-to-market rollouts with timelines and channel playbooks |
| [marketing-ideas](skills/marketing-ideas/) | Curated library of proven SaaS marketing ideas matched to your specific context and growth stage |
| [marketing-psychology](skills/marketing-psychology/) | Apply cognitive biases, behavioral economics, and psychological principles to marketing decisions |
| [onboarding-cro](skills/onboarding-cro/) | Optimize post-signup activation flows to get users to their first value moment faster |
| [page-cro](skills/page-cro/) | Audit and optimize any marketing page to improve conversion rates with prioritized recommendations |
| [paid-ads](skills/paid-ads/) | Plan and optimize paid campaigns across Google Ads, Meta, LinkedIn, and TikTok |
| [paywall-upgrade-cro](skills/paywall-upgrade-cro/) | Optimize in-app paywalls, upgrade screens, and feature gates to convert free users to paid |
| [popup-cro](skills/popup-cro/) | Create and optimize popups, modals, exit-intent dialogs, and sticky bars for conversions |
| [pricing-strategy](skills/pricing-strategy/) | Advise on pricing models, tier structure, value metrics, and freemium vs. trial decisions |
| [product-marketing-context](skills/product-marketing-context/) | Create and maintain the shared context document that all other skills read before starting any task |
| [programmatic-seo](skills/programmatic-seo/) | Plan and build SEO content at scale using templates and data — location, integration, and comparison pages |
| [referral-program](skills/referral-program/) | Design and optimize referral programs, affiliate programs, and word-of-mouth growth loops |
| [revops](skills/revops/) | Design lead scoring, routing, CRM automation, and marketing-to-sales handoff processes |
| [sales-enablement](skills/sales-enablement/) | Create pitch decks, one-pagers, objection-handling docs, demo scripts, and sales playbooks |
| [schema-markup](skills/schema-markup/) | Implement schema.org structured data in JSON-LD for rich snippets and better SERP visibility |
| [seo-audit](skills/seo-audit/) | Diagnose and fix technical and on-page SEO issues affecting rankings and crawlability |
| [signup-flow-cro](skills/signup-flow-cro/) | Reduce friction in signup, registration, and free trial activation flows to increase completion rates |
| [site-architecture](skills/site-architecture/) | Plan page hierarchy, navigation structure, URL patterns, and internal linking strategy |
| [social-content](skills/social-content/) | Create, schedule, and optimize social media content for LinkedIn, Twitter/X, Instagram, and TikTok |

## Installation

### Option 1: CLI Install (Recommended)

```bash
# Install all skills
npx skills add erron-ai/marketing-skills

# Install specific skills
npx skills add erron-ai/marketing-skills --skill page-cro copywriting

# List available skills
npx skills add erron-ai/marketing-skills --list
```

Installs to `.agents/skills/` (with `.claude/skills/` symlink for Claude Code).

### Option 2: Claude Code Plugin

```bash
/plugin marketplace add erron-ai/marketing-skills
/plugin install marketing-skills
```

### Option 3: Clone and Copy

```bash
git clone https://github.com/erron-ai/marketing-skills.git
cp -r marketing-skills/skills/* .agents/skills/
```

### Option 4: Git Submodule

```bash
git submodule add https://github.com/erron-ai/marketing-skills.git .agents/marketing-skills
```

Then reference skills from `.agents/marketing-skills/skills/`.

### Option 5: Fork and Customize

1. Fork this repository
2. Customize skills for your product and audience
3. Clone your fork into your projects

## Usage

Once installed, describe what you want to do:

```
"Help me optimize this landing page for signups"
→ Uses page-cro skill

"Write homepage copy for my developer tool"
→ Uses copywriting skill

"Set up event tracking for our onboarding flow"
→ Uses analytics-tracking skill

"Plan a 6-email welcome sequence for new users"
→ Uses email-sequence skill

"Run an SEO audit on our marketing site"
→ Uses seo-audit skill
```

You can also invoke skills directly:

```
/page-cro
/email-sequence
/seo-audit
/launch-strategy
```

## Skill Categories

### Conversion Optimization
- `page-cro` — Any marketing page
- `signup-flow-cro` — Registration and trial activation flows
- `onboarding-cro` — Post-signup activation
- `form-cro` — Lead capture and non-signup forms
- `popup-cro` — Modals, overlays, and sticky bars
- `paywall-upgrade-cro` — In-app upgrade and upsell moments

### Content & Copy
- `copywriting` — Marketing page copy
- `copy-editing` — Edit and improve existing copy
- `cold-email` — B2B cold outreach and follow-up sequences
- `email-sequence` — Automated email flows and drip campaigns
- `social-content` — Social media content across platforms

### SEO & Discovery
- `seo-audit` — Technical and on-page SEO diagnosis
- `ai-seo` — Optimization for AI search (AEO, GEO, LLMO)
- `programmatic-seo` — Scaled page generation from templates and data
- `site-architecture` — Page hierarchy, navigation, and URL structure
- `competitor-alternatives` — Comparison and alternatives pages
- `schema-markup` — Structured data and rich snippets
- `content-strategy` — Topic clusters, pillars, and editorial calendars

### Paid & Distribution
- `paid-ads` — Google, Meta, LinkedIn, TikTok campaigns
- `ad-creative` — Ad creative generation and iteration

### Measurement & Testing
- `analytics-tracking` — Event tracking setup and audit
- `ab-test-setup` — Experiment design and statistical planning

### Retention
- `churn-prevention` — Cancel flows, save offers, dunning, and win-back

### Growth Engineering
- `free-tool-strategy` — Marketing tools and calculators
- `referral-program` — Referral and affiliate programs

### Strategy & Monetization
- `marketing-ideas` — Proven SaaS marketing ideas library
- `marketing-psychology` — Behavioral science applied to marketing
- `launch-strategy` — Product and feature launch planning
- `pricing-strategy` — Pricing, packaging, and monetization

### Sales & RevOps
- `revops` — Lead lifecycle, scoring, routing, and pipeline management
- `sales-enablement` — Sales decks, one-pagers, objection handling, demo scripts

## Contributing

Found a way to improve a skill or have a new one to suggest? PRs and issues are welcome.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding or improving skills and tools.

## License

[MIT](LICENSE) — Use these however you want.
