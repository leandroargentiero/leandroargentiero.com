import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    selected: { type: 'boolean', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    company: { type: 'string', required: true },
    role: { type: 'string', required: true },
    stack: { type: 'string', required: false },
    source: { type: 'string', required: false },
    cover: { type: 'string', required: true },
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Project],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
