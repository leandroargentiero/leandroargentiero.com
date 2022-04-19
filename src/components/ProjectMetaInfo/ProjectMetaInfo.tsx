import type { Project } from '.contentlayer/generated/types';

import { ProjectMetaInfoItem } from './ProjectMetaInfoItem';

interface IProjectMetaInfo {
  project: Project;
}

export const ProjectMetaInfo = ({ project }: IProjectMetaInfo) => (
  <div className="my-8 flex flex-col gap-y-4 md:my-16 md:flex-row md:gap-x-40">
    {project.company && (
      <ProjectMetaInfoItem label="Company" value={project.company} />
    )}
    {project.role && <ProjectMetaInfoItem label="Role" value={project.role} />}
    {project.year && <ProjectMetaInfoItem label="Year" value={project.year} />}
  </div>
);
