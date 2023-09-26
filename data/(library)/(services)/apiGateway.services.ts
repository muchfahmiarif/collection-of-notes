import { cardProps } from "@/types/card.type";
import { SiKong } from "react-icons/si";
import { IoIosLeaf } from "react-icons/io";
import { GiOctopus } from "react-icons/gi";
import SiKongImage from "@/public/images/library/api-gateway/kong.svg";
import Tyk from "@/public/images/library/api-gateway/tyk.svg";
import KrakenD from "@/public/images/library/api-gateway/krakend.svg";

export const dataAPIGateway: cardProps[] = [
  {
    id: 1,
    name: "Konghq",
    url: "https://konghq.com/kong/",
    icon: SiKong,
    lightImage: SiKongImage,
    darkImage: SiKongImage,
    tags: [],
  },
  {
    id: 2,
    name: "Tyk",
    url: "https://tyk.io/",
    icon: IoIosLeaf,
    lightImage: Tyk,
    darkImage: Tyk,
    tags: [],
  },
  {
    id: 3,
    name: "KrakenD",
    url: "https://www.krakend.io/",
    icon: GiOctopus,
    lightImage: KrakenD,
    darkImage: KrakenD,
    tags: [],
  },
];
