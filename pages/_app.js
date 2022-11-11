import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "@/styles/globals.scss";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import Player from "@/components/Player/Player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Timeline from "@/components/Timeline/Timeline";
import Footer from "@/components/Footer/Footer";
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
          <Navbar />
          <Player />

          <SmoothScroll>
            <Component {...pageProps} />
          </SmoothScroll>
          <Footer />
        </React.Fragment>
      )}
    </>
  );
}

export default MyApp;
