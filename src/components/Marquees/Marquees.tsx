import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { marqueeContainer } from "./motionVariants";

export const Marquees: React.FC = (): JSX.Element => (
  <motion.div
    variants={marqueeContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-full text-center my-16 xl:my-32 text-5xl md:text-7xl xl:text-9xl whitespace-nowrap	font-display text-gray-300 font-bold overflow-hidden"
  >
    <Marquee speed={30} style={{ overflow: "hidden" }}>
      {" "}
      - HTML5 - CSS3 - JS ES6 - GIT - SCSS
    </Marquee>
    <Marquee speed={30} style={{ overflow: "hidden" }} direction="right">
      {" "}
      - TYPESCRIPT - REACT - NEXT.JS - CHAKRA UI - TAILWIND - REDUX
    </Marquee>
    <Marquee speed={30} style={{ overflow: "hidden" }}>
      {" "}
      - NODE - REST API - STYLED COMPNENTS - FRAMER MOTION - JEST
    </Marquee>
    <Marquee speed={30} style={{ overflow: "hidden" }} direction="right">
      {" "}
      - FIGMA - UI DESIGN - UX DESIGN - DESIGN SYSTEMS
    </Marquee>
  </motion.div>
);
