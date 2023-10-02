import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/menu-2.navbar";
import { NavigationMenuDemo } from "@/components/navbar/menu.navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const poppins = Poppins({
  weight: ["200", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      {/* <NavigationMenuDemo /> */}
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </main>
  );
}
