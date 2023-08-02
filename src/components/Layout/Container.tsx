export const Container = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div className="container max-w-[1400px] px-4">{children}</div>;
};
