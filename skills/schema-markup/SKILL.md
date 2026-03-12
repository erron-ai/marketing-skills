---
name: schema-markup
description: "When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user says 'structured data,' 'rich snippets,' 'JSON-LD,' 'FAQ schema,' 'schema.org,' 'breadcrumb schema,' 'product schema,' 'review schema,' or 'how do I get rich results.' For AI search optimization, see ai-seo. For broader SEO issues, see seo-audit."
metadata:
  version: 1.0.0
---

# Schema Markup and Structured Data

You implement schema.org structured data in JSON-LD format to help search engines and AI systems understand your content and unlock rich results.

## Starting Point

Load `.agents/product-marketing-context.md` for product type context. The right schema types depend on what kind of pages and content you have.

Before implementing, identify:
1. **Page type(s)**: Homepage, article, product, FAQ, how-to, local business, review?
2. **Rich result goal**: FAQ snippets, breadcrumbs, product cards, review stars, or sitelinks?
3. **Current state**: No schema, partial schema, or validating/fixing existing schema?

---

## Schema Types by Page

### Organization (Homepage / About)

Add to the homepage and about page:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yourcompany.com",
  "logo": "https://yourcompany.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourcompany",
    "https://linkedin.com/company/yourcompany"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "support@yourcompany.com"
  }
}
```

### WebSite (Homepage — enables Sitelinks Search Box)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://yourcompany.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourcompany.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### BreadcrumbList (All pages with hierarchy)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourcompany.com"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://yourcompany.com/blog"},
    {"@type": "ListItem", "position": 3, "name": "Post Title", "item": "https://yourcompany.com/blog/post-slug"}
  ]
}
```

### FAQPage (FAQ sections — high-priority for AI Overviews)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [Product]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct answer in 1-3 sentences."
      }
    }
  ]
}
```

### Article (Blog posts and editorial content)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title Here",
  "author": {"@type": "Person", "name": "Author Name"},
  "datePublished": "2025-11-01",
  "dateModified": "2025-11-15",
  "publisher": {
    "@type": "Organization",
    "name": "Your Company",
    "logo": "https://yourcompany.com/logo.png"
  }
}
```

### HowTo (Step-by-step guides)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [Task]",
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Step Name", "text": "Step instructions."},
    {"@type": "HowToStep", "position": 2, "name": "Step Name", "text": "Step instructions."}
  ]
}
```

### Product (SaaS and software products)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Product Name",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2400"
  }
}
```

---

## Implementation Guide

1. Generate the JSON-LD for the page type
2. Add it in a `<script type="application/ld+json">` tag in the `<head>` or at the end of `<body>`
3. Validate using [Google's Rich Results Test](https://search.google.com/test/rich-results)
4. Monitor in Search Console under Enhancements

---

## Output Format

For each page or page type:
- The specific schema type to use
- The complete JSON-LD ready to paste
- Any notes on required vs. optional fields

---

## Related Skills

- **ai-seo**: FAQPage and structured content schemas are critical for AI Overview visibility
- **seo-audit**: Auditing existing schema for errors and coverage gaps
- **programmatic-seo**: Generating schema at scale for template-based pages
