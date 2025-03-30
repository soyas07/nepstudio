import DigitalAgencyAbout from "@/components/about/DigitalAgencyAbout";
import DigitalAgencyBlog from "@/components/blog/DigitalAgencyBlog";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Faq1 from "@/components/faq/Faq1";
import DigitalAgencyHero from "@/components/hero/DigitalAgencyHero";
import StartupAgencyPortfolio from "@/components/portfolio/StartupAgencyPortfolio";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import Head from "next/head";

const DigitalAgency = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>Nepstudio - Creating Custom Web Design</title>
        <meta name="description" content="NEPSTUDIO specializes in custom-coded, high-performance websites designed to enhance your online presence. With SEO-driven strategies, responsive designs, and tailored solutions, we ensure your website stands out, maximizes engagement, and drives conversions." />
        <meta name="keywords" content="custom websites, SEO, web design, web development, responsive design, high-performance websites, brand identity, conversions, business growth" />
        <meta property="og:title" content="NEPSTUDIO - Custom Websites That Fuel Business Growth" />
        <meta property="og:description" content="NEPSTUDIO specializes in custom-coded, high-performance websites designed to enhance your online presence." />
        <meta property="og:image" content="/assets/imgs/og/home-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/" />
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

// Server-Side Rendering (SSR) Function
export async function getServerSideProps(context) {
  const { req } = context;
  const baseURL = `https://${req.headers.host}`; // Get the base URL dynamically

  console.log("Fetching from:", `${baseURL}/api/hello`);

  try {
    const res = await fetch(`${baseURL}/api/hello`);
    
    // Log the response status & headers
    console.log("Response Status:", res.status);
    console.log("Response Headers:", res.headers.get("content-type"));

    const text = await res.text(); // Read response as text for debugging
    console.log("Response Text:", text); 

    // Check if response is actually JSON
    const blog = JSON.parse(text);

    return { props: { blog } };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { props: { blog: null, error: "Failed to fetch blog" } };
  }
}

export default DigitalAgency;
