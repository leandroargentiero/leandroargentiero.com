import type { NextPage } from 'next';
import Image from 'next/image';
// @ts-expect-error
import ReactTextRotate from 'react-text-rotate';

import { PageDetailShell, Section } from '@/components/Layout';
import { Container } from '@/components/Layout';

const About: NextPage = () => {
  return (
    <>
      <PageDetailShell>
        <Container>
          <Section>
            <div className="max-w-4xl pt-12  md:pt-0 lg:pl-44">
              <h1 className="mb-6 h-8 font-display text-3xl text-gray-900 md:h-14 md:text-5xl">
                <ReactTextRotate
                  texts={['Hello', 'Aangenaam', 'Piacere', 'Enchanté']}
                  speed={1.5}
                  period={1000}
                />
              </h1>
              <div className="flex flex-col gap-6 font-body leading-relaxed text-gray-500">
                <p>
                  My name is Leandro Argentiero, and I like to build stuff for
                  the internet. After studying communicationsmanagement and
                  afterwards design&development in college, I started my career
                  as a developer. Over the years, I&apos;ve worked at a startup,
                  an advertising agency, a consultancy firm, one of
                  Belgium&apos;s largest media companies, and a private bank.
                  During this time, I&apos;ve had the privilege to work
                  alongside very talented designers, senior developers, and
                  product managers who have raised my standards for what&apos;s
                  expected of any web solution.
                </p>
                <p>
                  Today my main focus is developing solutions for human problems
                  that look good and work well. My preferred technology stack is
                  <span className="font-semibold text-gray-800">
                    {' '}
                    Javascript (ES6+), React, Next.js, TailwindCSS, Chakra UI,
                    and recently I&apos;ve been dabbling with Typescript
                  </span>
                  . In 2021 I enrolled in a full-stack course from the
                  University of Helsinki to get a better grasp of the backend
                  side, where I gained a practical understanding of Node.js and
                  REST API&apos;s.
                </p>
                <p>
                  I also recently launched a premium extra virgin olive oil
                  product that is an homage to my Italian family&apos;s olive
                  oil-producing tradition.
                </p>
                <p>
                  When I&apos;m not tinkering around on my computer, you can
                  probably find me outside in nature. Since I was a little kid,
                  I&apos;ve always loved sports that involved some kind of
                  board. Starting with skateboarding, snowboarding and
                  eventually surfing. The latter is currently my biggest
                  passion, and it led me to travel to different places around
                  the world to surf waves and discover other cultures. During
                  these trips I like to keep a visual diary by capturing the
                  beauty of the world with my Fujifilm camera.
                </p>
              </div>
            </div>
            <div className="my-10 mx-auto max-w-2xl">
              <figure className="relative z-0 overflow-hidden rounded-2xl">
                <Image
                  className="object-cover"
                  src="/assets/bottomturn.jpg"
                  layout="responsive"
                  width={700}
                  height={475}
                  placeholder="blur"
                  blurDataURL="/assets/bottomturn.jpg"
                  alt="A picture of me surfing in Indonesia"
                />
              </figure>
              <figcaption className="relative p-1 px-3 font-body text-sm text-gray-400 before:contents before:text-pastel-indigo before:content-['•']">
                That&apos;s me doing a bottom turn in Lombok, Indonesia.
              </figcaption>
            </div>
          </Section>
        </Container>
      </PageDetailShell>
    </>
  );
};

export default About;
