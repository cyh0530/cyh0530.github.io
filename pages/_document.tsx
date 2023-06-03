import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
import { FAVICON, SITE_DESC } from "../constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href={FAVICON} />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css"
          />
          <meta property="description" content={SITE_DESC} />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N6TYPX5L3Y"
          ></Script>
          <Script id="ga">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-N6TYPX5L3Y');`
            }
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
