// @ts-expect-error
import ReactTextRotate from 'react-text-rotate';

interface IPageHeader {
  children?: React.ReactNode;
  rotateTitle?: boolean;
  rotateData?: string[];
  title?: string;
  summary?: string;
}

export const PageHeader = ({
  children,
  rotateTitle = false,
  rotateData,
  title,
  summary,
}: IPageHeader) => (
  <header className="mt-24 max-w-6xl px-4 lg:mt-32  lg:pl-44">
    <h1 className="mb-6 font-display text-3xl text-gray-900 dark:text-gray-50 md:text-5xl md:leading-tight">
      {rotateTitle ? (
        <div className="h-8 md:h-14">
          <ReactTextRotate texts={rotateData} speed={1.5} period={1000} />
        </div>
      ) : (
        title
      )}
    </h1>
    <h2 className="max-w-2xl font-body leading-relaxed text-gray-500 dark:text-gray-400">
      {summary}
    </h2>
    <div className="flex max-w-2xl flex-col gap-6 font-body leading-relaxed text-gray-500 dark:text-gray-400">
      {children}
    </div>
  </header>
);
