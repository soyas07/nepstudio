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
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8R9Z6B5ZP"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-S8R9Z6B5ZP');
        </script>
      </Head>
      <body>
        // <GoogleAnalytics gaId="G-S8R9Z6B5ZP" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
