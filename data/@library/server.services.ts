import { SiKoyeb, SiNetlify, SiRailway, SiRender, SiVercel } from "react-icons/si";
import { TbHexagon3D } from "react-icons/tb";
import { CgServerless } from "react-icons/cg";
import { AiOutlineCloudServer } from "react-icons/ai";
import Vercel from "@/public/images/library/server/vercel.svg";
import Netlify from "@/public/images/library/server/netlify.svg";
import Qovery from "@/public/images/library/server/qovery.svg";
import Railway from "@/public/images/library/server/railway.svg";
import Render from "@/public/images/library/server/render.svg";
import Cyclic from "@/public/images/library/server/cyclic.svg";
import FlyIo from "@/public/images/library/server/logo.svg";
import BigDataCloud from "@/public/images/library/server/bigDataCloud.svg";
import Koyeb from "@/public/images/library/server/koyeb.svg";

export type ServerService = {
  id: number;
  name: string;
  url: string;
  icon: string;
  image: string;
  tags: string[];
};

export const dataServer: ServerService[] = [
  {
    id: 1,
    name: "Vercel",
    url: "https://vercel.com",
    icon: SiVercel,
    image: Vercel,
    tags: ["nodejs", "api", "serverless", "ci-cd"],
  },
  {
    id: 2,
    name: "Netlify",
    url: "https://netlify.com",
    icon: SiNetlify,
    image: Netlify,
    tags: ["nodejs", "api", "serverless"],
  },
  {
    id: 3,
    name: "Qovery",
    url: "https://qovery.com",
    icon: TbHexagon3D,
    image: Qovery,
    tags: ["AWS"],
  },
  {
    id: 4,
    name: "Railway",
    url: "https://railway.app",
    icon: SiRailway,
    image: Railway,
    tags: ["laravel", "nodejs", "api", "serverless"],
  },
  {
    id: 5,
    name: "Render",
    url: "https://render.com",
    icon: SiRender,
    image: Render,
    tags: ["database", "docker", "nodejs", "api"],
  },
  {
    id: 6,
    name: "Cyclic",
    url: "https://cyclic.sh",
    icon: CgServerless,
    image: Cyclic,
    tags: ["serverless", "nodejs", "python", "go"],
  },
  {
    id: 7,
    name: "Fly.io",
    url: "https://fly.io",
    icon: CgServerless,
    image: FlyIo,
    tags: ["vm", "nodejs", "elixir", "rails", "python", "go"],
  },
  {
    id: 8,
    name: "Big Data Cloud",
    url: "https://www.bigdatacloud.com",
    icon: AiOutlineCloudServer,
    image: BigDataCloud,
    tags: ["api"],
  },
  {
    id: 9,
    name: "Koyeb",
    url: "https://www.koyeb.com",
    icon: SiKoyeb,
    image: Koyeb,
    tags: ["api", "workers"],
  },
];
