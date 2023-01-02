import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Teste from "../Components/teste";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio G. Coutinho</title>
        <link rel="icon" href="../public/Logo2.ico" />
      </Head>
      <Teste>
        <Component {...pageProps} />
      </Teste>
    </>
  );
}
