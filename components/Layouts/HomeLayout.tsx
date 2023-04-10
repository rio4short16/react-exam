import Head from "next/head";
import React from "react";

const HomeLayout = ({ title, children }: { title: string; children: any }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <div className="min-h-[100vh] w-full flex flex-col items-center container mx-auto">
        <main className="flex-grow grid place-items-center items-center mt-[92px]">
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default HomeLayout;
