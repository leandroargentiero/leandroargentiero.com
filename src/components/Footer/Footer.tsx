import { Container, Section } from '../Layout';
import { FooterList } from './FooterList';
import { FooterItem } from './FooterItem';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section>
      <Container>
        <footer className="overflow-hidden rounded-3xl bg-gray-100 px-6 pb-6 pt-12 md:px-12 md:pb-12 md:pt-24">
          <div className="mb-8 grid grid-cols-1 md:mb-16 md:grid-cols-2">
            <div className="flex flex-col justify-between font-display">
              <div className="mb-8">
                <h3 className="mb-4 text-2xl text-gray-900 md:text-3xl">
                  Let&apos;s build something together.
                </h3>
                <p className="font-body text-gray-400">
                  Now that you know me, let&apos;s talk about you. <br />
                  Feel free to reach out if you&apos;ve a question, or just want
                  to connect.
                </p>
              </div>
              <a
                href="#"
                className="text-xl underline hover:no-underline md:text-2xl"
              >
                ciao@leandroargentiero.com
              </a>
            </div>
            <div className="mt-12 flex flex-col flex-wrap gap-5 sm:flex-row sm:gap-24 md:mt-0 md:justify-end md:gap-5 lg:gap-16 xl:justify-center xl:gap-24">
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
