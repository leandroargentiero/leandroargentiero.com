import type { NextPage } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { PageDetailShell, Section } from '@/components/Layout';
import { Container } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import Photography from '@/sections/About/Photography';

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About" />
      <PageDetailShell>
        <PageHeader
          rotateTitle
          rotateData={['Hello,', 'Aangenaam,', 'Piacere,', 'Enchanté,']}
        >
          <p>
            My name is Leandro Argentiero, and I like to build stuff for the
            internet. After getting my bachelor&apos;s degrees in communications
            management and design & development, I&apos;ve worked on digital
            products in start-up, agency and corporate environments. I&apos;ve
            had the privilege to work alongside very talented designers,
            developers, and product managers who have raised my standards for
            what&apos;s expected of any web solution.
          </p>
          <h3 className="mt-2 text-xl text-gray-900 dark:text-gray-100">
            Being a hybrid profile
          </h3>
          <p>
            I consider myself as a bridge between design and code, who feels at
            home in both Figma and VS Code. But today, I like to focus more on
            the technical side of product design. My weapons of choice I
            currently prefer:
          </p>
          <ul className="ml-4 list-inside">
            <li>Javascript (ES6)</li>
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>Chakra UI</li>
            <li>And recently I&apos;ve been dabbling with Typescript</li>
          </ul>
          <h3 className="mt-2 text-xl text-gray-900 dark:text-gray-100">
            {' '}
            When I&apos;m not tinkering around on my computer
          </h3>
          <p>
            Since I was a little kid, I&apos;ve always loved sports that
            involved some kind of board. What started with skateboarding and
            snowboarding eventually brought me to surfing. The latter is
            currently my biggest passion, and it led me to travel to different
            places around the world to surf waves and discover other cultures.
          </p>
        </PageHeader>
        <Section className="pt-8 md:pt-16">
          <Container>
            <div className="mx-auto max-w-2xl">
              <figure className="relative z-0 overflow-hidden rounded-lg">
                <Image
                  className="object-cover"
                  src="/static/bottomturn.jpg"
                  layout="responsive"
                  width={700}
                  height={475}
                  placeholder="blur"
                  blurDataURL="/assets/bottomturn.jpg"
                  alt="A picture of me surfing in Indonesia"
                />
              </figure>
              <figcaption className="relative p-1 px-1 font-body text-sm text-gray-400 before:mr-1 before:text-pastel-indigo before:content-['•']">
                That&apos;s me doing a bottom turn in Lombok, Indonesia.
              </figcaption>
            </div>
          </Container>
        </Section>
        <Photography />
      </PageDetailShell>
    </>
  );
};

export default About;
