import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

declare interface NavButtonProps {
  path: string;
  text?: string;
  children?: React.ReactNode;
}

export const NavItem = ({ path, text, children }: NavButtonProps) => {
  const [active, setActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    path === pathname ? setActive(true) : null;
  }, [pathname, path]);

  return (
    <Link href="#" passHref>
      <a
        className={`px-8 border-white/50 bg-white/20 hover:bg-white/40 border rounded-full ${
          active && "bg-white/50"
        }`}
      >
        <li
          className={`relative leading-10 font-display text-sm text-gray-800`}
        >
          {children}
          {text}
        </li>
      </a>
    </Link>
  );
};
