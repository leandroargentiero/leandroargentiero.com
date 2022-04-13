import { ImageGallery } from '@/components/ImageGallery';
import { Container, Section } from '@/components/Layout';
import { SectionIntro } from '@/components/SectionIntro';
import { Button } from '@/components/Button';
import { UnsplashStats } from '@/components/UnsplashStats';

const Photography = () => {
  return (
    <Section>
      <Container>
        <SectionIntro title="Photography" alignment="center">
          Here you can find some of the images I took over the last years. I
          also have an Instagram page where I regularly post the shots I took
          with my camera.
        </SectionIntro>
        <UnsplashStats />
        <ImageGallery />
        <div className="my-8 text-center">
          <Button
            href="https://www.instagram.com/leandroargentiero/"
            target="_blank"
          >
            See more on Instagram
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Photography;
