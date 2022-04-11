import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

declare interface NavButtonProps {
  path: string;
  text: string;
}

export const NavItem = ({ path, text }: NavButtonProps) => {
  const [active, setActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    path === pathname ? setActive(true) : null;
  }, [pathname, path]);

  return (
    <Link href={path} passHref>
      <a
        className={classNames(
          "border-black/5 bg-white/20 hover:bg-white/30 hover:border-black/20 border rounded-full px-4 md:px-8",
          { "border-black/20": active }
        )}
      >
        <li className="relative leading-10 font-display text-sm text-gray-800">
          {text}
        </li>
      </a>
    </Link>
  );
};
