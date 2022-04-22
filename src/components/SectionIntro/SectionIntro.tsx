import classNames from 'classnames';
import { motion } from 'framer-motion';

import { sectionParent, sectionTitle } from './sectionIntroVariants';

interface ISectionIntro {
  title: string;
  children?: React.ReactNode;
  alignment: 'left' | 'center';
}

export const SectionIntro = ({ title, children, alignment }: ISectionIntro) => {
  return (
    <motion.div
      variants={sectionParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={classNames('flex max-w-2xl flex-col gap-3', {
        'mx-auto': alignment === 'center',
        'lg:text-center': alignment === 'center',
      })}
    >
      <motion.h2
        variants={sectionTitle}
        className="font-display text-3xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.h3
        variants={sectionTitle}
        className="font-body text-base text-gray-400"
      >
        {children}
      </motion.h3>
    </motion.div>
  );
};
