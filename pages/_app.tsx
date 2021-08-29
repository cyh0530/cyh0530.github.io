import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import type { AppProps } from "next/app";
import { TITLE } from "../constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

    const router = useRouter();

    useEffect(() => {
      const handleRouteChange = (url: string) => {
        ga.pageView(url);
      };
      //When the component is mounted, subscribe to router changes
      //and log those page views
      router.events.on("routeChangeComplete", handleRouteChange);

      // If the component is unmounted, unsubscribe
      // from the event with the `off` method
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
