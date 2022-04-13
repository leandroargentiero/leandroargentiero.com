// @ts-expect-error
import ReactTextRotate from 'react-text-rotate';

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
}: IPageHeader) => (
  <div className="mt-24 px-4 lg:mt-32 lg:pl-44">
    <h1 className="mb-6 h-8 max-w-5xl font-display text-3xl text-gray-900 md:h-14 md:text-5xl">
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
