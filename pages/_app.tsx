import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
