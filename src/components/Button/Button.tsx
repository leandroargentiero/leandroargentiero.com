import classNames from 'classnames';

declare interface ButtonProps {
  children: string;
  isFullWidth?: boolean;
  href: string;
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
    <a
      href={href}
      target={target}
      type="button"
      className={classNames(
        'rounded-full bg-gray-900 py-4 px-6 font-display text-base text-white outline-8 outline-offset-2 outline-gray-300 hover:cursor-pointer hover:bg-gray-800',
        { 'block w-full': isFullWidth }
      )}
      {...props}
    >
      {children}
    </a>
  );
};
