import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';

import { images } from './images';

export const ImageGallery = () => {
  return (
    <>
      <div className="masonry sm:masonry-sm md:masonry-md">
        {images.map((image, i) => (
          <figure key={i} className="break-inside overflow-hidden py-4">
            <div className="group relative h-full w-full overflow-hidden rounded-lg">
              <Image
                className="object-cover"
                src={image.src}
                layout="responsive"
                width={image.width}
                height={image.height}
                placeholder="blur"
                alt={image.description}
              />
              <div className="absolute top-0 left-0 z-10 hidden h-full w-full flex-col justify-between bg-gallery-image-gradient p-7 group-hover:flex">
                <p className="flex flex-row items-center gap-1 font-body text-sm text-white/70">
                  <FiMapPin /> {image.location}
                </p>
                <figcaption className="font-display text-sm text-white/95">
                  {image.description}
                </figcaption>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </>
  );
};
