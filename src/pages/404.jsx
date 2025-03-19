import RootLayout from "@/components/common/layout/RootLayout";
import Error1 from "@/components/error/Error1";
import Head from "next/head";

const ErrorDark = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Oops! The page you are looking for does not exist." />
        <meta name="keywords" content="404 page, page not found, error page" />
        <meta property="og:title" content="Page Not Found" />
        <meta property="og:description" content="Sorry, the page you requested could not be found." />
        <meta property="og:image" content="/assets/imgs/og/404-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/404" />
      </Head>
      <main>
        <RootLayout header="header3" footer="none" defaultMode="dark">
          <Error1 />
        </RootLayout>
      </main>
    </>
  );
};

export default ErrorDark;
