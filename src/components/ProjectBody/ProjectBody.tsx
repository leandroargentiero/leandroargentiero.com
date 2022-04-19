import { Section } from '../Layout';

export const ProjectBody: React.FC = ({ children }) => {
  return (
    <Section>
      <article className="prose mx-auto px-4 prose-headings:font-display prose-headings:text-gray-900 prose-p:font-body prose-p:text-gray-500 lg:prose-lg">
        {children}
      </article>
    </Section>
  );
};