import NextImage from 'next/image';

import { Button } from '@/components/Button';

function Image(props: any) {
  return (
    <NextImage
      className="rounded-lg object-cover"
      layout="responsive"
      placeholder="blur"
      width={1600}
      height={909}
      quality={100}
      {...props}
    />
  );
}

export const MDXComponents = {
  Image,
  Button,
};
