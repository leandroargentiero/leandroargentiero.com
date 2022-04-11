import { motion } from "framer-motion";
import classNames from "classnames";

import { NavItem } from "./NavItem";
import { navContainer, navList } from "./navigationVariants";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navigation = () => (
  <motion.nav
    variants={navContainer}
    initial="hidden"
    animate="show"
    className={classNames(
      "fixed left-1/2 translate-x-[-50%] z-20",
      "bottom-4 md:bottom-8"
    )}
  >
    <motion.ul
      variants={navList}
      initial="hidden"
      animate="show"
      className="flex gap-2 flex-row justify-center items-center py-2 px-4 rounded-full backdrop-blur-[5px] bg-black/5 border border-black/5"
    >
      <NavItem text="Home" path="/" />
      <NavItem text="Projects" path="/projects" />
      <NavItem text="About" path="/about" />
      <div className="h-6 mx-1">
        <hr className="h-full border-l border-white/40" />
      </div>
      <ThemeSwitcher />
    </motion.ul>
  </motion.nav>
);
