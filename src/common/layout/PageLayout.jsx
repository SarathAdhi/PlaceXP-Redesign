import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import clsx from "clsx";
import Footer from "../components/footer/Footer";

export default function PageLayout({ title, className, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="bg-slate-50 min-h-screen flex flex-col items-center">
        <div className={clsx("w-11/12 flex flex-col items-center", className)}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
