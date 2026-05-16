# Article Creation & Publishing Guide

Complete guide for creating, writing, and publishing articles on **antoniogalgano-uy.com**.

---

## Quick Start (5 Minutes)

### 1. Copy the Template

```bash
cd sites/antoniogalgano-uy.com
cp src/articles/TEMPLATE.md src/articles/2026-05-20-your-article-slug.md
```

### 2. Edit the File

Replace `[REPLACE]` sections in the article file:
- `title` — Article headline
- `slug` — URL path identifier
- `description` — Search engine snippet
- `keywords` — Search terms
- Content — Your article body

### 3. Preview

```bash
pnpm run dev
# Visit http://localhost:8080/news/your-article-slug/
```

### 4. Publish

```bash
pnpm run build      # Generate HTML
# Upload _site/ to server
git commit -m "news: add article title"
```

---

## File Structure

### Where to Create Articles

```
src/articles/
├── TEMPLATE.md                           ← Copy this as starting point
├── 2026-05-16-google-datacenter-uy.md  ← Example article (live)
└── 2026-05-20-your-article.md           ← Your new article
```

### Article Files Generated

```
_site/news/
├── google-datacenter-uy/index.html      ← From markdown file
├── your-article/index.html              ← From your file
└── index.html                           ← News listing page
```

---

## YAML Frontmatter Reference

Every article **must** have this metadata block at the top:

```yaml
---
title: "Article Title (60-70 chars recommended)"
slug: "article-slug-url-identifier"
description: "Short description for search engines (155 chars max)"
keywords: "keyword1, keyword2, keyword3, keyword4, keyword5"
author: "Antonio Galgano Votta"
published: 2026-05-20
read_time_minutes: 8
language: "es"
---
```

### Field Definitions

| Field | Type | Required | Max Length | Notes |
|-------|------|----------|-----------|-------|
| `title` | string | ✓ | 100 chars | Main headline, appears in H1, meta tags, OG |
| `slug` | string | ✓ | 50 chars | URL identifier (lowercase, hyphens only) |
| `description` | string | ✓ | 155 chars | Meta description, social preview, snippet |
| `keywords` | string | ✓ | 200 chars | Comma-separated SEO keywords (5-7 terms) |
| `author` | string | ✓ | 50 chars | Byline, defaults to site author |
| `published` | date | ✓ | — | Publication date (YYYY-MM-DD format) |
| `read_time_minutes` | number | ✓ | — | Estimated reading time (1-20 min) |
| `language` | string | — | 5 chars | Language code (defaults to "es") |

### YAML Formatting Rules

**✅ Correct:**
```yaml
---
title: "Article Title Here"
slug: "article-slug"
---
```

**❌ Incorrect (common mistakes):**
```yaml
title = "Article Title Here"        # Wrong: use colon, not equals
slug: article-slug                  # Wrong: string should be quoted
published: 05/20/2026               # Wrong: use YYYY-MM-DD format
keywords: ["keyword1", "keyword2"]  # Wrong: use comma-separated string
```

---

## Content Writing Guide

### Structure Recommendations

**Heading Hierarchy:**
```
# H1 (Auto-generated from title, don't repeat)

## H2 Main Section
Content for section

### H3 Subsection
More detailed content

## H2 Another Main Section
```

**Paragraph Length:**
- Keep paragraphs to 2-3 sentences max
- Use line breaks between paragraphs for readability
- Aim for 40-50 words per paragraph on average

### Markdown Formatting

**Text Styling:**
```markdown
**bold text** for key terms
*italic text* for emphasis
`code snippets` for technical terms
[link text](https://url.com) for references
```

**Lists:**
```markdown
- Bullet point 1
- Bullet point 2
- Bullet point 3

1. First item
2. Second item
3. Third item
```

**Tables:**
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Block Elements:**
```markdown
> Quoted text or callout
> Multiple lines of quotes

---

Horizontal divider (three dashes)
```

### Content Best Practices

**Keyword Integration:**
- H1 (title): Primary keyword
- First paragraph: Primary keyword + LSI keywords
- H2 sections: Secondary keywords
- Throughout: Natural, contextual usage

**Readability:**
- Use short sentences (< 20 words)
- One idea per paragraph
- Use subheadings every 100-150 words
- Break up long paragraphs with lists

**Authority & Trust:**
- Include specific facts, figures, dates
- Reference official sources (AGESIC, Ley 18.331, etc.)
- Include author expertise implicitly
- Link to credible external sources

**SEO Optimization:**
- Title: 60-70 characters with keyword
- Meta description: 155 characters, compelling
- Keywords: 5-7 terms, mix head + long-tail
- Content: 1,500+ words (comprehensive coverage)
- Internal links: 3-5 to related content
- External links: 2-3 to authoritative sources

