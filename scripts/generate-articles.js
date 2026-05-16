import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesDir = path.join(__dirname, '../docs/articles');
const outputDir = path.join(__dirname, '../public_html/news');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  const slug = frontmatter.slug;
  const articleDir = path.join(outputDir, slug);

  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }

  const htmlContent = marked(content);
  const html = `<!DOCTYPE html>
<html lang="${frontmatter.language || 'es'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${frontmatter.title}</title>
  <meta name="description" content="${frontmatter.description}">
  <link rel="canonical" href="https://antoniogalgano-uy.com/articulos/${slug}/">
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <article class="article">
    <header class="article-header">
      <h1>${frontmatter.title}</h1>
      <div class="article-meta">
        <span>Por ${frontmatter.author}</span>
        <span>${frontmatter.published}</span>
        <span>${frontmatter.read_time_minutes} min lectura</span>
      </div>
    </header>
    <div class="article-body">
      ${htmlContent}
    </div>
  </article>
</body>
</html>`;

  fs.writeFileSync(path.join(articleDir, 'index.html'), html);
  console.log(`Generated: /news/${slug}/`);
});

console.log('✓ Article generation complete');
