import { ImageGallery } from '@/components/ImageGallery';
import { Container, Section } from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro';
import { Button } from '@/components/Button';
import { UnsplashStats } from '@/components/UnsplashStats';

const Photography = () => {
  return (
    <Section>
      <Container>
        <SectionIntro title="Keeping a visual diary" alignment="center">
          During my (surf) trips, I like to keep a visual diary by capturing the
          world&apos;s beauty with my Fujifilm camera. Below you can find some
          shots that I&apos;ve taken over time. <br /> <br />
          <strong className="italic">
            Custom prints are available upon request.
          </strong>
        </SectionIntro>
        <UnsplashStats />
        <ImageGallery />
        <div className="my-8 text-center">
          <Button href="https://www.instagram.com/leandroargentiero/">
            See more on Instagram
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Photography;
