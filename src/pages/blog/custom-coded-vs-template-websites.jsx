import BlogDetails1 from "@/components/blog/BlogDetails1";
import BlogRelated from "@/components/blog/BlogRelated";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";

const BlogDetailsDark = () => {
  return (
    <>
      <Head>
        <title>Custom Coded Websites vs Template Websites</title>
        <meta name="title" content="Why Custom-Coded Websites Outperform Template Websites like WordPress and Wix" />
        <meta name="description" content="Discover the benefits of custom-coded websites over template websites like WordPress and Wix. Learn why custom solutions offer better performance, flexibility, and SEO advantages." />
        <meta name="keywords" content="custom-coded websites, template websites, WordPress, Wix, website performance, website design, web development, SEO, flexible websites, custom web solutions" />
        <meta property="og:title" content="Why Custom-Coded Websites Outperform Template Websites like WordPress and Wix" />
        <meta property="og:description" content="Explore why custom-coded websites outperform template platforms like WordPress and Wix, offering more control, flexibility, and improved SEO performance." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.nepstudio.com.au/blog/custom-coded-vs-template-websites" />
        <meta property="og:image" content="/assets/imgs/og/blog-1.jpg" />
        <meta name="twitter:title" content="Why Custom-Coded Websites Outperform Template Websites like WordPress and Wix" />
        <meta name="twitter:description" content="Learn why custom-coded websites are superior to template platforms like WordPress and Wix in terms of performance, customization, and SEO." />
        <meta name="twitter:image" content="/assets/imgs/og/blog-1.jpg" />
        <meta name="twitter:card" content="/assets/imgs/og/blog-1.jpg" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <BlogDetails1 id={1} />
          <BlogRelated />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsDark;
