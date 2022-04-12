// @ts-expect-error
import ReactTextRotate from 'react-text-rotate';
import { Container } from '../Layout';

interface IPageHeader {
  children: React.ReactNode;
  rotateTitle?: boolean;
  rotateData?: string[];
  title?: string;
}

export const PageHeader = ({
  children,
  rotateTitle = false,
  rotateData,
  title,
}: IPageHeader) => {
  return (
    <div className="mt-32 px-4 lg:pl-44">
      <h1 className="text-3xltext-gray-900 mb-6 h-8 max-w-5xl font-display md:h-14 md:text-5xl">
        {rotateTitle ? (
          <ReactTextRotate texts={rotateData} speed={1.5} period={1000} />
        ) : (
          title
        )}
      </h1>
      <div className="flex max-w-2xl flex-col gap-6 font-body leading-relaxed text-gray-500">
        {children}
      </div>
    </div>
  );
};
