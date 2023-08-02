import Image from 'next/image';
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
import Link from 'next/link';
import NextProject from '@/components/NextProject';

type ProjectPageProps = {
  project: Project,
  prevProject: Project,
  nextProject: Project,
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const parsedProjects: ProjectPageProps[] = allProjects.map((project, idx) => {
    const prevProject = idx === 0 ? allProjects[allProjects.length - 1] : allProjects[idx - 1];
    const nextProject = idx === allProjects.length - 1 ? allProjects[0] : allProjects[idx + 1];

    return { project, prevProject, nextProject };
  })
  const { project, nextProject, prevProject } = parsedProjects.find((prj) => prj.project.slug === params.slug) as ProjectPageProps;

  return { props: { project, nextProject, prevProject } };
}


export default function Project({ project, prevProject, nextProject }: ProjectPageProps) {
  const MdxContent = useMDXComponent(project?.body?.code);

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
          <MdxContent components={MDXComponents} />
          <NextProject slug={nextProject.slug} company={nextProject.company} cover={nextProject.cover} title={nextProject.title} />
        </ProjectBody>
      </PageDetailShell>
    </>
  );
}