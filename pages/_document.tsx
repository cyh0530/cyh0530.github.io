import Document, { Html, Head, Main, NextScript } from "next/document";
import { FAVICON, SITE_DESC } from "../constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href={FAVICON} />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css"/>
          <meta property="description" content={SITE_DESC} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
