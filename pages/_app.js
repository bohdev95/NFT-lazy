import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "@/styles/globals.scss";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import Player from "@/components/Player/Player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Timeline from "@/components/Timeline/Timeline";
gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  const [percents, setPercents] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      // if (loader) loader.remove();
      if (loader) {
        // console.log("loader: true");
        if (percents < 100) {
          // console.log("loading < 100");
          setTimeout(() => {
            setPercents((curr) => curr + 1);
            const p = document.getElementById("percentageCounter");
            p.innerHTML = percents + "%";
          }, 1);
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
          {/* <PageLayout> */}

          <Navbar />
          <Player />
          <Timeline />
          <SmoothScroll>
            <Component {...pageProps} />
          </SmoothScroll>
          {/* </PageLayout> */}
        </React.Fragment>
      )}
    </>
  );
}

export default MyApp;
