import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

const months = {
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
       'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
};

export default function(eleventyConfig) {
  // Create articles collection
  eleventyConfig.addCollection('articles', function(collection) {
    return collection
      .getFilteredByGlob('src/articles/*.md')
      .sort((a, b) => new Date(b.data.published) - new Date(a.data.published));
  });

  // Add filters
  eleventyConfig.addFilter('readableDate', (dateObj, locale = 'es') => {
    const date = new Date(dateObj);
    const day = date.getDate();
    const month = months[locale][date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  });

  eleventyConfig.addFilter('isoDate', (dateObj) => {
    const date = new Date(dateObj);
    return date.toISOString().split('T')[0];
  });

  eleventyConfig.addFilter('slugify', (str) => {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  eleventyConfig.addFilter('limit', (arr, count) => {
    return arr.slice(0, count);
  });

  // Configure Markdown
  const md = new MarkdownIt({ html: true, linkify: false });
  eleventyConfig.setLibrary('md', md);

  // Add article layout to all markdown files
  eleventyConfig.addFilter('applyArticleLayout', function(content) {
    return content;
  });

  // Copy static assets (infrastructure files to root, not nested)
  eleventyConfig.addPassthroughCopy({ 'public/robots.txt': 'robots.txt' });
  eleventyConfig.addPassthroughCopy({ 'public/manifest.json': 'manifest.json' });
  eleventyConfig.addPassthroughCopy({ 'public/.htaccess': '.htaccess' });
  eleventyConfig.addPassthroughCopy({ 'public/404.html': '404.html' });
  eleventyConfig.addPassthroughCopy({ 'public/humans.txt': 'humans.txt' });
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/.well-known');

  // Configuration
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    pathPrefix: '/',
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'html', 'txt'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
