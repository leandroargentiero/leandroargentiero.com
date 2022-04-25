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
      <li>
        <Link href={href!} passHref>
          <a className="no-underline hover:underline">{children}</a>
        </Link>
      </li>
    );

  if (asLink)
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline"
        >
          {children}
        </a>
      </li>
    );

  return <li>{children}</li>;
};
