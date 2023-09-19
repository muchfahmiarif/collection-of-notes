import { SiNetlify, SiVercel } from "react-icons/si";
import Vercel from "@/public/images/library/server/vercel.svg";
import Netlify from "@/public/images/library/server/netlify.svg";

export type ServerService = {
  id: number;
  name: string;
  url: string;
  icon: string;
  image: string;
};

export const data: ServerService[] = [
  {
    id: 1,
    name: "Vercel",
    url: "https://vercel.com",
    icon: SiVercel,
    image: Vercel,
  },
  {
    id: 2,
    name: "Netlify",
    url: "https://netlify.com",
    icon: SiNetlify,
    image: Netlify,
  },
];
