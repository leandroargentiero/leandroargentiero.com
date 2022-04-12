import { motion } from 'framer-motion';

import { sectionParent, sectionTitle } from './sectionIntroVariants';

declare interface SectionIntroProps {
  title: string;
  subtitle: string;
  alignment: 'left' | 'center';
}

export const SectionIntro = ({
  title,
  subtitle,
  alignment,
}: SectionIntroProps) => {
  return (
    <motion.div
      variants={sectionParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex max-w-2xl flex-col gap-3 text-${alignment} ${
        alignment === 'center' ? 'mx-auto' : 'mx-right'
      }`}
    >
      <motion.h2
        variants={sectionTitle}
        className="font-display text-3xl text-gray-900 md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.h3
        variants={sectionTitle}
        className="font-body text-base text-gray-400"
      >
        {subtitle}
      </motion.h3>
    </motion.div>
  );
};
