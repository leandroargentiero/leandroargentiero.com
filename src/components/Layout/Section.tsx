interface ISection {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({
  children,
  className = 'py-20 md:py-36',
}: ISection): JSX.Element => (
  <section className={className}>{children}</section>
);
