import { Section } from "@/components/Layout";
import { Container } from "@/components/Layout";
import { SectionIntro } from "@/components/SectionIntro";
import { Marquees } from "@/components/Marquees";

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
    </Section>
  );
};

export default WhatICanDo;
