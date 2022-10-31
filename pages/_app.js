import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "@/styles/globals.scss";
import PageLayout from "@/components/PageLayout/PageLayout";

function MyApp({ Component, pageProps }) {
  const [percents, setPercents] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      // if (loader) loader.remove();
      if (loader) {
        console.log("loader: true");
        if (percents < 100) {
          console.log("loading < 100");
          setTimeout(() => {
            setPercents((curr) => curr + 1);
            const p = document.getElementById("percentageCounter");
            p.innerHTML = percents + "%";
          }, 10);
        } else {
          setIsLoading(false);
          loader.remove();
        }
      }
    }
    window.DOMCon;
  }, [percents]);

  return (
    <>
      {isLoading ? null : (
        <React.Fragment>
          <PageLayout>
            <Navbar />
            <Component {...pageProps} />
          </PageLayout>
        </React.Fragment>
      )}
    </>
  );
}

export default MyApp;
