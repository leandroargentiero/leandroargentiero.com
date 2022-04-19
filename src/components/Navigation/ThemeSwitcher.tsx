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

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <FiSun
          role="button"
          onClick={() => {
            setTheme('light');
            play();
          }}
        />
      );
    } else {
      return (
        <FiMoon
          role="button"
          onClick={() => {
            setTheme('dark');
            play();
          }}
        />
      );
    }
  };

  return (
    <motion.a
      whileHover={{ rotate: '30deg' }}
      className="rounded-full border border-black/5 bg-white/20 p-3 hover:cursor-pointer hover:border-black/20 hover:bg-white/40"
    >
      <li className="font-display text-sm text-gray-800">
        {renderThemeChanger()}
      </li>
    </motion.a>
  );
};
