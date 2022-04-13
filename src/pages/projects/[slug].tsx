import { useMDXComponent } from 'next-contentlayer/hooks';
import { allProjects } from '.contentlayer/generated';
import type { Project } from '.contentlayer/generated/types';

import { MDXComponents } from '@/components/MDXComponents';
import { Container, PageDetailShell, Section } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import Image from 'next/image';

const ProjectInfo = ({ label, data }: { label: string; data: [] }) => (
  <div>
    <h3 className="mb-2 font-display text-gray-900">{label}</h3>
    {!data ? '-' : data.map((d: string) => <p key={d}>{d}</p>)}
    <p></p>
  </div>
);

export default function Project({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.code);

  console.log(project);

  return (
    <PageDetailShell>
      <PageHeader title={project.title}>
        <p>{project.description}</p>
        <div className="my-10 flex flex-row gap-24">
          <ProjectInfo label="Company" data={project.company} />
          <ProjectInfo label="Role" data={project.role} />
          <ProjectInfo label="Stack" data={project.stack} />
          <ProjectInfo label="Source" data={project.source} />
        </div>
      </PageHeader>
      <Container>
        <figure className="z-0 block overflow-hidden rounded-lg">
          <Image
            alt="project cover"
            src={project.cover}
            blurDataURL={project.cover}
            layout="responsive"
            placeholder="blur"
            width={700}
            height={475}
          />
        </figure>
      </Container>
      <Section>
        <article className="prose mx-auto prose-headings:font-display  prose-headings:text-gray-900 prose-p:font-body prose-p:text-gray-500 lg:prose-lg">
          <Component components={MDXComponents} />
        </article>
      </Section>
    </PageDetailShell>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);
  return { props: { project } };
}
