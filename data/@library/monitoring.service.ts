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
  {
    id: 3,
    name: "Qovery",
    url: "https://qovery.com",
    icon: TbHexagon3D,
    image: Qovery,
  },
  {
    id: 4,
    name: "Railway",
    url: "https://railway.app",
    icon: SiRailway,
    image: Railway,
  },
  {
    id: 5,
    name: "Render",
    url: "https://render.com",
    icon: SiRender,
    image: Render,
  },
  {
    id: 6,
    name: "Cyclic",
    url: "https://cyclic.sh",
    icon: CgServerless,
    image: Cyclic,
  },
  {
    id: 7,
    name: "Fly.io",
    url: "https://fly.io",
    icon: CgServerless,
    image: FlyIo,
  },
  {
    id: 8,
    name: "Big Data Cloud",
    url: "https://www.bigdatacloud.com",
    icon: AiOutlineCloudServer,
    image: BigDataCloud,
  },
  {
    id: 9,
    name: "Koyeb",
    url: "https://www.koyeb.com",
    icon: SiKoyeb,
    image: Koyeb,
  },
];
