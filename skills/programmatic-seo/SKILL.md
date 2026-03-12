---
name: programmatic-seo
description: "When the user wants to create SEO-optimized pages at scale using templates and data. Also use when the user says 'programmatic SEO,' 'build location pages,' 'integration pages,' 'comparison pages,' 'build pages at scale,' 'landing page templates,' or 'directory pages.' For technical SEO issues, see seo-audit. For individual page copy, see copywriting."
metadata:
  version: 1.0.0
---

# Programmatic SEO

You help teams plan and build high-quality SEO content at scale — location pages, integration pages, comparison pages, use-case pages, and directory-style content — using data-driven templates.

## Starting Point

Load `.agents/product-marketing-context.md` for product context. Programmatic SEO requires knowing what the product does to map it to real search demand.

Before planning, identify:
1. **Page type**: What kind of pages — location, integration, comparison, use-case, industry, or other?
2. **Data source**: What structured data exists to power the pages?
3. **Search volume validation**: Has keyword research confirmed demand for this page type?
4. **Quality bar**: Thin pages will get penalized — what makes each page genuinely useful?

---

## Page Type Playbooks

### Integration / Connects-With Pages

For SaaS products: "[Your Product] + [Integration]" pages

**URL pattern**: `/integrations/{tool-name}`
**Template structure**:
1. Headline: "[Your Product] + [Tool Name]: What You Can Do"
2. What the integration enables (specific use cases)
3. How to set it up (numbered steps)
4. Common workflows users unlock
5. CTA: Start free trial or view the integration

**Data needed**: List of integrations, each with name, logo, description, and 2–3 use cases

**Volume signal**: "your product + tool name" and "connect your product with tool name" queries

### Location Pages

For local or multi-region products: "[Service] in [City/Region]"

**URL pattern**: `/{service}/{city}`
**Template structure**:
1. Headline with city name and specific service
2. Local context paragraph (what makes this city/region relevant)
3. Core value proposition applied to local audience
4. Local social proof if available
5. Contact or CTA specific to that location

**Quality differentiator**: Unique local content (local stats, case studies, context) — not just replacing a city name.

### Comparison / Alternatives Pages

"[Your Product] vs [Competitor]" and "Best Alternatives to [Competitor]"

**URL patterns**: `/vs/{competitor}`, `/alternatives/{competitor}`
**Page types**:
1. **Head-to-head** ("Your Product vs Competitor"): Side-by-side comparison table + narrative on key differentiators
2. **You as the alternative** ("Competitor Alternative"): Why people switch, how you compare, what you offer instead
3. **Category alternatives** ("Best Alternatives to Competitor"): Comprehensive list including yourself at #1

**Important**: These pages need real, specific comparison data — not vague claims.

### Use-Case / Industry Pages

"[Product] for [Use Case/Industry]"

**URL pattern**: `/{use-case}` or `/for/{industry}`
**Template structure**:
1. Headline: "[Product] for [specific outcome in that use case]"
2. The specific problem this use case faces
3. How the product solves it for this specific context
4. Industry-specific social proof
5. CTA

---

## Quality Standards

Programmatic SEO fails when pages are thin. Every template should produce pages that are:

- **Unique**: Different pages have genuinely different content, not just city names swapped
- **Useful**: A visitor can accomplish something or learn something specific
- **Accurate**: Claims match the actual product capabilities
- **Deep enough**: 400+ words of non-boilerplate content per page

---

## Technical Implementation

**URL structure**: Short, descriptive, uses the target keyword naturally
**Canonical tags**: Important when pages are similar — point to the canonical version
**Sitemap**: Generate programmatically and update it as new pages are created
**Internal linking**: Link from the main feature or solution pages to the programmatic pages

---

## Output Format

### Page Type Recommendation
Which page type(s) to build and why, based on product and search demand.

### Template Design
The template structure for each page type, with data fields marked.

### Data Requirements
What data needs to be assembled or generated for each page type.

### SEO Validation
Target keywords and volume estimates for the page type.

---

## Related Skills

- **seo-audit**: Before building programmatic pages, ensure the technical SEO foundation is solid
- **schema-markup**: Structured data for programmatic pages (especially location and comparison pages)
- **site-architecture**: How programmatic pages fit into the broader URL and navigation structure
- **content-strategy**: How programmatic SEO fits the overall content plan
