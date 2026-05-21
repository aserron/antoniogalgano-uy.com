# antoniogalgano-uy.com

**Consultor TI & Ciberseguridad en Uruguay**

A static website for Antonio Galgano Votta, a technical consultant specializing in IT infrastructure and cybersecurity
in Uruguay. Built with **Eleventy (11ty)** static site generator.

---

## Project Structure

```
antoniogalgano-uy.com/
├── src/
│   ├── _data/              # Global data files (site.json, nav.json)
│   ├── _includes/          # Layout templates (base.njk, article.njk)
│   ├── articles/           # Markdown articles with YAML frontmatter
│   ├── pages/              # Page templates (index.njk)
│   ├── images/             # Static images (favicons)
│   ├── robots.txt          # Search engine directives
│   └── input.css           # Tailwind CSS source
├── public/                 # Static assets (copied as-is)
├── _site/                  # Generated output (build result)
├── .eleventy.js            # 11ty configuration
├── .eleventyignore         # Files to exclude from build
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## What Is This?

This is a **static site generator** setup using:

1. **Eleventy (11ty)** — Core static site generator that converts Markdown + templates into HTML
2. **Nunjucks** — Templating language for layouts and reusable components
3. **Tailwind CSS** — Utility-first CSS framework for styling
4. **gray-matter** — YAML frontmatter parser for article metadata
5. **markdown-it** — Markdown to HTML converter

### How It Works

**Articles → Markdown files** (with YAML frontmatter)

- Location: `src/articles/*.md`
- Format: YAML frontmatter + Markdown content
- Example:
  ```yaml
  ---
  title: "Google Datacenter in Uruguay"
  slug: "google-datacenter-uy"
  description: "..."
  keywords: "..."
  author: "Antonio Galgano Votta"
  published: 2026-05-16
  read_time_minutes: 5
  ---
  
  ## Content heading
  
  Article content in Markdown...
  ```

**Templates** (Nunjucks `.njk` files)

- `src/_includes/base.njk` — Base layout with HEAD, HTML structure
- `src/_includes/article.njk` — Article-specific layout with SEO + Schema.org
- `src/pages/index.njk` — Home page layout

**Build Process**

1. 11ty reads all Markdown files in `src/articles/`
2. Parses YAML frontmatter to extract metadata
3. Renders Markdown → HTML using the `article.njk` layout
4. Outputs to `_site/news/{slug}/index.html`
5. Compiles Tailwind CSS to `_site/css/styles.css`
6. Copies static assets (images, manifest, robots.txt)

**Result**

- Full HTML pages with SEO signals
- Open Graph meta tags
- Twitter Card data
- Schema.org structured data (Article + Person)
- Canonical URLs + hreflang alternates
- Proper 404 handling

---

## How to Use

### Install Dependencies

```bash
cd sites/antoniogalgano-uy.com
pnpm install
```

### Available Scripts

| Command | Purpose |
|---------|---------|
| `pnpm run dev` | Start dev server with watch (auto-rebuild on file changes) |
| `pnpm run build` | Full build: 11ty + CSS + deploy to `public_html/` |
| `pnpm run build:11ty` | Run 11ty only (articles → `_site/`) |
| `pnpm run build:css` | Compile CSS only |
| `pnpm run build:deploy` | Copy `_site/` → `public_html/` only |
| `pnpm run preview` | Build + serve locally for preview |
| `pnpm run watch` | Watch mode: auto-rebuild on all file changes |

### Development

Start the development server with watch mode:

```bash
npm run dev
```

This:

- Starts 11ty in watch mode (auto-rebuild on file changes)
- Compiles Tailwind CSS to `_site/css/styles.css`
- Serves the site at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

This runs the complete build pipeline:

1. Compiles 11ty: `src/articles/*.md` + templates → `_site/`
2. Compiles Tailwind CSS with minification → `_site/css/styles.css`
3. Copies `_site/` → `public_html/` (automatic deploy step)
4. Result: `public_html/` is ready for server upload

### Preview Built Site

```bash
npm run preview
```

Builds and serves the site locally for preview before deployment.

---

## Creating Articles

### Add a New Article

1. Create a new `.md` file in `src/articles/`

```bash
touch src/articles/2026-05-20-article-title.md
```

2. Add YAML frontmatter + Markdown content:

```yaml
---
title: "Article Title"
slug: "article-slug"
description: "Short description for meta tag"
keywords: "keyword1, keyword2, keyword3"
author: "Antonio Galgano Votta"
published: 2026-05-20
read_time_minutes: 7
language: es
---

## Main Heading

Article content in Markdown format.

- Bullet points
- Work well
- In articles

### Subheading

More content here.
```

3. Run `npm run dev` or `npm run build`
4. Article is generated at `_site/news/article-slug/index.html`
5. **Sitemap automatically updated** — `collections.articles` → `/sitemap.xml`

### Complete Article Workflow

When you create a new article:

```bash
# 1. Create article file
cp src/articles/TEMPLATE.md src/articles/2026-05-20-my-article.md

# 2. Edit: add frontmatter (title, slug, description, keywords, published date)
# 3. Write: add Markdown content

# 4. Build (or preview)
pnpm run build
# This:
# - Parses article YAML → adds to collections.articles
# - Renders article via article.njk → /news/{slug}/index.html
# - Re-renders sitemap.njk → /sitemap.xml (includes new article)
# - Compiles CSS
# - Copies everything to public_html/

# 5. Deploy
scp -r public_html/* user@server:/path/to/public_html/
```

**What gets updated automatically:**

- ✅ Article page at `/news/{slug}/`
- ✅ News listing at `/news/` (includes new article in grid)
- ✅ Sitemap at `/sitemap.xml` (includes new article with lastmod date)
- ✅ All SEO signals (canonical, hreflang, OG, Twitter Card, Schema.org)

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✓ | Article title (used in H1, meta tags) |
| `slug` | string | ✓ | URL-friendly identifier (e.g., "google-datacenter-uy") |
| `description` | string | ✓ | Meta description (155 chars max) |
| `keywords` | string | ✓ | Comma-separated keywords for meta tag |
| `author` | string | ✓ | Author name (defaults to site author) |
| `published` | date | ✓ | Publication date (YYYY-MM-DD format) |
| `read_time_minutes` | number | ✓ | Estimated reading time in minutes |
| `language` | string | - | Language code (defaults to "es") |

---

## Customization

### Edit Site Metadata

Edit `src/_data/site.json` to change:

- `title` — Site title
- `description` — Site description
- `url` — Site domain
- `networks` — Footer network links

### Edit Navigation

Navigation links are defined in `src/_data/site.json`:

```json
"nav": [
  { "label": "Sobre mí", "anchor": "#sobre" },
  { "label": "Servicios", "anchor": "#servicios" }
]
```

### Modify Styles

1. Edit `src/input.css` (add custom CSS or Tailwind directives)
2. Run `npm run build:css` to compile
3. Output goes to `_site/css/styles.css`

### Update Templates

- **Base layout**: `src/_includes/base.njk` — HTML structure, HEAD, footer
- **Article layout**: `src/_includes/article.njk` — Article-specific wrapper
- **Home page**: `src/pages/index.njk` — Full home page (if using Nunjucks)

---

## SEO & Technical Details

### Automatic SEO Signals

Each article automatically includes:

- ✓ Canonical URL (`<link rel="canonical">`)
- ✓ Hreflang alternates (`<link rel="alternate" hreflang>`)
- ✓ Open Graph meta tags (`og:title`, `og:description`, `og:image`)
- ✓ Twitter Card (`twitter:card`, `twitter:site`, `twitter:creator`)
- ✓ Schema.org Article type (JSON-LD)
- ✓ Meta robots (`index, follow`)

### Sitemap (Auto-Generated)

The sitemap is **dynamically generated** from your article collection:

**How it works:**

1. Create a new article: `src/articles/YYYY-MM-DD-slug.md`
2. Run `pnpm run build`
3. 11ty automatically:
    - Adds article to `collections.articles`
    - Re-renders `src/sitemap.njk` → `/sitemap.xml`
    - Includes all articles + news index + homepage

**Files:**

- `src/sitemap.njk` — Nunjucks template that generates `/sitemap.xml`
- `public/robots.txt` — References sitemap location
- `public_html/sitemap.xml` — Auto-generated XML (ready for Google)

**Sitemap includes:**

- Homepage (priority 1.0, monthly)
- News listing page (priority 0.9, weekly)
- All articles (priority 0.8, never)
- Each URL has hreflang alternates (es-UY primary, x-default → antoniogalgano.com)
- Each article's `lastmod` automatically set from `published` date

### 404 Handling

The home server serves `_site/404.html` for missing pages. Configure in `.htaccess`:

```apache
ErrorDocument 404 /404.html
```

---

## Deployment

### Build and Deploy

The `npm run build` command automatically prepares `public_html/` for deployment:

```bash
# 1. Build everything (11ty + CSS + copy to public_html)
npm run build

# 2. Upload public_html to server
scp -r public_html/* user@server:/path/to/public_html/

# Or via cPanel: Upload public_html/* contents to public_html/
```

### What Gets Deployed

When you run `npm run build`, these files are prepared in `public_html/`:

```
public_html/
├── news/
│   ├── index.html              (news listing page)
│   ├── google-datacenter-uy/   (articles)
│   └── google-datacenter-ecosistema-tech/
├── css/
│   └── styles.css              (compiled Tailwind, minified)
├── images/                      (favicons)
├── robots.txt
├── sitemap.xml
├── manifest.json
├── .htaccess
└── [other static files]
```

**Note:** Only `public_html/` needs to be uploaded. The `_site/` folder is a build intermediate and not needed on the
server.

---

## Troubleshooting

### Articles Not Generating?

1. Check file is in `src/articles/*.md`
2. Verify YAML frontmatter is valid (check indentation)
3. Run `npm run dev` to see build errors in console
4. Check that `slug` field is present and URL-friendly

### CSS Not Compiling?

```bash
npm run build:css
```

Check `src/input.css` for syntax errors.

### Port Already in Use?

11ty defaults to port 8080. Change it:

```bash
npx eleventy --serve --port 3000
```

---

## Scripts Reference

| Command | Purpose |
|---------|---------|
| `npm run build` | Full build: 11ty + Tailwind CSS |
| `npm run build:11ty` | Generate HTML from Markdown + templates |
| `npm run build:css` | Compile Tailwind CSS |
| `npm run dev` | Start development server with auto-reload |
| `npm run watch:css` | Watch and compile CSS only |
| `npm run preview` | Build + serve locally |

---

## Tools & Technologies

- **[Eleventy (11ty)](https://www.11ty.dev/)** v3.0 — Static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — Templating engine
- **[Tailwind CSS](https://tailwindcss.com/)** v3.4 — CSS framework
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** — YAML frontmatter parser
- **[markdown-it](https://github.com/markdown-it/markdown-it)** — Markdown to HTML
- **[pnpm](https://pnpm.io/)** — Package manager

---

## License

All Rights Reserved — Antonio Galgano Votta © 2026
