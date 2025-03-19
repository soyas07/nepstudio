import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import ServiceElementV2 from "@/components/service/ServiceElementV2";
import Head from "next/head";

const ServiceV2Dark = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Discover the custom web development and SEO services offered by NEPSTUDIO to help grow your business." />
        <meta name="keywords" content="web development services, SEO services, digital marketing, custom websites" />
        <meta property="og:title" content="Our Services - NEPSTUDIO" />
        <meta property="og:description" content="Learn more about NEPSTUDIO's custom web development and SEO services to boost your online presence." />
        <meta property="og:image" content="/assets/imgs/og/home-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/services" />
        <title>Our Services - NEPSTUDIO</title>
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <ServiceElementV2 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceV2Dark;
