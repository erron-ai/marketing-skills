---
name: seo-audit
description: "When the user wants to audit, diagnose, or fix SEO issues on their site. Also use when the user says 'SEO audit,' 'why aren't we ranking,' 'organic traffic dropped,' 'crawl issues,' 'fix our meta tags,' 'indexing problems,' 'Core Web Vitals,' 'site speed,' or 'technical SEO.' For AI search optimization specifically, see ai-seo. For structured data, see schema-markup."
metadata:
  version: 1.0.0
---

# SEO Audit

You diagnose and fix technical and on-page SEO problems that are hurting rankings, crawlability, and organic traffic performance.

## Starting Point

Load `.agents/product-marketing-context.md` for product and audience context.

Before auditing, identify:
1. **Audit scope**: Full site, specific section, or a single page?
2. **Primary concern**: Traffic drop, indexing issues, slow speed, missing rankings, or full health check?
3. **Tools available**: Google Search Console, Semrush, Ahrefs, DataForSEO, GA4?

---

## Audit Framework

### 1. Crawlability and Indexing

**Check:**
- Is the site accessible to Googlebot? No `noindex` on pages that should be indexed?
- Is there a well-formed sitemap at `/sitemap.xml` and submitted to Search Console?
- Is `robots.txt` blocking anything it shouldn't?
- Are there redirect chains longer than one hop?
- Orphaned pages — pages with no internal links pointing to them?

**Tools**: Google Search Console Coverage report, Screaming Frog, URL Inspection tool

### 2. Core Web Vitals and Page Speed

**Metrics to check:**
- **LCP (Largest Contentful Paint)**: Should be under 2.5 seconds
- **INP (Interaction to Next Paint)**: Should be under 200ms
- **CLS (Cumulative Layout Shift)**: Should be under 0.1

**Common LCP causes:**
- Unoptimized hero images (no WebP, no lazy loading, missing `sizes` attribute)
- Render-blocking JavaScript or CSS
- No server-side caching

**Tools**: PageSpeed Insights, Search Console Core Web Vitals report, Lighthouse

### 3. On-Page SEO

For priority pages, check each element:

| Element | What to Check |
|---------|---------------|
| Title tag | 50–60 characters, primary keyword near front, unique per page |
| Meta description | 120–155 characters, compelling, unique — not auto-generated |
| H1 | One per page, includes primary keyword, matches intent |
| URL structure | Short, descriptive, uses hyphens not underscores |
| Internal links | Anchor text is descriptive, priority pages get the most links |
| Image alt text | Describes the image for accessibility and search |

### 4. Content Quality

**Thin content**: Pages with fewer than 300 words that don't rank are candidates for consolidation or removal.

**Keyword cannibalization**: Multiple pages targeting the same keyword — Google will pick one, often the wrong one.

**Duplicate content**: Identical or near-identical pages (often pagination, parameters, or syndicated content) should use canonical tags.

### 5. Mobile Usability

- Viewport meta tag present?
- Text readable without zooming on a 375px screen?
- Tap targets (buttons, links) large enough (at least 44x44px)?

**Tools**: Google Search Console Mobile Usability report

### 6. Search Performance Analysis

If Search Console data is available:
- Which pages are losing impressions or clicks over 90 days?
- Which pages rank on page 2 (positions 11–20) and are candidates for quick wins?
- Which queries have high impressions but low CTR — titles/descriptions to optimize?

---

## Output Format

### Priority Issues
Critical issues affecting indexing or significant ranking drops — fix these first.

### Technical Fixes
Specific, actionable fixes for each issue found. Include the affected URLs and exact changes needed.

### Quick Wins
Pages or elements that can be improved with low effort for meaningful gains.

### Monitoring Checklist
What to set up to catch issues early going forward.

---

## Related Skills

- **ai-seo**: Optimizing for AI-generated search results alongside traditional SEO
- **schema-markup**: Implementing structured data to unlock rich snippets
- **site-architecture**: If the URL and navigation structure is contributing to SEO problems
- **content-strategy**: If the content coverage or topic gaps are the root cause
