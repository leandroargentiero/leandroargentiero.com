import { motion } from "framer-motion";

import { sectionParent, sectionTitle } from "./motionVariants";

declare interface SectionIntroProps {
  title: string;
  subtitle: string;
  alignment: "left" | "center";
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
      className={`flex gap-3 flex-col max-w-xl text-${alignment} ${
        alignment === "center" ? "mx-auto" : "mx-right"
      }`}
    >
      <motion.h2
        variants={sectionTitle}
        className="font-display text-gray-900 text-3xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.h3
        variants={sectionTitle}
        className="font-body text-gray-400 text-base"
      >
        {subtitle}
      </motion.h3>
    </motion.div>
  );
};
