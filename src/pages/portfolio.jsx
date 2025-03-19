import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";
import DesignStudioProtfolio from "@/components/portfolio/DesignStudioProtfolio";
import Head from "next/head";

const PortfolioV3Dark = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Explore NEPSTUDIO's portfolio of custom websites and digital projects that demonstrate our expertise and creativity." />
        <meta name="keywords" content="portfolio, NEPSTUDIO portfolio, custom websites, web development projects" />
        <meta property="og:title" content="NEPSTUDIO Portfolio" />
        <meta property="og:description" content="Discover our portfolio showcasing custom websites and digital projects." />
        <meta property="og:image" content="/assets/imgs/og/home-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/portfolio" />
        <title>NEPSTUDIO Portfolio</title>
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DesignStudioProtfolio />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV3Dark;
