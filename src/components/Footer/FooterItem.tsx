import Link from 'next/link';

interface IFooterItemProps {
  asLink?: boolean;
  asNextLink?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const FooterItem = ({
  asLink,
  asNextLink,
  children,
  href,
}: IFooterItemProps): JSX.Element => {
  if (asNextLink)
    return (
      <Link href={href!} passHref>
        <a className="hover:underline">{children}</a>
      </Link>
    );

  if (asLink)
    return (
      <li className="hover:underline">
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </li>
    );

  return <li>{children}</li>;
};
