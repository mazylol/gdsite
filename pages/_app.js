import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Head>
        <title>Game Design</title>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
    </>
  );
}

export default MyApp;
