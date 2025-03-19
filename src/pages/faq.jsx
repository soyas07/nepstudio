import RootLayout from "@/components/common/layout/RootLayout";
import FaqCTA from "@/components/cta/FaqCTA";
import Faq1 from "@/components/faq/Faq1";
import Head from "next/head";

const FaqDark = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Frequently asked questions about NEPSTUDIO's web development, SEO strategies, and custom digital services." />
        <meta name="keywords" content="FAQ, NEPSTUDIO FAQs, web development questions, SEO services" />
        <meta property="og:title" content="FAQ - NEPSTUDIO" />
        <meta property="og:description" content="Get answers to common questions about our custom web development and SEO services." />
        <meta property="og:image" content="/assets/imgs/og/home-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/faq" />
        <title>FAQ - NEPSTUDIO</title>
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Faq1 />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default FaqDark;
