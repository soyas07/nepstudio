import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Preloader from "@/components/preloader/Preloader";
import { useEffect, useRef, useState } from "react";
import allNavData from "../../../data/navData.json";
import CursorAnimation from "../CursorAnimation";
import ScrollTop from "../ScrollTop";

const HeaderContent = ({ header, navData }) => {
    return <Header3 />;
};
const FooterContent = ({ footer }) => {
  return <Footer3 />;
};

export default function RootLayout({
  children,
  header = "",
  footer = "",
  defaultMode = "",
}) {
  const [mode, setMode] = useState(defaultMode);
  const [navData, setNavData] = useState({});

  const cursor1 = useRef();
  const cursor2 = useRef();
  useEffect(() => {
    setNavData(allNavData);
    if (typeof window !== "undefined") {
      if (mode == "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [mode]);
  return (
    <>
        <div className="has-smooth" id="has_smooth"></div>
        <Preloader />
        <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
        <ScrollTop />
        <HeaderContent header={header} navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterContent footer={footer} />
          </div>
        </div>
    </>
  );
}
