import { useEffect, useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "../common/components/navbar/Navbar";
import Footer from "../common/components/footer/Footer";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);
  const [sessionDetails, setSessionDetails] = useState("");

  const router = useRouter();

  useEffect(() => {
    setShowing(true);
    const session = sessionStorage.getItem("login-session");
    setSessionDetails(session ? JSON.parse(session) : "");
  }, []);

  if (!showing) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <Navbar />
        <Component {...pageProps} router={router} session={sessionDetails} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
