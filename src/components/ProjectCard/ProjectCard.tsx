import Image from 'next/image';
import Link from 'next/link';

interface IProjectCard {
  href: string;
  label: string;
  title: string;
  imageSrc: string;
}

export const ProjectCard = ({ href, label, title, imageSrc }: IProjectCard) => {
  return (
    <Link href={href} passHref>
      <a
        className="group overflow-hidden rounded-2xl no-underline md:even:-translate-y-1/3"
        role="listitem"
      >
        <figure className="relative h-[15rem] w-full lg:h-[20rem] xl:h-[25rem]">
          <Image
            className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
            src={imageSrc}
            placeholder="blur"
            blurDataURL={imageSrc}
            layout="fill"
            alt="project-image"
          />
        </figure>
        <div className="group-first: flex flex-col justify-center gap-2 bg-pastel-indigo px-6 py-6 font-display group-even:bg-pastel-pink md:py-12 lg:h-72 lg:gap-4 lg:px-12">
          <span className="text-xs uppercase tracking-widest text-pastel-pink group-even:text-pastel-indigo lg:text-sm">
            {label}
          </span>
          <h3 className="text-xl text-gray-900 group-hover:underline lg:text-3xl">
            {title}
          </h3>
        </div>
      </a>
    </Link>
  );
};
