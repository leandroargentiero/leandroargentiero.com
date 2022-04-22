interface IFooterList {
  title: string;
  children: React.ReactNode;
}

export const FooterList = ({ title, children }: IFooterList): JSX.Element => {
  return (
    <div>
      <h6 className="font-display text-sm text-gray-800 dark:text-gray-100">
        {title}
      </h6>
      <ul className="mt-4 ml-0 flex list-none flex-col justify-between gap-2 font-body text-sm text-gray-400 lg:gap-3">
        {children}
      </ul>
    </div>
  );
};