---

## Article Template Content Structure

### 1. Introducción (Introduction)
- Hook reader with problem/insight
- Establish relevance
- Preview what they'll learn
- 50-100 words

### 2. Sección Principal (Main Content)
- 2-4 major sections with H2
- Subsections (H3) as needed
- Develop ideas progressively
- Use lists and examples
- 800-1,200 words total

### 3. Lista de Puntos Clave (Key Points)
- Bullet list of 4-6 main takeaways
- Each point: brief explanation + detail
- Actionable or memorable
- 100-150 words

### 4. Ejemplo Práctico (Practical Example)
- Real-world scenario or case study
- Show before/after or step-by-step
- Make concepts concrete
- 150-250 words

### 5. Conclusión (Conclusion)
- Summarize key points (3-5 bullet points)
- Why it matters for Uruguay specifically
- Future implications/trends
- Call-to-action (soft or firm)
- 100-150 words

### 6. Call-to-Action (Optional)
- Book consultation
- Download guide
- Contact for more info
- Share/subscribe to updates

---

## Publishing Workflow

### Step 1: Create Article File

```bash
cd sites/antoniogalgano-uy.com
cp src/articles/TEMPLATE.md src/articles/2026-05-20-your-slug.md
```

### Step 2: Write Content

**Edit with any text editor:**
- VS Code, Sublime, Notepad++, etc.
- Use Markdown mode for syntax highlighting
- Save as UTF-8 (no BOM)

**Checklist while writing:**
- [ ] Title: 60-70 chars, includes primary keyword
- [ ] Slug: lowercase, hyphens, 5-8 words
- [ ] Description: compelling, < 155 chars
- [ ] Keywords: 5-7 terms, relevant to topic
- [ ] Content: organized with H2/H3 headings
- [ ] Links: 3-5 internal, 2-3 external
- [ ] CTA: clear next step at end
- [ ] Read time: realistic estimate

### Step 3: Preview Locally

```bash
pnpm run dev
# Visit http://localhost:8080/news/your-slug/
```

**Check:**
- [ ] Article displays correctly
- [ ] Images/formatting render properly
- [ ] Links work
- [ ] Mobile responsive (test in DevTools)
- [ ] Open Graph preview (inspect page source)

### Step 4: Build for Production

```bash
pnpm run build
# Generates _site/news/your-slug/index.html
```

### Step 5: Verify Generated HTML

```bash
# Check the generated file
cat _site/news/your-slug/index.html | head -50
```

**Look for:**
- [ ] Proper `<title>` tag
- [ ] Meta description
- [ ] Canonical URL
- [ ] hreflang alternates
- [ ] Open Graph tags
- [ ] Schema.org Article JSON-LD
- [ ] Content in <article> tag

### Step 6: Commit to Git

```bash
git add src/articles/2026-05-20-your-slug.md
git commit -m "news: add article title"
git log --oneline -1  # Verify commit
```

### Step 7: Deploy to Server

**Option 1: Via FTP/cPanel**
- Upload contents of `_site/` to `public_html/`

**Option 2: Via SCP (command line)**
```bash
scp -r _site/* user@server:/path/to/public_html/
```

**Option 3: Via Git Hook (automated)**
- Configure server to pull on git push
- Create post-receive hook to run `pnpm build`

### Step 8: Verify Live

1. Visit `https://antoniogalgano-uy.com/news/your-slug/`
2. Check page loads correctly
3. Inspect page source for meta tags
4. Test Open Graph with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
5. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Article Template Reference

The **TEMPLATE.md** includes:

✅ **Example YAML frontmatter** — Copy and modify
✅ **Section structure** — Follow this for consistency
✅ **Markdown examples** — Copy/paste formatting
✅ **Author checklist** — Verify before publishing
✅ **Usage instructions** — How to create from template

**To use:**
```bash
cp src/articles/TEMPLATE.md src/articles/2026-05-20-your-article.md
# Edit [REPLACE] sections
# Replace example content with your own
```

---

## Article Rendering Template

The **article.njk** template automatically:

✅ **Header with metadata**
- Title (H1)
- Author name
- Publication date (Spanish format)
- Reading time

✅ **Semantic HTML**
```html
<article class="article">
  <header class="article-header">
    <h1>{{ title }}</h1>
    <div class="article-meta">...</div>
  </header>
  <div class="article-body">
    {{ content }}  <!-- Rendered markdown -->
  </div>
  <footer class="article-footer">...</footer>
</article>
```

✅ **Automatic SEO signals**
- Canonical URL
- hreflang alternates (es-UY primary, x-default global)
- Open Graph meta tags
- Twitter Card
- Schema.org Article JSON-LD
- Breadcrumb navigation

