import { Html, Head, Main, NextScript } from "next/document";
import $ from "jquery";
export default function Document() {
  return (
    <Html>
      <Head>
        <head>
          {/* uncoment this lates */}
          {/* connect webgl start */}
          <link rel="stylesheet" href="/preload.css" />
          {/* <script
            type="importmap"
            dangerouslySetInnerHTML={{
              __html: `
              {
				"imports": {
					"three": "/cybercity/build/three.module.js",
					"three/addons/": "./jsm/"
				}
			}
                  `,
            }}
          ></script> */}

          {/*  */}
        </head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <div id="globalLoader">
          <div className="loading_screen_content">
            <div className="loading_gradient"></div>
            <img src="/Logo_green.svg" alt="logo" />
            <div className="percent" id="percentageCounter">
              0%
            </div>
          </div>
        </div>
        {/* <div id="overlay">
          <div id="progstat"></div>
          <div id="progress"></div>
        </div> */}
        {/* uncoment this later */}
        {/* <script src="/preloader.js"></script> */}

        <script context="module" src="/testPreloader.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
