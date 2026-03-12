---
name: site-architecture
description: "When the user wants to plan or restructure their website's page hierarchy, navigation, URL structure, or internal linking strategy. Also use when the user says 'site map,' 'navigation structure,' 'information architecture,' 'how should I organize my pages,' 'URL strategy,' 'internal linking,' or 'website structure.' For individual page optimization, see page-cro. For SEO issues, see seo-audit."
metadata:
  version: 1.0.0
---

# Website Architecture Planning

You help teams design and structure their marketing website — page hierarchy, navigation, URL patterns, breadcrumbs, and internal linking — for both user experience and SEO.

## Starting Point

Load `.agents/product-marketing-context.md` for product, audience, and business model context. The right site architecture depends on who you're serving and what you want them to do.

Before planning, confirm:
1. **Site type**: SaaS marketing site, e-commerce, content/blog, or documentation?
2. **Primary goals**: Driving signups, capturing leads, ranking for keywords, or all three?
3. **Current state**: Rebuilding from scratch, or restructuring an existing site?
4. **Content inventory**: What pages already exist that need to be accounted for?

---

## Framework

### 1. Define the Visitor Journeys

Before designing the structure, map the paths your key visitor types will take:

| Visitor type | Entry point | Goal | Exit point |
|-------------|-------------|------|------------|
| Informed buyer | Direct / brand search | Evaluate and decide | Signup or demo request |
| Problem-aware | Organic search (solution query) | Learn options | Blog or landing page → Signup |
| Category-aware | Organic search (category) | Discover products | Comparison page → Signup |
| Unaware | Organic search (problem) | Understand the problem | Blog post → Email capture |

The site structure should make all four journeys fast and frictionless.

### 2. Page Hierarchy

**Tier 1 — Foundation pages** (highest authority, linked from navigation):
- Homepage
- Pricing
- About
- Primary use-case or product pages (1–3 core pages)

**Tier 2 — Supporting pages** (linked from Tier 1 and between each other):
- Feature pages
- Integration or use-case pages
- Customer stories
- Blog / resources

**Tier 3 — Content pages** (support Tier 2 with long-tail SEO):
- Individual blog posts
- Comparison pages
- Programmatic pages (location, integration, etc.)

**Rule**: Every Tier 3 page should link back to at least one Tier 1 or Tier 2 page.

### 3. URL Structure

**Principles:**
- Short and descriptive — remove stop words where clean URLs still make sense
- Use hyphens, not underscores
- Reflect the hierarchy when it's logical: `/blog/post-title` vs `/post-title`
- Avoid dates in URLs for evergreen content — they date the content without adding value

**Common URL patterns for SaaS:**

| Page type | URL pattern |
|-----------|-------------|
| Homepage | `/` |
| Feature | `/features/{feature-name}` or `/{feature-name}` |
| Use case | `/for/{use-case}` or `/{use-case}` |
| Integration | `/integrations/{tool-name}` |
| Blog post | `/blog/{post-slug}` |
| Comparison | `/vs/{competitor}` |
| Customer story | `/customers/{company-name}` |

### 4. Navigation Structure

The navigation is the most crawled and most visited part of a site. Keep it focused:

**Primary navigation** (top bar):
- Product / Features
- Pricing
- Use cases or solutions (only if you serve clearly different audiences)
- Resources or Blog
- Company / About
- CTA button (Sign up / Start trial)

**Avoid:**
- More than 6–7 primary nav items
- Dropdown megamenus with more than 10 items
- Duplicating what's in the footer in the nav

### 5. Internal Linking Strategy

Internal links pass authority and help Google understand your site's structure. Priority rules:

1. **Homepage links to**: All Tier 1 pages, top Tier 2 pages
2. **Feature pages link to**: Related integrations, use cases, and blog posts
3. **Blog posts link to**: Relevant feature and product pages (contextually)
4. **Comparison pages link to**: Homepage and pricing page

Use descriptive anchor text — "learn how to set up event tracking" beats "click here."

---

## Output Format

### Recommended Page Hierarchy
A tier-structured list of recommended pages and how they relate.

### URL Pattern Guide
Recommended URL patterns for each page type.

### Navigation Design
Recommended primary and secondary navigation structure.

### Internal Linking Priorities
Which pages to link together and what anchor text patterns to use.

---

## Related Skills

- **seo-audit**: If the current architecture has technical SEO issues
- **programmatic-seo**: Planning the URL and structure for at-scale content
- **content-strategy**: How content fits into the site architecture
- **schema-markup**: Breadcrumb structured data for hierarchical pages
