import { motion } from "framer-motion";

import { NavItem } from "./NavItem";
import { navContainer, navList } from "./navigationVariants";

export const Navigation = () => (
  <motion.nav
    variants={navContainer}
    initial="hidden"
    animate="show"
    className="fixed bottom-8 left-1/2 translate-x-[-50%] z-20"
  >
    <motion.ul
      variants={navList}
      initial="hidden"
      animate="show"
      className="flex gap-2 flex-row justify-center items-center py-2 px-4 rounded-full backdrop-blur-[5px] bg-black/5"
    >
      <NavItem text="Home" path="/" />
      <NavItem text="Projects" path="/projects" />
      <NavItem text="About" path="/about" />
      <div className="h-6 mx-3">
        <hr className="h-full border-l border-white/40" />
      </div>
    </motion.ul>
  </motion.nav>
);
