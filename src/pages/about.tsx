import type { NextPage } from 'next';
import Image from 'next/legacy/image';
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
          <div className="max-w-3xl">
            <p>
              My name is Leandro Argentiero, and I like to build stuff for the
              internet. I&apos;ve worked on digital products in <u>start-up</u>,{' '}
              <u>agency</u> and <u>corporate</u> environments where I had the
              privilege to work alongside very talented designers, developers,
              and product managers who have raised my standards for what&apos;s
              expected of any web solution.
            </p>
            <p>
              As a designer who finds beauty in code and a developer who values
              delightful user experiences, my ultimate objective is to develop
              digital solutions that address human problems while delivering
              both aesthetically pleasing and seamless working products.
            </p>
            <p>
              When I&apos;m not immersed in the world of technology, you&apos;ll
              likely find me indulging in my lifelong passion for board sports.
              From a young age, I&apos;ve been drawn to activities like
              skateboarding and snowboarding, which eventually paved the way for
              my love for surfing. Nowadays, surfing has become my passion,
              motivating me to embark on journeys to various places to ride
              waves and immerse myself in diverse cultures which let me
              appreciate the world beyond the screen.
            </p>
          </div>
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
