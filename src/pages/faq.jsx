import RootLayout from "@/components/common/layout/RootLayout";
import FaqCTA from "@/components/cta/FaqCTA";
import Faq1 from "@/components/faq/Faq1";
import Head from "next/head";

const FaqDark = () => {
  return (
    <>
      <Head>
        <title>Faq Dark</title>
        <meta name="description" content="Faq Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
