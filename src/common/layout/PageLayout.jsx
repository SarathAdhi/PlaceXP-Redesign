import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

export default function PageLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="bg-slate-50 min-h-screen flex justify-center">
        <Navbar />
        <div className="w-11/12 pt-24">{children}</div>
      </main>
    </>
  );
}
