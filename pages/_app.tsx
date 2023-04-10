import type { AppProps } from "next/app";

import "@/styles/index.css";
import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InvoiceForm from "@/components/Invoice/InvoiceForm";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Rio</title>
      </Head>
      <InvoiceForm />
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
