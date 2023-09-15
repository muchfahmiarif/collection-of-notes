import Navbar from "@/components/navbar/menu-2.navbar";
import { NavigationMenuDemo } from "@/components/navbar/menu.navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <NavigationMenuDemo /> */}
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
}
