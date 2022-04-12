import { Section } from '@/components/Layout';
import { Container } from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro';
import { Marquees } from '@/components/Marquees';
import { Button } from '@/components/Button';

export const WhatICanDo = () => {
  return (
    <Section>
      <Container>
        <SectionIntro
          title="What I can do for you"
          subtitle="I've worked and dabbled with various technologies and design principles. Due to my experience as both a designer and developer, I've gained a solid understanding of the intersection between product, design, and code."
          alignment="center"
        />
      </Container>
      <Marquees />
      <div className="-mt-4 text-center">
        <Button>Read more about me</Button>
      </div>
    </Section>
  );
};

export default WhatICanDo;
