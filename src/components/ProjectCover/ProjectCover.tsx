import Image from 'next/image';
import { Container } from '../Layout';

interface IProjectCover {
  cover: string;
}

export const ProjectCover = ({ cover }: IProjectCover) => {
  return (
    <Container>
      <figure className="z-0 overflow-hidden rounded-lg">
        <Image
          alt="project cover"
          src={cover}
          blurDataURL={cover}
          layout="responsive"
          placeholder="blur"
          width={1600}
          height={909}
        />
      </figure>
    </Container>
  );
};
