import NextImage from 'next/image';

import { Button } from '@/components/Button';

function Image(props: any) {
  return (
    <NextImage
      className="rounded-lg"
      layout="responsive"
      placeholder="blur"
      width={700}
      height={475}
      {...props}
    />
  );
}

export const MDXComponents = {
  Image,
  Button,
};
