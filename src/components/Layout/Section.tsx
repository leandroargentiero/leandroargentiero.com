export const Section: React.FC = ({ children, ...props }): JSX.Element => (
  <section className="py-12 md:py-36" {...props}>
    {children}
  </section>
);
