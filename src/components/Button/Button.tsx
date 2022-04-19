import classNames from 'classnames';

declare interface ButtonProps {
  children: string;
  isFullWidth?: boolean;
  href?: string;
  target?: string;
}

export const Button = ({
  children,
  isFullWidth,
  href,
  target,
  ...props
}: ButtonProps) => {
  return (
    <a href={href} target={target}>
      <button
        type="button"
        className={classNames(
          'rounded-full bg-gray-900 py-4 px-6 font-display text-base text-white outline-8 outline-offset-2 outline-gray-300 hover:cursor-pointer hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 hover:dark:bg-gray-300',
          { 'block w-full': isFullWidth }
        )}
        {...props}
      >
        {children}
      </button>
    </a>
  );
};
