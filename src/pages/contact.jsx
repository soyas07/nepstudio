import RootLayout from "@/components/common/layout/RootLayout";
import Contact1 from "@/components/contact/Contact1";
import Head from "next/head";

const ContactDark = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Get in touch with NEPSTUDIO for custom web development solutions, SEO strategies, and digital marketing services." />
        <meta name="keywords" content="contact NEPSTUDIO, web development contact, SEO services, custom websites" />
        <meta property="og:title" content="Contact NEPSTUDIO" />
        <meta property="og:description" content="Reach out to NEPSTUDIO for your custom website needs and digital services." />
        <meta property="og:image" content="/assets/imgs/contact-og.jpg" />
        <meta property="og:url" content="https://www.nepstudio.com.au/contact" />
        <title>Contact NEPSTUDIO</title>
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <Contact1 />
        </RootLayout>
      </main>
    </>
  );
};

export default ContactDark;
