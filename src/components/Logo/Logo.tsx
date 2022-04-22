import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

export const Logo = ({ ...props }) => {
  const router = useRouter();
  const { systemTheme, theme } = useTheme();

  const currentPath = router.asPath;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Link href="/" passHref>
      <a>
        <svg
          width={79}
          height={16}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.86 0H0v16h1.86V0Zm13.938 9.845c0-.49-.056-.96-.167-1.412-.633-2.692-3.033-4.706-5.88-4.706-2.866 0-5.266 2.014-5.88 4.706a4.064 4.064 0 0 0-.112.659c-.037.244-.037.49-.037.753 0 .15 0 .32.018.47.242 3.163 2.847 5.647 6.03 5.647 2.195 0 4.112-1.185 5.172-2.955l-1.674-.847a4.157 4.157 0 0 1-3.517 1.92c-2.159 0-3.927-1.656-4.169-3.765H15.78c.018-.15.018-.32.018-.47ZM5.806 8.433c.577-1.638 2.121-2.824 3.945-2.824 1.823 0 3.368 1.167 3.944 2.824h-7.89Zm21.42-2.974V3.765h1.862V16h-1.861v-1.694A6.018 6.018 0 0 1 23.04 16c-3.33 0-6.048-2.73-6.048-6.118 0-3.388 2.717-6.117 6.048-6.117 1.619 0 3.108.64 4.187 1.694Zm-8.373 4.423c0 2.335 1.88 4.236 4.187 4.236 2.233 0 4.057-1.77 4.187-3.991v-.489c-.13-2.222-1.954-3.991-4.187-3.991-2.307 0-4.187 1.901-4.187 4.235Zm23.26-1.656V16h-1.86V8.979c0-1.807-1.433-3.332-3.22-3.332h-.037c-2.307 0-4.187 1.901-4.187 4.235V16h-1.86V3.765h1.86v1.713a6 6 0 0 1 4.187-1.713c1.21 0 2.326.357 3.256.96l.02.019c1.171.752 1.841 2.089 1.841 3.482ZM54.21 5.478V0h1.86v16h-1.86v-1.713A6 6 0 0 1 50.022 16c-3.331 0-6.048-2.73-6.048-6.118 0-3.388 2.717-6.117 6.048-6.117a6 6 0 0 1 4.187 1.713Zm-8.374 4.404c0 2.335 1.88 4.236 4.187 4.236 2.326 0 4.187-1.902 4.187-4.236 0-2.334-1.88-4.235-4.187-4.235-2.308 0-4.187 1.901-4.187 4.235Zm17.678-6.117v1.882H59.79V16h-1.86V3.765h5.582Zm1.245 6.117c0-3.388 2.717-6.117 6.047-6.117 3.35 0 6.048 2.73 6.048 6.117 0 3.389-2.698 6.118-6.047 6.118-3.331 0-6.048-2.73-6.048-6.118Zm1.86 0c0 2.335 1.88 4.236 4.188 4.236 2.326 0 4.186-1.902 4.186-4.236 0-2.334-1.879-4.235-4.187-4.235-2.307 0-4.186 1.901-4.186 4.235Z"
              fill={
                currentPath !== '/' && currentTheme === 'dark'
                  ? '#ffffff'
                  : '#222222'
              }
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h78.154v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </Link>
  );
};
