import Blog1 from "@/components/blog/Blog1";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const BlogDark = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Explore NEPSTUDIO's blog for insights, tips, and trends on web development, SEO, and digital marketing." />
        <meta name="keywords" content="NEPSTUDIO blog, web development tips, SEO insights, digital marketing trends" />
        <meta property="og:title" content="Blog - NEPSTUDIO" />
        <meta property="og:description" content="Stay updated with NEPSTUDIO's blog for the latest articles on web development, SEO, and digital marketing." />
        <meta property="og:image" content="/assets/imgs/og/home-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/blog" />
        <title>Blog - NEPSTUDIO</title>
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Blog1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDark;
