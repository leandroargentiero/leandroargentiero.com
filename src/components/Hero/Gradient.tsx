import { useEffect, useRef, useState } from 'react';
import { TWallpaper, TWallpaperHandlers } from '@twallpaper/react'
import '@twallpaper/react/css'

interface IGradient {
  colors: string[];
  tails: number;
}

export const Gradient = ({ colors }: IGradient): JSX.Element => {
  const ref = useRef<TWallpaperHandlers>(null);

  return (
    <TWallpaper
      ref={ref}
      options={{
        colors
      }}
      className='relative h-full w-full'
    />
  )
};
