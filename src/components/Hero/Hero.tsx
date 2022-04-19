import { motion } from 'framer-motion';
import * as FeatherIcons from 'react-icons/fi';
import 'twallpaper/dist/twallpaper.css';

import { WHITE, INDIGO, PINK } from '@/constants/colors';
import { Logo } from '@/components/Logo';
import { Gradient } from './Gradient';
import { Grain } from './Grain';
import {
  containerBorderRadius,
  fadeInX,
  fadeInY,
  paddingContainer,
} from './animations';
import { useGetWeather } from '@/hooks/useWeather';

export const Hero = () => {
  const { city, temp, icon } = useGetWeather('antwerp');
  // @ts-expect-error
  const WeatherIcon = FeatherIcons[icon];

  return (
    <motion.section
      initial="initial"
      animate="end"
      variants={paddingContainer}
      className="relative h-screen w-screen p-3 md:p-4"
    >
      <motion.div
        initial="initial"
        animate="end"
        variants={containerBorderRadius}
        className="relative h-full w-full overflow-hidden rounded-3xl bg-pastel-pink md:h-full"
      >
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          <motion.header
            initial="initial"
            animate="end"
            variants={fadeInY(0.5, '-1rem', '0rem')}
            className="relative z-10 flex flex-row justify-between p-8"
          >
            <Logo />
            <div className="grid grid-flow-col items-center gap-4 font-display text-sm text-gray-800">
              <span>{city ? city : '-'}</span>
              <span>{temp ? temp : '-'}°C</span>
              {icon && <WeatherIcon />}
            </div>
          </motion.header>
          <div className="absolute top-0 left-0 grid h-full w-full place-content-center">
            <div className="flex flex-col items-center font-display text-gray-900">
              <motion.h2
                initial="initial"
                animate="end"
                variants={fadeInY(0.5, '-1rem', '0rem')}
                className="mb-4"
              >
                Hi, I&apos;m Leandro
              </motion.h2>
              <h1 className="relative flex max-w-2xl flex-col text-center text-5xl font-semibold leading-[2.8rem] sm:text-7xl sm:leading-[4rem] lg:text-8xl lg:leading-[5rem]">
                <motion.span
                  initial="initial"
                  animate="end"
                  variants={fadeInX(0.5, '2.5rem', '0rem', 0.2)}
                  className="-ml-20"
                >
                  frontend
                </motion.span>
                <motion.span
                  initial="initial"
                  animate="end"
                  variants={fadeInX(0.5, '-2.5rem', '0rem', 0.2)}
                  className="ml-24"
                >
                  developer
                </motion.span>
                <motion.span
                  initial="initial"
                  animate="end"
                  variants={fadeInX(0.5, '2.5rem', '0rem', 0.2)}
                  className="-ml-4 "
                >
                  {'& designer'}
                </motion.span>
              </h1>
              <motion.h3
                initial="initial"
                animate="end"
                variants={fadeInY(0.5, '1.2rem', '0rem')}
                className="mt-8 text-center"
              >
                I craft digital solutions for human problems <br /> that look
                good and work well.
              </motion.h3>
            </div>
          </div>
        </div>
        <Grain />
        <Gradient colors={[WHITE, INDIGO, INDIGO, PINK]} tails={200} />
      </motion.div>
    </motion.section>
  );
};
