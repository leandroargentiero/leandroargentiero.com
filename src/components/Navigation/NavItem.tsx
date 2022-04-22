import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavButton {
  path: string;
  text: string;
}

export const NavItem = ({ path, text }: INavButton) => {
  const [active, setActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    path === pathname ? setActive(true) : null;
  }, [pathname, path]);

  return (
    <Link href={path} passHref>
      <a
        className={
          'rounded-full border border-black/5 bg-gray-50 px-4 no-underline hover:border-black/30 dark:border-white/10 dark:bg-gray-900 dark:hover:border-white/40 md:px-8'
        }
      >
        <li className="relative font-display text-sm leading-10 text-gray-800 dark:text-gray-300 ">
          {text}
        </li>
      </a>
    </Link>
  );
};
