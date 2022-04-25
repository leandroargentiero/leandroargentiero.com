import classNames from 'classnames';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

interface IButton {
  children: string;
  isFullWidth?: boolean;
  href: string;
  target?: string;
  NextLink?: boolean;
}

export const Button = ({
  children,
  isFullWidth,
  href,
  target,
  NextLink,
  ...props
}: IButton) => (
  <>
    {NextLink ? (
      <Link href={href} passHref>
        <button
          type="button"
          className={classNames(
            'group inline-flex items-center rounded-full bg-gray-900 py-4 px-6 font-display text-base text-white outline-8 outline-offset-2 outline-gray-300 transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 hover:dark:bg-gray-300',
            { 'block w-full': isFullWidth }
          )}
          {...props}
        >
          {children}
          <FiChevronRight className="ml-0 w-0 opacity-0 transition-all duration-200 ease-in-out group-hover:ml-2 group-hover:w-auto group-hover:opacity-100" />
        </button>
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer" className="no-underline">
        <button
          type="button"
          className={classNames(
            'group inline-flex items-center rounded-full bg-gray-900 py-4 px-6 font-display text-base text-white outline-8 outline-offset-2 outline-gray-300 transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 hover:dark:bg-gray-300',
            { 'block w-full': isFullWidth }
          )}
          {...props}
        >
          {children}
          <FiChevronRight className="ml-0 w-0 opacity-0 transition-all duration-200 ease-in-out group-hover:ml-2 group-hover:w-auto group-hover:opacity-100" />
        </button>
      </a>
    )}
  </>
);
