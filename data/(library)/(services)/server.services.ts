import { cardProps, defaultSomeType } from "@/types/card.type";

import { SiKoyeb, SiNetlify, SiRailway, SiRender, SiVercel } from "react-icons/si";
import { TbHexagon3D } from "react-icons/tb";
import { CgServerless } from "react-icons/cg";
import { AiOutlineCloudServer } from "react-icons/ai";

import VercelLight from "@/public/images/library/services/server/vercel-light.svg";
import VercelDark from "@/public/images/library/services/server/vercel-dark.svg";
import Netlify from "@/public/images/library/services/server/netlify.svg";
import Qovery from "@/public/images/library/services/server/qovery.svg";
import Railway from "@/public/images/library/services/server/railway.svg";
import Render from "@/public/images/library/services/server/render.svg";
import Cyclic from "@/public/images/library/services/server/cyclic.svg";
import FlyIo from "@/public/images/library/services/server/logo.svg";
import BigDataCloud from "@/public/images/library/services/server/bigDataCloud.svg";
import Koyeb from "@/public/images/library/services/server/koyeb.svg";

export const dataServer: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Vercel",
    url: "https://vercel.com",
    icon: SiVercel,
    lightImage: VercelLight,
    darkImage: VercelDark,
    suggested: true,
    tags: ["nodejs", "api", "serverless", "ci-cd"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Netlify",
    url: "https://netlify.com",
    icon: SiNetlify,
    lightImage: Netlify,
    darkImage: Netlify,
    suggested: true,
    tags: ["nodejs", "api", "serverless"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Qovery",
    url: "https://qovery.com",
    icon: TbHexagon3D,
    lightImage: Qovery,
    darkImage: Qovery,
    suggested: false,
    tags: ["AWS"],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Railway",
    url: "https://railway.app",
    icon: SiRailway,
    lightImage: Railway,
    darkImage: Railway,
    suggested: false,
    tags: ["laravel", "nodejs", "api", "serverless"],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "Render",
    url: "https://render.com",
    icon: SiRender,
    lightImage: Render,
    darkImage: Render,
    suggested: false,
    tags: ["database", "docker", "nodejs", "api"],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Cyclic",
    url: "https://cyclic.sh",
    icon: CgServerless,
    lightImage: Cyclic,
    darkImage: Cyclic,
    suggested: false,
    tags: ["serverless", "nodejs", "python", "go"],
  },
  {
    ...defaultSomeType,
    id: 7,
    name: "Fly.io",
    url: "https://fly.io",
    icon: CgServerless,
    lightImage: FlyIo,
    darkImage: FlyIo,
    suggested: true,
    tags: ["vm", "nodejs", "elixir", "rails", "python", "go"],
  },
  {
    ...defaultSomeType,
    id: 8,
    name: "Big Data Cloud",
    url: "https://www.bigdatacloud.com",
    icon: AiOutlineCloudServer,
    lightImage: BigDataCloud,
    darkImage: BigDataCloud,
    suggested: false,
    tags: ["api"],
  },
  {
    ...defaultSomeType,
    id: 9,
    name: "Koyeb",
    url: "https://www.koyeb.com",
    icon: SiKoyeb,
    lightImage: Koyeb,
    darkImage: Koyeb,
    suggested: false,
    tags: ["api", "workers"],
  },
];
