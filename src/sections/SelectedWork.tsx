import { Container, Section } from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button';

export const SelectedWork = () => {
  return (
    <Section>
      <Container>
        <SectionIntro title="Selected work" alignment="left" />
        <div
          role="list"
          className="my-12 grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 lg:my-32 lg:gap-16 xl:gap-48"
        >
          {[1, 2, 3, 4].map((i) => (
            <ProjectCard
              key={i}
              href="/"
              label="mediahuis"
              title="Building a multi-branded design system that ensures design
            consistency and development efficiency."
              imageSrc="/assets/mediahuis.jpg"
            />
          ))}
        </div>
        <div className="text-center">
          <Button>Discover more projets</Button>
        </div>
      </Container>
    </Section>
  );
};

export default SelectedWork;
