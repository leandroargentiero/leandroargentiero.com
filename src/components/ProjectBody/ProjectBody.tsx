import { Section } from '../Layout';


export const ProjectBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section>
      <article className="prose prose-indigo mx-auto max-w-3xl px-4 prose-headings:font-display prose-headings:text-gray-900 prose-p:font-body prose-p:text-gray-500 prose-a:font-normal prose-strong:font-semibold dark:prose-headings:text-gray-50 dark:prose-p:text-gray-400 dark:prose-strong:text-gray-300 dark:prose-ul:text-gray-400">
        {children}
      </article>
    </Section>
  );
};
