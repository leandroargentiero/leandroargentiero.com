import { Container, Section } from '../Layout';
import { FooterList } from './FooterList';
import { FooterItem } from './FooterItem';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section>
      <Container>
        <footer className="overflow-hidden rounded-3xl bg-gray-100 px-12 pt-24 pb-12">
          <div className="mb-16 grid grid-cols-2">
            <div className="flex flex-col justify-between font-display">
              <div className="mb-8">
                <h3 className="mb-4 text-3xl text-gray-900">
                  Let&apos;s build something together.
                </h3>
                <p className="font-body text-gray-400">
                  Now that you know me, let&apos;s talk about you. <br />
                  Feel free to reach out if you&apos;ve a question, or just want
                  to connect.
                </p>
              </div>
              <a href="#" className="text-2xl underline hover:no-underline">
                ciao@leandroargentiero.com
              </a>
            </div>
            <div className="flex flex-row justify-center gap-24">
              <FooterList title="Find me on">
                <FooterItem asLink href="https://github.com/leandroargentiero/">
                  Github
                </FooterItem>
                <FooterItem
                  asLink
                  href="https://www.linkedin.com/in/leandroargentiero/"
                >
                  LinkedIn
                </FooterItem>
                <FooterItem
                  asLink
                  href="https://www.instagram.com/leandroargentiero/"
                >
                  Instagram
                </FooterItem>
              </FooterList>
              <FooterList title="Personalia">
                <FooterItem>Leandro Argentiero</FooterItem>
                <FooterItem>Antwerp, Belgium</FooterItem>
                <FooterItem>+32 568 19 78 66</FooterItem>
              </FooterList>
              <FooterList title="Sitemap">
                <FooterItem asNextLink href="/home">
                  Projects
                </FooterItem>
                <FooterItem asNextLink href="/projects">
                  Projects
                </FooterItem>
                <FooterItem asNextLink href="/about">
                  About
                </FooterItem>
              </FooterList>
            </div>
          </div>
          <p className="font-body text-xs text-gray-400">
            ©{currentYear} Leandro Argentiero - Built with Next.js and
            TailwindCSS
          </p>
        </footer>
      </Container>
    </Section>
  );
};
