import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import Head from "next/head";

const AboutDark = () => {
  return (
    <div>
      <Head>
        <title>About NEPSTUDIO</title>
        <meta name="description" content="Learn more about NEPSTUDIO and our approach to building custom, high-performance websites that drive business success." />
        <meta name="keywords" content="about NEPSTUDIO, web development, custom websites, SEO strategies, responsive web design" />
        <meta property="og:title" content="About NEPSTUDIO" />
        <meta property="og:description" content="Learn more about NEPSTUDIO and how we create innovative, SEO-optimized websites." />
        <meta property="og:image" content="/assets/imgs/og/home-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/about" />
      </Head>
      <main>
        <RootLayout defaultMode="dark">
          <AboutHero />
          <AboutStory />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default AboutDark;
