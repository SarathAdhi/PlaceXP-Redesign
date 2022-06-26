import { useEffect, useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "../common/components/navbar/Navbar";
import Footer from "../common/components/footer/Footer";
import { PageLoadingAnimation } from "../common/PageLoadingAnimation";

function MyApp({ Component, pageProps }) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [sessionDetails, setSessionDetails] = useState("");

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => setIsPageLoading(false), 2000);

    const session = sessionStorage.getItem("login-session");
    setSessionDetails(session ? JSON.parse(session) : "");
  }, [isPageLoading]);

  if (isPageLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <PageLoadingAnimation className="w-60" />
      </div>
    );
  return (
    <>
      <Navbar />
      <Component {...pageProps} router={router} session={sessionDetails} />
      <Footer />
    </>
  );
}

export default MyApp;
