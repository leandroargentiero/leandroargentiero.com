import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { ScrollIndicator } from '../ScrollIndicator';

interface ISiteShellProps {
  children: React.ReactNode;
}

const SiteShell = ({ children }: ISiteShellProps) => {
  return (
    <>
      <ScrollIndicator />
      {children}
      <Navigation />
      <Footer />
    </>
  );
};

export default SiteShell;
