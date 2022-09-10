import { Container, Section } from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button';

export const SelectedWork = () => {
  return (
    <Section>
      <Container>
        <SectionIntro title="Selected work" alignment="left">
          A selection of a few projects I personally, or together with others,
          have worked on.
        </SectionIntro>
        <div
          role="list"
          className="my-12 grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:my-32 lg:gap-16 xl:gap-48"
        >
          <ProjectCard
            label="Telenet (case coming soon)"
            title="Simplifying the back office tasks of a telecom provider with a new portal application."
            imageSrc="/static/projects/tadaam/cover.jpg"
          />
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
            title="Mapping Flanders' air pollution created by cars."
            imageSrc="/static/projects/curieuzeneuzen/cover.jpg"
          />
          <ProjectCard
            href="/projects/my-portfolio-website"
            label="personal project"
            title="Portfolio website built with Next.js, Typescript, and TailwindCSS"
            imageSrc="/static/projects/my-portfolio-website/cover.jpg"
          />
          <ProjectCard
            href="/projects/pizza-point"
            label="personal project"
            title="A tool that helps me calculate the recipe for the perfect pizza dough"
            imageSrc="/static/projects/pizzapoint/cover.jpg"
          />
          <ProjectCard
            href="/projects/portfolio-toon-persyn"
            label="freelance"
            title="JAMstack portfolio website connected with Prismic"
            imageSrc="/static/projects/toonpersyn/cover.jpg"
          />
          <ProjectCard
            href="/projects/polar-experience"
            label="freelance"
            title="Defining an overarching digital identity for a polar travel company"
            imageSrc="/static/projects/polar-experience/cover.jpg"
          />
          <ProjectCard
            href="/projects/covid19-dashboard"
            label="personal project"
            title="Building a Covid-19 Realtime Dashboard during lockdown"
            imageSrc="/static/projects/covid19-dashboard/cover.jpg"
          />
          {/* 
          <div className="grid h-[20rem] w-full place-items-center justify-around rounded-xl bg-pastel-pink md:h-[30rem] md:col-start-2 md:-translate-y-1/">
            <div className="text-center">
              <h2 className="mb-4 font-display text-xl text-gray-900 md:text-2xl">
                Your project here?
              </h2>
              <Button
                href="mailto:ciao@leandroargentiero.com"
                NextLink
                noDarkMode
              >
                Send me an email
              </Button>
            </div>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default SelectedWork;
