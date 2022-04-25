import { Button } from '@/components/Button';
import { Container } from '@/components/Layout';
import { Marquees } from '@/components/Marquees';
import { Section } from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro';

export const WhatICanDo = () => {
  return (
    <Section>
      <Container>
        <SectionIntro title="What I can do for you" alignment="center">
          Over the years, I&apos;ve worked and dabbled with various technologies
          and design principles. <br /> Due to my experience as both a designer
          and developer, I&apos;ve gained a solid understanding of the
          intersection between design and code.
        </SectionIntro>
      </Container>
      <Marquees />
      <div className="-mt-4 text-center">
        <Button href="/about" NextLink>
          Read more about me
        </Button>
      </div>
    </Section>
  );
};

export default WhatICanDo;
