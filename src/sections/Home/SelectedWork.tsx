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
          <ProjectCard
            href="/projects/chameleon-design-system"
            label="mediahuis"
            title="Building a multi-branded design system that ensures design
            consistency and development efficiency."
            imageSrc="/static/projects/chameleon/cover.jpg"
          />
          <ProjectCard
            href="/projects/curieuzeneuzen-vlaanderen"
            label="de standaard"
            title="Mapping Flander's air pollution created by cars."
            imageSrc="/static/projects/curieuzeneuzen/cover.jpg"
          />
          <ProjectCard
            href="/projects/pizza-point"
            label="personal project"
            title="A tool that helps me calculating the recipe for the perfect pizza dough"
            imageSrc="/static/projects/pizzapoint/cover.jpg"
          />
          <ProjectCard
            href="/projects/portfolio-toon-persyn"
            label="freelance"
            title="JAMstack portfolio website connected with Prismic for a director of photography"
            imageSrc="/static/projects/toonpersyn/cover.jpg"
          />
          <ProjectCard
            href="/projects/polar-experience"
            label="freelance"
            title="Defining an overaching digital identity for a polar travel company"
            imageSrc="/static/projects/polar-experience/cover.jpg"
          />
          <ProjectCard
            href="/projects/covid19-dashboard"
            label="personal project"
            title="Building a Covid-19 Realtime Dashboard during lockdown"
            imageSrc="/static/projects/covid19-dashboard/cover.jpg"
          />
        </div>
        <div className="text-center">
          <Button>Discover more projects</Button>
        </div>
      </Container>
    </Section>
  );
};

export default SelectedWork;
