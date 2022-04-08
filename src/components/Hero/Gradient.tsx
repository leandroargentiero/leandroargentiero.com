import { useEffect, useRef, useState } from "react";
import { TWallpaper, TWallpaperOptions } from "twallpaper";
import "twallpaper/dist/twallpaper.css";

declare interface GradientProps {
  colors: string[];
  tails: number;
}

export const Gradient = ({ colors, tails }: GradientProps): JSX.Element => {
  const [color1, color2, color3, color4] = colors;
  const containerRef = useRef<HTMLDivElement>(null);
  const [options] = useState<TWallpaperOptions>({
    tails: 200,
    colors: [color1, color2, color3, color4],
  });

  useEffect(() => {
    const wallpaper = new TWallpaper(containerRef.current, options);
    wallpaper.updateFrametime(90);
  }, []);

  return <div ref={containerRef} />;
};
