---
name: brand-voice
description: "When the user wants to define their brand voice, create tone guidelines, build a writing style guide, audit existing content for voice consistency, or asks about brand personality, tone of voice, writing standards, or content guidelines. Reads .agents/product-marketing-context.md for product positioning and audience."
metadata:
  version: 1.0.0
---

# Brand Voice

You help teams define a distinctive brand voice, document tone guidelines, and apply consistent writing standards across all channels and content types.

## Before You Start

Read `.agents/product-marketing-context.md` for product positioning, target audience, and existing brand notes. Brand voice should reinforce positioning and resonate with the ICP.

## What You'll Build

A brand voice document that includes:
- Voice personality: 3–5 defining traits with behavioral definitions
- Tone spectrum: how voice shifts by context and channel
- Writing style standards: grammar, punctuation, formatting preferences
- Vocabulary guide: words to use, words to avoid
- Channel-specific guidance: website, email, social, ads, support
- Before/after examples for each major content type

## Step-by-Step Process

### 1. Discover the Voice

Ask the user to describe their brand with these questions:

1. "If your brand were a person, how would you describe them in 3 words?"
2. "Name a brand (in any category) whose voice you admire. What do you like about it?"
3. "Name a voice style you'd never want. What makes it wrong for you?"
4. "What do your best customers say about working with you? What words do they use?"
5. "What's the one feeling you want every piece of content to leave the reader with?"

Extract recurring themes and tensions. The best brand voices are built around productive tensions:
- Bold but not arrogant
- Expert but not condescending
- Casual but not careless

### 2. Define Voice Traits

Select 3–5 personality traits. For each trait:
- Define what it means in practice
- Show what it sounds like (example sentence)
- Show what it doesn't mean (common misinterpretation)

**Trait card format:**

```
## [Trait Name]

**What it means**: [Behavioral definition — how this trait shows up in writing]

**Sounds like**: "[Example sentence in this voice]"

**Doesn't mean**: [Common mistake writers make when trying to apply this trait]

**Contrast**:
✓ Do: [Short example]
✗ Don't: [Short counterexample]
```

### 3. Map the Tone Spectrum

Voice stays consistent; tone shifts with context. Map tone across scenarios:

| Scenario | Tone | Example Phrase |
|----------|------|----------------|
| Homepage hero | Confident, inspiring | |
| Onboarding email | Warm, practical | |
| Feature announcement | Excited, clear | |
| Error message | Calm, helpful | |
| Pricing page | Honest, direct | |
| Support reply | Patient, human | |
| Social media | Conversational, playful | |
| Sales email | Assertive, relevant | |

### 4. Set Writing Style Standards

Document preferences on:

**Grammar and mechanics**:
- Oxford comma: use / don't use
- Em dashes vs. parentheses: preference
- Sentence length: target range (e.g., avg < 20 words)
- Passive voice: avoid / acceptable when
- First vs. second person: "we help you" vs. "you get"

**Formatting**:
- Header capitalization: Title Case vs. Sentence case
- Bold usage: key terms only / sparingly / liberally
- Bullet points: max depth, punctuation style
- Numbers: spell out under 10 / always use digits

**Punctuation**:
- Exclamation marks: max per 1000 words
- Ellipses: use case
- Question marks: when to use in headlines

### 5. Build the Vocabulary Guide

**Words and phrases to embrace**:
- Terms that reinforce brand positioning
- Action words that reflect the brand's energy
- Category language the ICP already uses

**Words and phrases to avoid**:
- Generic filler (leverage, synergy, disruptive, game-changing)
- Jargon that confuses the ICP
- Competitor's brand language
- Overly formal or stuffy alternatives

Format as a two-column table:

| Use This | Not This |
|----------|----------|
| Build | Leverage |
| Fast | Rapid-velocity |
| Help | Facilitate |

### 6. Channel-Specific Guidance

For each primary channel, note any voice adaptations:

**Website copy**: most polished expression of brand voice; avoid idioms and colloquialisms
**Email**: slightly more conversational; can use contractions and casual openers
**Social media**: most informal; can use humor, emojis (if appropriate), and cultural references
**Paid ads**: economical; every word earns its place; no room for personality indulgence
**In-product microcopy**: ultra-brief; prioritize clarity over personality, but stay on-brand
**Support and documentation**: maximally patient, zero condescension, practical above all

### 7. Before/After Examples

For each major content type, include a before (off-brand) and after (on-brand) example:
- Homepage headline
- Email subject line
- Feature announcement
- Error message
- Social post
- CTA button text

## Output

Save the complete brand voice document to `.agents/brand-voice.md`. This file should be referenced by the `copywriting`, `cold-email`, `email-sequence`, and `social-content` skills to maintain consistency.
