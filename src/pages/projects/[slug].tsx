import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allProjects } from '.contentlayer/generated';
import type { Project } from '.contentlayer/generated/types';

import { MDXComponents } from '@/components/MDXComponents';
import { PageDetailShell } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { ProjectMetaInfo } from '@/components/ProjectMetaInfo';
import { ProjectCover } from '@/components/ProjectCover';
import { ProjectBody } from '@/components/ProjectBody';

export default function Project({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.code);

  return (
    <>
      <NextSeo
        title={project.title}
        openGraph={{
          url: `https://www.leandroargentiero.com/projects/${project.slug}`,
          images: [
            {
              url: `https://www.leandroargentiero.com${project.cover}`,
            },
          ],
        }}
      />
      <PageDetailShell>
        <PageHeader title={project.title}>
          <ProjectMetaInfo project={project} />
        </PageHeader>
        <ProjectCover cover={project.cover} />
        <ProjectBody>
          <Component components={MDXComponents} />
        </ProjectBody>
      </PageDetailShell>
    </>
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
