# antoniogalgano-uy.com — Content Framework

## Overview

Articles stored in `docs/articles/` as markdown files. Each file is source of truth for content, metadata, and SEO
signals. Static generator (Hugo/11ty/Jekyll) ingests these to produce HTML pages.

---

## File Naming Convention

```
docs/articles/{DATE}-{INDEX}-{SLUG}.md

Example:
2026-05-16-01-google-datacenter-uy.md
2026-05-16-02-ley-18331-compliance-guide.md
2026-06-01-01-ciberseguridad-pymes-uy.md
```

- `{DATE}`: Publication date (YYYY-MM-DD)
- `{INDEX}`: 2-digit zero-padded sequence (01, 02, 03...) for same-day articles
- `{SLUG}`: URL-safe slug, lowercase, hyphens only

---

## Document Structure

### Section 1: Metadata (YAML Frontmatter)

```yaml
---
# CORE METADATA
title: "Google Anuncia Nuevo Data Center en Uruguay — Implicaciones para la Infraestructura Digital Local"
slug: "google-datacenter-uy"
excerpt: "Análisis de la inversión de Google en infraestructura de datos en Uruguay y su impacto en la adopción de cloud computing, soberanía de datos y oportunidades para empresas locales."
description: "Análisis del nuevo Google Data Center en Uruguay. Impacto en infraestructura digital, cloud computing, soberanía de datos y oportunidades para empresas locales."
author: "Antonio Galgano Votta"
published: "2026-05-16"
updated: "2026-05-16"
language: "es"
locale: "es_UY"

# CONTENT STRUCTURE
word_count: 2400
read_time_minutes: 8
featured_image: "images/articles/2026-05-16-01-google-datacenter-uy.jpg"
featured_image_alt: "Google Data Center Infrastructure"

# SEO & TARGETING
keywords:
  - Google Data Center Uruguay
  - Infraestructura Digital UY
  - Cloud Computing Uruguay
  - Soberanía de Datos
  - AGESIC Cumplimiento

category: "Infraestructura Digital"
tags:
  - "Google Cloud"
  - "Infraestructura"
  - "Tendencias Tecnológicas"
  - "Uruguay"
  - "Cumplimiento AGESIC"

# SCHEMA.ORG SIGNALS
article_type: "BlogPosting"  # or NewsArticle
main_entity: "Google Data Center Uruguay"
entity_type: "TechNews"  # or IndustryAnalysis, GuidanceArticle, etc.

# HREFLANG & TRANSLATIONS
alternate_versions:
  es: "/articulos/google-datacenter-uy/"
  en: null  # Future: "/en/articles/google-datacenter/" when EN version exists

# INTERNAL LINKING
related_articles:
  - "2026-05-10-01-agesic-compliance-checklist"
  - "2026-04-30-01-cloud-security-uy"

internal_links:
  - url: "/sobre"
    text: "Sobre mi experiencia en infraestructura"
  - url: "https://antoniogalganovotta.com"
    text: "Especialista en infraestructura NS"

# CTA SECTION
cta_type: "consultation"  # or newsletter, download, etc.
cta_text: "Consultoría Técnica Especializada"
cta_url: "#contacto"

# SOCIAL & OG OVERRIDES
og_image: "images/articles/2026-05-16-01-google-datacenter-uy-og.jpg"
og_type: "article"
twitter_card: "summary_large_image"

# TECHNICAL
canonical: "https://antoniogalgano-uy.com/articulos/google-datacenter-uy/"
robots: "index, follow"
---
```

### Section 2: Content (Markdown Body)

```markdown
## Introducción

[Article content in Markdown...]

### Subsection with H3

[More content...]

## Key Takeaways

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Call to Action

[Internal CTA section generated from frontmatter `cta_type` + `cta_text`]

---

## Metadata Reference

[Auto-generated metadata block with publication date, author, read time, tags]
```

---

## Suggested Framework Features

### 1. **Frontmatter Sections**

**CORE METADATA** — Always required

- `title`, `slug`, `excerpt`, `description` — SEO essentials
- `author`, `published`, `updated`, `language`, `locale` — Authority + language targeting

**CONTENT STRUCTURE** — For static generation + UX

- `word_count`, `read_time_minutes` — User expectations
- `featured_image`, `featured_image_alt` — OG + article preview

**SEO & TARGETING** — For indexation + categorization

- `keywords` (array) — primary keyword targets
- `category`, `tags` (array) — taxonomy for navigation + internal linking

**SCHEMA.ORG SIGNALS** — For rich snippets + trust

- `article_type` (BlogPosting | NewsArticle | AnalysisArticle) — controls JSON-LD structure
- `main_entity`, `entity_type` — disambiguate topic (e.g., "Google Data Center Uruguay" → TechNews)

**HREFLANG & TRANSLATIONS** — For multi-language future

- `language` + `locale` — current version identifier
- `alternate_versions` — mapping to ES/EN versions (null = not yet created)

**INTERNAL LINKING** — For site architecture + SEO

- `related_articles` (array of slugs) — recommend other posts
- `internal_links` (array of {url, text}) — strategic anchors within post body

**CTA SECTION** — For engagement + conversion

- `cta_type` (consultation | newsletter | download | booking)
- `cta_text`, `cta_url` — renders below article content

**SOCIAL & OG OVERRIDES** — For platform-specific previews

- `og_image`, `twitter_card` — article-specific preview images

**TECHNICAL** — For rendering

- `canonical`, `robots` — indexation control
- `og_type` — always "article" for blog posts

### 2. **Automatic Rendering Features**

