import { Footer } from '../Footer';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { ScrollIndicator } from '../ScrollIndicator';
import { Container } from './Container';

interface ISiteShellProps {
  children: React.ReactNode;
}

export const PageDetailShell = ({ children }: ISiteShellProps) => {
  return (
    <>
      <Navigation />
      <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-[5px]">
        <ScrollIndicator />
        <Container>
          {' '}
          <Logo className="mt-4" />
        </Container>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
