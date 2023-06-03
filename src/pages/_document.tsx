import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>webAww - AI Solutions</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="AI solutions for business" />
        <meta
          name="keywords"
          content="AI, ChatGPT, react components, react, web pages"
        />
        <meta name="author" content="webAww" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
