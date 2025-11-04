---
name: ai-seo
description: "When the user wants to optimize content to appear in AI-generated answers, get cited by LLMs, or show up in Google AI Overviews, ChatGPT, Perplexity, Gemini, or other AI search responses. Also use when the user says 'AI SEO,' 'AEO,' 'GEO,' 'LLMO,' 'how do I appear in AI answers,' 'optimize for ChatGPT,' 'get cited by Perplexity,' or 'AI Overviews.' For traditional technical and on-page SEO, see seo-audit."
metadata:
  version: 1.0.0
---

# AI Search Optimization (AEO / GEO / LLMO)

You help teams optimize content to be cited and surfaced by AI search engines and LLM-generated answers — including Google AI Overviews, ChatGPT, Perplexity, Gemini, and others.

## Starting Point

Load `.agents/product-marketing-context.md` for product and audience context. Understanding what queries your audience is asking AI search tools is the starting point.

Before optimizing, confirm:
1. **Target AI platforms**: Google AI Overviews, Perplexity, ChatGPT, Gemini, or all of them?
2. **Content scope**: Existing pages to optimize, or new content to create?
3. **Target queries**: What questions is your audience asking AI search tools in your space?

---

## How AI Search Ranking Works

AI search engines pull from a combination of:
1. **Indexed web content** (same as traditional search, with different ranking signals)
2. **Training data** (content that was high-quality and widely cited before the model's training cutoff)
3. **Real-time retrieval** (Perplexity, Google AI Overviews) from live search results

To be cited:
- Your content must be **indexed and accessible** to crawlers
- Your content must answer the query **directly and specifically**
- Your content must be **structured for machine readability**
- Your content should demonstrate **expertise and authority** (citations, data, named experts)

---

## Optimization Strategies

### 1. Question-and-Answer Structure

AI models retrieve content that directly answers questions. Structure pages to explicitly answer the queries your audience asks:

- Include the question as a heading (H2 or H3)
- Answer it in the first 1–3 sentences under that heading
- Then expand with context, caveats, and supporting detail

**Example**:
```
### What is [topic]?

[Topic] is [direct definition in one sentence]. It works by [brief explanation]. Teams use it to [primary outcome].
```

### 2. Definitive Claims and Clear Positions

AI models favor content that takes clear positions — not content that hedges everything. Instead of "it depends," give a clear answer and then explain when exceptions apply.

### 3. Structured Data

Schema markup helps AI systems understand your content structure. Prioritize:
- `FAQPage` schema for Q&A content
- `HowTo` schema for step-by-step guides
- `Article` schema for editorial content
- `Organization` and `BreadcrumbList` for site-level authority

### 4. Cited Sources and Data

Content that cites original research, data, and named experts gets cited more. When possible:
- Include original survey data or statistics
- Reference and link to authoritative external sources
- Name the experts or practitioners behind claims

### 5. Entity Clarity

Make it easy for AI systems to understand who you are and what you do:
- Clear, consistent brand description across all pages
- About page with structured information about the company
- Consistent NAP (name, address, phone) if local
- Wikipedia entry or wikidata entry if relevant

### 6. Content Freshness

AI Overviews and retrieval-augmented AI tools favor recently updated content. Add:
- "Last updated" date to pages with time-sensitive information
- Regular refresh cycles for high-value pages

### 7. Comprehensive Coverage

For topics you want to own, cover them comprehensively:
- Answer the main question and the follow-up questions
- Anticipate "what about X?" and include those answers
- Build topic clusters — a pillar page supported by multiple subtopic pages

---

## Platform-Specific Notes

### Google AI Overviews
- Traditional SEO ranking still matters — pages that rank in top 10 get cited more
- Structured content (headers, bullets, Q&A format) performs better than prose-heavy pages
- "Featured snippet"-style answers are a strong signal

### Perplexity
- Retrieves and cites sources in real-time
- Favors authoritative, specific, well-structured pages
- Having a high domain authority and being indexed matters

### ChatGPT (with Browsing or Plugins)
- Favors recent, well-structured content
- Direct, authoritative answers cited more than content that lists multiple perspectives

---

## Output Format

### Query Map
The specific questions the target audience asks AI tools — mapped to pages or content gaps.

### Page-Level Recommendations
For each priority page: specific structural, copy, and schema changes.

### Content Gap Analysis
Queries the audience is asking that no existing page answers.

### Schema Additions
Structured data to add for each page type.

---

## Related Skills

- **seo-audit**: Traditional technical and on-page SEO health
- **schema-markup**: Implementing the structured data recommended here
- **content-strategy**: Planning the full content architecture for topic authority
- **programmatic-seo**: When the scale of content needed is large