Static generator should auto-produce:

```html
<!-- Article Header -->
<header class="article-header">
  <h1>{title}</h1>
  <meta-block>
    <byline>Por {author}</byline>
    <published>{published}</published>
    <read-time>{read_time_minutes} min lectura</read-time>
    <tags>{tags}</tags>
  </meta-block>
  <img src="{featured_image}" alt="{featured_image_alt}">
</header>

<!-- Article Body (from Markdown) -->
<article class="article-body">
  {content}
</article>

<!-- Related Articles (from related_articles slugs) -->
<section class="related-articles">
  <h3>Artículos Relacionados</h3>
  {auto-fetch related articles, render cards}
</section>

<!-- CTA Section (from cta_type) -->
<section class="cta-section">
  <h3>{cta_text}</h3>
  <a href="{cta_url}">{cta_text} →</a>
</section>

<!-- Metadata Footer -->
<footer class="article-metadata">
  Última actualización: {updated}
  Categoría: {category}
</footer>
```

### 3. **Archive & Listing Pages**

Auto-generate:

- `/articulos/` — All articles, sorted by date (newest first)
- `/articulos/categoria/{category}/` — Filtered by category
- `/articulos/tag/{tag}/` — Filtered by tag
- `/articulos/archivo/{year}/{month}/` — Date-based archive

Each listing auto-generates:

- Meta: word count, read time, excerpt
- Pagination: 10 per page
- Filters: category / tag sidebars

### 4. **Search & Discoverability**

Metadata enables:

- **Full-text search** on `title` + `excerpt` + `keywords`
- **Category filtering** on dashboard
- **Tag clouds** on archive page
- **Related articles** based on shared tags/categories

### 5. **SEO Automation**

Generator should:

- Create `<script type="application/ld+json">` BlogPosting schema from frontmatter
- Inject hreflang alternates into `<head>` (using `alternate_versions`)
- Generate OG meta tags from `og_image`, `title`, `description`
- Set canonical from `canonical` field
- Apply robots rules from `robots` field

### 6. **Future: Multi-Language Support**

When EN version is needed:

1. Create sibling file: `2026-05-16-01-google-datacenter-uy.en.md`
2. Update both frontmatters with symmetric hreflang:
   ```yaml
   alternate_versions:
     es: "/articulos/google-datacenter-uy/"
     en: "/en/articles/google-datacenter/"
   ```
3. Generator creates `/en/articles/google-datacenter/` page automatically
4. Both pages inject each other's hreflang in `<head>`

---

## Example Article File

**File:** `docs/articles/2026-05-16-01-google-datacenter-uy.md`

```markdown
---
title: "Google Anuncia Nuevo Data Center en Uruguay — Implicaciones para la Infraestructura Digital Local"
slug: "google-datacenter-uy"
excerpt: "Análisis del impacto del nuevo Google Data Center en Uruguay en infraestructura digital, cloud computing y soberanía de datos."
description: "Google invierte en infraestructura de datos en Uruguay. Análisis de impacto en cloud computing, soberanía de datos y oportunidades locales."
author: "Antonio Galgano Votta"
published: "2026-05-16"
language: "es"
locale: "es_UY"
word_count: 2400
read_time_minutes: 8
category: "Infraestructura Digital"
tags: ["Google Cloud", "Infraestructura", "Tendencias", "Uruguay"]
article_type: "NewsArticle"
cta_type: "consultation"
cta_text: "Consultoría Técnica Especializada"
cta_url: "#contacto"
canonical: "https://antoniogalgano-uy.com/articulos/google-datacenter-uy/"
---

## Introducción

Google ha anunciado la construcción de un nuevo data center en Uruguay, marcando un hito importante en la transformación digital del país...

## Impacto en la Infraestructura Local

### Soberanía de Datos
Con la inversión de Google, las empresas uruguayas ahora tienen opciones de almacenamiento más cercanas...

### Velocidad y Latencia
La reducción de latencia tiene implicaciones directas...

## Oportunidades para Empresas Locales

Las PyMEs y medianas empresas uruguayas pueden beneficiarse...

## Consideraciones de Cumplimiento

Bajo la Ley 18.331 y directrices AGESIC...

## Conclusión

La inversión de Google representa un cambio significativo en el panorama tecnológico uruguayo.
```

---

## Content Planning Workflow

1. **Concepto** → Decide topic, target keywords
2. **Create markdown file** in `docs/articles/{DATE}-{INDEX}-{SLUG}.md`
3. **Write frontmatter** — metadata, SEO, schema, CTA
4. **Write content** — markdown body (H2+ headings, lists, emphasis)
5. **Static generator processes** → HTML + OG images + schema + hreflang
6. **Manual review** → Rendered HTML in browser
7. **Publish** → Commit to git, deploy

---

## Tools & Stack (Future)

Recommended static generator:

- **Hugo** — Fast, template-driven, excellent for blogs + multi-language
- **11ty (Eleventy)** — JavaScript-based, flexible, great for custom schemas
- **Jekyll** — Ruby-based, GitHub Pages integration, simpler learning curve

Markdown extensions:

- **YAML frontmatter** — (already standard)
- **Markdown table syntax** — for structured data
- **Footnotes** — for citations
- **Syntax highlighting** — for code snippets (if any)

---

## Questions for Implementation

- Should we start with Hugo or 11ty for rendering?
- What design template for article pages (match antoniogalgano.es style)?
- Archive page layout preferences?
- Should article comments/discussion be supported (Disqus, custom)?
- RSS feed auto-generation?
