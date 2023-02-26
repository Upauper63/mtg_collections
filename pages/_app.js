import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href="/">TOP</Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
