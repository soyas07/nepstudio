import { GoogleAnalytics } from '@next/third-parties/google';
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/imgs/logo/favicon-nepstudio.png"
        />
      </Head>
      <body>
        <GoogleAnalytics gaId="G-S8R9Z6B5ZP" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
