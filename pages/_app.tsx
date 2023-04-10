import type { AppProps } from "next/app";

import "@/styles/index.css";
import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Rio</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="light"
        closeOnClick
        draggable
      />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
