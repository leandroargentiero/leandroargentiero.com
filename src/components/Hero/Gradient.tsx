import { useEffect, useRef, useState } from 'react';
import { TWallpaper, TWallpaperOptions } from 'twallpaper';
import 'twallpaper/dist/twallpaper.css';

interface IGradient {
  colors: string[];
  tails: number;
}

export const Gradient = ({ colors, tails }: IGradient): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [options] = useState<TWallpaperOptions>({
    tails: 200,
    colors: [...colors],
  });

  useEffect(() => {
    const wallpaper = new TWallpaper(containerRef.current, options);
    wallpaper.updateFrametime(90);
  }, [options]);

  return <div ref={containerRef} />;
};
