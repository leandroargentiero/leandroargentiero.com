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
            internet. After studying communicationsmanagement and afterwards
            design&development in college, I started my career as a developer.
            Over the years, I&apos;ve worked at a startup, an advertising
            agency, a consultancy firm, one of Belgium&apos;s largest media
            companies, and a private bank. During this time, I&apos;ve had the
            privilege to work alongside very talented designers, senior
            developers, and product managers who have raised my standards for
            what&apos;s expected of any web solution.
          </p>
          <p>
            Today my main focus is developing solutions for human problems that
            look good and work well. My preferred technology stack is
            <span className="font-semibold text-gray-800 dark:text-gray-300">
              {' '}
              Javascript (ES6+), React, Next.js, TailwindCSS, Chakra UI, and
              recently I&apos;ve been dabbling with Typescript
            </span>
            . In 2021 I enrolled in a full-stack course from the University of
            Helsinki to get a better grasp of the backend side, where I gained a
            practical understanding of Node.js and REST API&apos;s.
          </p>
          <p>
            I also recently launched a premium extra virgin olive oil product
            that is an homage to my Italian family&apos;s olive oil-producing
            tradition.
          </p>
          <p>
            When I&apos;m not tinkering around on my computer, you can probably
            find me outside in nature. Since I was a little kid, I&apos;ve
            always loved sports that involved some kind of board. Starting with
            skateboarding, snowboarding and eventually surfing. The latter is
            currently my biggest passion, and it led me to travel to different
            places around the world to surf waves and discover other cultures.
            During these trips I like to keep a visual diary by capturing the
            beauty of the world with my Fujifilm camera.
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
