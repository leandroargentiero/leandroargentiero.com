import { motion } from 'framer-motion';

import { NavItem } from './NavItem';
import { navContainer, navList } from './navigationVariants';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navigation = () => (
  <motion.nav
    variants={navContainer}
    initial="hidden"
    animate="show"
    className={
      'fixed left-1/2 bottom-8 z-20 w-full translate-x-[-50%] md:bottom-8'
    }
  >
    <motion.div
      variants={navList}
      initial="hidden"
      animate="show"
      className="ml-0 flex list-none flex-row items-center justify-center gap-2 rounded-full border border-black/5 bg-gray-100/50 py-2 px-4 backdrop-blur-[3px] dark:border-white/10 dark:bg-gray-900/40"
    >
      <NavItem text="Home" path="/" />
      <NavItem text="About" path="/about" />
      <div className="mx-1 h-6">
        <hr className="h-full border-l border-black/5 dark:border-white/10" />
      </div>
      <ThemeSwitcher />
    </motion.div>
  </motion.nav>
);
