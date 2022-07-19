import React from "react";
import Head from "next/head";
import clsx from "clsx";

export default function PageLayout({ title, className, children }) {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="py-10 bg-slate-50 min-h-screen flex flex-col items-center">
        <div
          className={clsx(
            "w-11/12 h-full flex flex-col items-center",
            className
          )}
        >
          {children}
        </div>
      </main>
    </>
  );
}
