import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const pages = await globby([
  'src/pages/*.tsx',
  'src/data/**/*.mdx',
  '!src/pages/_*.tsx',
]);

const urlTags = pages
  .map((file) =>
    file
      .replace('src', '')
      .replace('/pages', '')
      .replace('/data', '')
      .replace('.tsx', '')
      .replace('.mdx', '')
  )
  .map((path) => (path === '/index' ? '/' : path))
  .map(
    (path) => `
      <url>
          <loc>www.leandroargentiero.com${path}</loc>
      </url>
    `
  )
  .join('');

const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlTags}
  </urlset>
`;

const prettierConfig = await prettier.resolveConfig('./prettierrc');
const formatted = prettier.format(sitemap, {
  ...prettierConfig,
  parser: 'html',
});

writeFileSync('public/sitemap.xml', formatted);
