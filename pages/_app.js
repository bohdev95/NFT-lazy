import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "@/styles/globals.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const loader = document.getElementById("globalLoader");
  //     if (loader) loader.remove();
  //   }
  //   window.DOMCon;
  // }, []);

  return (
    <>
      <React.Fragment>
        <PageLayout>
          <Navbar />
          <Component {...pageProps} />
        </PageLayout>
      </React.Fragment>
    </>
  );
}

export default MyApp;
