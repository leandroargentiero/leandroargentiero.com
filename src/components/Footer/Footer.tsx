import { FooterList } from './FooterList';
import { FooterItem } from './FooterItem';
import { FooterCta } from './FooterCta';
import { FooterCredits } from './FooterCredits';

export const Footer = () => {
  return (
    <footer className="p-4 pb-24 xl:pb-5">
      <div className="rounded-2xl bg-gray-100 py-8 px-5 dark:bg-gray-800 md:p-16 md:pt-24">
        <div className="max-w-[1400px]">
          <div className="mb-8 grid grid-cols-1 md:mb-12 md:gap-8 lg:grid-cols-2">
            <FooterCta />
            <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:gap-16 lg:mt-0 lg:gap-16 xl:justify-center xl:gap-24">
              <FooterList title="Personalia">
                <FooterItem>Leandro Argentiero</FooterItem>
                <FooterItem>Antwerp, Belgium</FooterItem>
                <FooterItem>+32 468 19 78 66</FooterItem>
              </FooterList>
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
              <FooterList title="Sitemap">
                <FooterItem asNextLink href="/home">
                  Home
                </FooterItem>
                <FooterItem asNextLink href="/about">
                  About
                </FooterItem>
              </FooterList>
            </div>
          </div>
          <FooterCredits />
        </div>
      </div>
    </footer>
  );
};
