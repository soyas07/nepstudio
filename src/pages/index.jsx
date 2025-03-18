import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyHero from "@/components/hero/DigitalAgencyHero";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import DigitalAgencyAbout from "@/components/about/DigitalAgencyAbout";
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import DigitalAgencyBlog from "@/components/blog/DigitalAgencyBlog";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import StartupAgencyPortfolio from "@/components/portfolio/StartupAgencyPortfolio";
import Faq1 from "@/components/faq/Faq1";

const DigitalAgency = () => {
  return (
    <div>
      <Head>
        <title>Nepstudio - Creating Custom Web Design</title>
        <meta name="description" content="Digital Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DigitalAgencyHero />
          <DigitalAgencyRoll />
          <DigitalAgencyAbout />
          <DigitalAgencyService />
          <StartupAgencyPortfolio />
          <DigitalAgencyWorkflow />
          <DigitalAgencyBlog />
          <Faq1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default DigitalAgency;
