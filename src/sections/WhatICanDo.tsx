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
          title="What I can do"
          subtitle="Through my studies and experience as a developer/designer, I've
            gained a solid understanding of computer science and web development
            concepts."
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
