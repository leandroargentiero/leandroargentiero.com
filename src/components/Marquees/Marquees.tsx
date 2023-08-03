import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Marquee from 'react-fast-marquee';

import { marqueeContainer } from './marqueesVariants';

export const Marquees: React.FC = (): JSX.Element => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <motion.div
      variants={marqueeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="my-16 w-full overflow-hidden whitespace-nowrap text-center font-display text-5xl font-bold	text-gray-300 dark:text-gray-500 md:text-7xl xl:my-32 xl:text-8xl"
    >
      <Marquee
        gradientColor={
          currentTheme === 'light' ? [255, 255, 255] : [17, 24, 39]
        }
        speed={30}
        style={{ overflow: 'hidden' }}
      >
        {' '}
        - REACT - ES6 - CSS3 - GIT - TYPESCRIPT
      </Marquee>
      <Marquee
        gradientColor={
          currentTheme === 'light' ? [255, 255, 255] : [17, 24, 39]
        }
        speed={30}
        style={{ overflow: 'hidden' }}
        direction="right"
      >
        {' '}
        - REACT NATIVE - NEXT.JS - CHAKRA UI - TAILWIND - REACT QUERY
      </Marquee>
      <Marquee
        gradientColor={
          currentTheme === 'light' ? [255, 255, 255] : [17, 24, 39]
        }
        speed={30}
        style={{ overflow: 'hidden' }}
      >
        {' '}
        - NODE - NEST.JS - STYLED COMPNENTS - FRAMER MOTION - JEST
      </Marquee>
      <Marquee
        gradientColor={
          currentTheme === 'light' ? [255, 255, 255] : [17, 24, 39]
        }
        speed={30}
        style={{ overflow: 'hidden' }}
        direction="right"
      >
        {' '}
        - UX DESIGN - UI DESIGN - FIGMA - DESIGN SYSTEMS
      </Marquee>
    </motion.div>
  );
};