✅ **Call-to-action section**
- Solicitar Consultoría button
- LinkedIn connect link

✅ **Share buttons**
- LinkedIn share
- X/Twitter share
- Email share

✅ **Related articles**
- Shows 3 latest articles (excludes current)
- Links with publication dates

✅ **Navigation**
- Back to news listing
- (Ready for prev/next article nav)

---

## Common Issues & Fixes

### Article Not Appearing?

**Problem:** Build runs but article doesn't appear at `/news/slug/`

**Check:**
1. File is in `src/articles/` directory
   ```bash
   ls src/articles/  # Should show your file
   ```

2. YAML frontmatter is valid
   - All colons followed by space
   - No tabs (only spaces for indentation)
   - All required fields present

3. Run build with verbose output
   ```bash
   pnpm run build 2>&1 | grep -i error
   ```

### YAML Syntax Error?

**Problem:** Build fails with "YAML parsing error"

**Check:**
```yaml
---
title: "Correct: quotes around string"       ✓
title: Incorrect: no quotes will fail        ✗
published: 2026-05-20                        ✓
published: 05/20/2026                        ✗
keywords: "item1, item2, item3"              ✓
keywords: ["item1", "item2", "item3"]        ✗
---
```

**Fix:** Copy exact format from TEMPLATE.md

### Date Format Wrong?

**Problem:** Date shows as "1 enero 1970" (wrong conversion)

**Check:**
- Format: `YYYY-MM-DD` (e.g., `2026-05-20`)
- NOT: `05/20/2026` or `2026-05-20T00:00:00Z`

### Article Shows But Styling Missing?

**Problem:** Article appears but looks plain (no CSS)

**Check:**
1. CSS file compiled: `ls _site/css/styles.css`
2. HTML references CSS: `<link rel="stylesheet" href="/css/styles.css">`
3. Run build again: `pnpm run build`

### Open Graph Preview Wrong?

**Problem:** Social media preview doesn't show title/description

**Check:**
1. Verify HTML has OG tags
   ```bash
   grep 'og:title' _site/news/your-slug/index.html
   ```

2. Use debugger:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Paste article URL
   - Check parsed values

---

## Article Lifecycle

### Draft → Preview → Published → Archived

**1. Draft (Writing)**
- Create article file
- Edit content
- Preview locally
- Iterate

**2. Preview (Testing)**
- `pnpm run dev` for live preview
- Check all sections render
- Verify links work
- Test on mobile

**3. Published (Live)**
- Run `pnpm run build`
- Deploy to server
- Test live URL
- Monitor engagement

**4. Archived (Optional)**
- Article remains on site
- No longer featured in "latest"
- Searchable and accessible
- Can be referenced in new articles

---

## SEO Checklist

Before publishing, verify:

- [ ] **Title** — 60-70 chars, includes keyword
- [ ] **Slug** — lowercase, hyphens, descriptive
- [ ] **Description** — 155 chars max, compelling
- [ ] **Keywords** — 5-7 terms, relevant, searchable
- [ ] **Content** — 1,500+ words, well-structured
- [ ] **Headings** — H1 (title), H2 (sections), H3 (subsections)
- [ ] **Links** — Internal (3-5), external (2-3)
- [ ] **Images** — Relevant, optimized (optional)
- [ ] **CTA** — Clear call-to-action at end
- [ ] **Schema.org** — Article JSON-LD generated ✓
- [ ] **Open Graph** — OG tags in page source ✓
- [ ] **Hreflang** — es-UY primary, x-default global ✓
- [ ] **Mobile** — Responsive design ✓

---

## Tools & Resources

**Writing:**
- [Grammarly](https://www.grammarly.com/) — Grammar & tone
- [Hemingway Editor](https://hemingwayapp.com/) — Readability
- [Google Docs](https://docs.google.com/) — Collaborative editing

**SEO:**
- [Google Search Console](https://search.google.com/search-console/) — Index status
- [Google Rich Results Test](https://search.google.com/test/rich-results) — Schema validation
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) — OG preview
- [SEMrush](https://www.semrush.com/) — Keyword research

**Markdown:**
- [Markdown Guide](https://www.markdownguide.org/) — Syntax reference
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) — Quick reference

**Imagery:**
- [Unsplash](https://unsplash.com/) — Free stock images
- [Pexels](https://www.pexels.com/) — Free stock images
- [TinyPNG](https://tinypng.com/) — Image optimization

---

## Questions?

Refer to:
- **TEMPLATE.md** — Article template with examples
- **README.md** — General project documentation
- **article.njk** — HTML rendering template
- **This guide** — Complete article creation process

---

**Last updated:** 2026-05-16
