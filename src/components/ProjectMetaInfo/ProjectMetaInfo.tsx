import type { Project } from '.contentlayer/generated/types';

import { ProjectMetaInfoItem } from './ProjectMetaInfoItem';

interface IProjectMetaInfo {
  project: Project;
}

export const ProjectMetaInfo = ({ project }: IProjectMetaInfo) => (
  <div className="mb-8 mt-1 grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1 md:justify-between md:gap-8">
    {project.role && <ProjectMetaInfoItem label="Role" value={project.role} />}
    {project.company && (
      <ProjectMetaInfoItem label="Company" value={project.company} />
    )}
    {project.year && <ProjectMetaInfoItem label="Year" value={project.year} />}
    {project.readingTime && (
      <ProjectMetaInfoItem
        label="Reading time"
        value={project.readingTime.text}
      />
    )}
  </div>
);
