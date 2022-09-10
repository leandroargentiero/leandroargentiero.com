import Image from "next/image";
import Link from "next/link";

type NextProjectProps = {
  slug: string;
  cover: string;
  company: string;
  title: string;
}

const NextProject = ({ slug, cover, company, title }: NextProjectProps) => {
  return (
    <section className='mt-32'>
      <h3 className='text-xl'>Next Project</h3>
      <Link href={slug} passHref>
        <a className='group no-underline'>
          <figure className="z-0 overflow-hidden rounded-lg m-0 flex flex-col gap-0 bg-gray-50 p-4 lg:flex-row lg:gap-5">
            <div className="w-full rounded-lg overflow-hidden border-8 border-white lg:max-w-[40rem] lg:w-[40rem]">
              <Image
                alt="project cover"
                src={cover}
                blurDataURL={cover}
                layout="responsive"
                placeholder="blur"
                width={1600}
                height={909}
                className="group-hover:scale-105 transition-all ease-in-out duration-400"
              />
            </div>
            <figcaption className="font-display">
              <h6 className="mb-2 uppercase text-xs">{company}</h6>
              <h5 className='text-2xl text-gray-800 group-hover:underline'>
                {title}
              </h5>
            </figcaption>
          </figure>
        </a>
      </Link>
    </section>
  )
}

export default NextProject;