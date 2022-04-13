declare interface IFooterListProps {
  title: string;
  children: React.ReactNode;
}

export const FooterList = ({
  title,
  children,
}: IFooterListProps): JSX.Element => {
  return (
    <div>
      <h6 className="text-md font-display text-gray-800 lg:text-lg">{title}</h6>
      <ul className="text-md mt-4 flex flex-col justify-between gap-2 font-body text-gray-500 lg:gap-3">
        {children}
      </ul>
    </div>
  );
};
