import classNames from 'classnames';

declare interface ButtonProps {
  children: string;
  isFullWidth?: boolean;
}

export const Button = ({ children, isFullWidth, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'rounded-full bg-gray-900 py-4 px-6 font-display text-base text-white outline-8 outline-offset-2 outline-gray-300 hover:bg-gray-800',
        { 'block w-full': isFullWidth }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
