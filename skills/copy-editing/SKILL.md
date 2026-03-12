---
name: copy-editing
description: "When the user wants to edit, review, or improve existing marketing copy. Also use when the user says 'edit this,' 'make this better,' 'tighten this up,' 'this sounds off,' 'clean up this copy,' or 'review my draft.' This skill refines existing copy through focused passes without replacing the core message. For writing copy from scratch, see copywriting."
metadata:
  version: 1.0.0
---

# Marketing Copy Editing

You improve existing marketing copy through focused, sequential passes. Your goal is to make the copy clearer, more specific, and more compelling — while preserving the writer's voice and core message.

## Starting Point

Load `.agents/product-marketing-context.md` for voice, tone, and audience context before editing.

Ask the user to share the copy they want edited. Then ask:
1. What is this copy for? (page type, email, ad, etc.)
2. Is there anything that must stay unchanged?
3. What's the primary goal of this copy — what should the reader do after reading?

---

## Editing Passes

Run the copy through each pass sequentially. Flag or fix issues found at each stage.

### Pass 1: Clarity

Does every sentence say one thing and say it clearly?

**Fix:**
- Sentences that try to make two or three points at once — split them
- Abstract nouns that replace concrete verbs ("enable optimization of" → "optimize")
- Passive voice that buries the subject ("Results are delivered" → "You get results")
- Jargon that the target reader wouldn't naturally use

**Test**: Could someone read this aloud without stumbling? If not, rewrite it.

### Pass 2: Specificity

Is there a vague claim anywhere that could be made concrete?

**Replace vague with specific:**
- "saves you time" → "saves 3 hours a week"
- "improves results" → "increased click rates by 34%"
- "many customers" → "over 8,000 teams"
- "easy to use" → "takes 10 minutes to set up, no code required"

**Test**: If you removed every adjective, would the claim still be meaningful?

### Pass 3: Flow and Momentum

Does the copy pull the reader forward — or does it stall?

**Check:**
- Opening line: Does it earn the next line? (Drop any opener that starts with "At [Company]," "We believe," or "In today's world")
- Paragraph length: No paragraph over 4 lines in web copy
- Sentence length variation: Mix short punchy sentences with longer explanatory ones
- Transitions: Does each section flow naturally into the next?

### Pass 4: Voice Consistency

Does the copy sound like one person wrote it?

**Check against the brand voice in product-marketing-context:**
- Formal vs. casual tone maintained throughout
- Second-person "you" used consistently (or not used — either is fine, but pick one)
- Consistent level of technical language

### Pass 5: CTA and Conversion

Does the copy end with the right ask?

**Check:**
- Is there a clear next step?
- Is the CTA copy describing an outcome or just an action?
- Is there anything between the reader and taking action that could be removed?

---

## Output Format

Return the edited copy in full, with:
- **Edit summary**: A brief note on the main changes made and why
- **Preserved elements**: Note what was intentionally left as-is
- **Flagged items**: Anything that needs the user's input to resolve (missing data points, unclear claims, etc.)

If the copy needed significant changes, offer to walk through the reasoning edit-by-edit.

---

## Related Skills

- **copywriting**: When the copy is so weak that editing is less efficient than a rewrite
- **page-cro**: When conversion is the broader goal and copy is one element
- **cold-email**: For editing cold outreach copy specifically
