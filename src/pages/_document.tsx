import type { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body className="dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
