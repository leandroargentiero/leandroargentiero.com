import { motion } from 'framer-motion';
import classNames from 'classnames';

import { NavItem } from './NavItem';
import { navContainer, navList } from './navigationVariants';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navigation = () => (
  <motion.nav
    variants={navContainer}
    initial="hidden"
    animate="show"
    className={classNames(
      'fixed left-1/2 z-20 translate-x-[-50%]',
      'bottom-4 md:bottom-8'
    )}
  >
    <motion.ul
      variants={navList}
      initial="hidden"
      animate="show"
      className="flex flex-row items-center justify-center gap-2 rounded-full border border-black/5 bg-black/5 py-2 px-4 backdrop-blur-[5px]"
    >
      <NavItem text="Home" path="/" />
      <NavItem text="About" path="/about" />
      <div className="mx-1 h-6">
        <hr className="h-full border-l border-white/40" />
      </div>
      <ThemeSwitcher />
    </motion.ul>
  </motion.nav>
);
