declare interface IFooterListProps {
  title: string;
  children: React.ReactNode;
}

export const FooterList = ({
  title,
  children,
}: IFooterListProps): JSX.Element => {
  return (
    <ul className="flex h-full flex-col justify-between font-body text-gray-500">
      <h6 className="font-display text-gray-800">{title}</h6>
      {children}
    </ul>
  );
};
