import type { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body>
        <div className="h-full">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
