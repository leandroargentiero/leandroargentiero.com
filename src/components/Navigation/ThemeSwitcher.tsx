import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import useSound from 'use-sound';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [play] = useSound('/click.mp3', { volume: 0.35 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderIcon = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return currentTheme === 'dark' ? <FiSun /> : <FiMoon />;
  };

  return (
    <motion.a
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        play();
      }}
      whileHover={{ rotate: '30deg' }}
      className="rounded-full border border-black/5 bg-gray-50 p-3 hover:cursor-pointer hover:border-black/30 dark:border-white/10 dark:bg-gray-900 dark:hover:border-white/40"
    >
      <li className="font-display text-sm text-gray-800 dark:text-gray-300">
        {renderIcon()}
      </li>
    </motion.a>
  );
};
