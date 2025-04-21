import "@/styles/extra.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { useEffect } from "react";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.('config', 'G-S8R9Z6B5ZP', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return <Component {...pageProps} />;
}
