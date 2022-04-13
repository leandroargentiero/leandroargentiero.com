import { Footer } from '../Footer';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { ScrollIndicator } from '../ScrollIndicator';
import { WeatherStats } from '../WeatherStats';
import { Container } from './Container';

interface ISiteShellProps {
  children: React.ReactNode;
}

export const PageDetailShell = ({ children }: ISiteShellProps) => {
  return (
    <>
      <Navigation />
      <header className="fixed top-0 left-0 right-0 z-20 bg-white">
        <ScrollIndicator />
        <Container>
          <div className="flex flex-row items-center justify-between pb-4 pt-3">
            <Logo />
            <WeatherStats cityName="antwerp" />
          </div>
        </Container>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
