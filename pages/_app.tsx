import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Tony Sebastian</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, height=device-height"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
