interface ProjectMetaInfoItem {
  label: 'Company' | 'Role' | 'Year';
  value: any;
}

export const ProjectMetaInfoItem = ({ label, value }: ProjectMetaInfoItem) => (
  <div>
    <h3 className="mb-2 font-display text-gray-900 dark:text-gray-300">
      {label}
    </h3>
    <ul className="ml-0 flex list-none flex-col gap-2 text-sm">
      {label === 'Role' ? (
        value.map((v: string) => <li key={v}>{v}</li>)
      ) : (
        <li>{value}</li>
      )}
    </ul>
  </div>
);
