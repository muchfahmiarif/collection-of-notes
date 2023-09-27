import { cardProps } from "@/types/card.type";
import { SiFontawesome, SiIconfinder, SiIcons8, SiUpstash } from "react-icons/si";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { IoShapesOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";
import { TbShield } from "react-icons/tb";
import FontAwesome from "@/public/images/library/icons/fontawesome.svg";
import Icon8 from "@/public/images/library/icons/icons8.svg";
import IconScoutLight from "@/public/images/library/icons/iconscout-light.svg";
import IconBuddyLight from "@/public/images/library/icons/iconsbuddy-light.png";
import IconScoutDark from "@/public/images/library/icons/iconscout-dark.svg";
import IconFinderLight from "@/public/images/library/icons/iconfinder-light.svg";
import IconFinderDark from "@/public/images/library/icons/iconfinder-dark.svg";
import IconLucideLight from "@/public/images/library/icons/iconlucide-light.svg";
import IconLucideDark from "@/public/images/library/icons/iconlucide-dark.svg";

export const dataIcons: cardProps[] = [
  {
    id: 1,
    name: "Font Awesome",
    url: "https://fontawesome.com/",
    icon: SiFontawesome,
    lightImage: FontAwesome,
    darkImage: FontAwesome,
    tags: [],
  },
  {
    id: 2,
    name: "Icon Buddy",
    url: "https://iconbuddy.app/",
    icon: IoShapesOutline,
    lightImage: IconBuddyLight,
    darkImage: FontAwesome,
    tags: [],
  },
  {
    id: 3,
    name: "Iconscout",
    url: "https://iconscout.com/",
    icon: HiMagnifyingGlassCircle,
    lightImage: IconScoutLight,
    darkImage: IconScoutDark,
    tags: [],
  },
  {
    id: 4,
    name: "Iconfinder",
    url: "https://www.iconfinder.com/",
    icon: SiIconfinder,
    lightImage: IconFinderLight,
    darkImage: IconFinderDark,
    tags: [],
  },
  {
    id: 5,
    name: "Icons8",
    url: "https://icons8.com/",
    icon: SiIcons8,
    lightImage: Icon8,
    darkImage: Icon8,
    tags: [],
  },
  {
    id: 6,
    name: "Iconmonstr",
    url: "https://iconmonstr.com/",
    icon: SiFontawesome,
    lightImage: FontAwesome,
    darkImage: FontAwesome,
    tags: [],
  },
  {
    id: 7,
    name: "Tabler Icon",
    url: "https://tabler-icons.io/",
    icon: FaPenNib,
    lightImage: FontAwesome,
    darkImage: FontAwesome,
    tags: [],
  },
  {
    id: 8,
    name: "Lucide Icons",
    url: "https://lucide.dev/icons/",
    icon: SiUpstash,
    lightImage: IconLucideLight,
    darkImage: IconLucideDark,
    tags: [],
  },
  {
    id: 9,
    name: "Heroicons",
    url: "https://heroicons.com/",
    icon: TbShield,
    lightImage: FontAwesome,
    darkImage: FontAwesome,
    tags: [],
  },
  {
    id: 10,
    name: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    icon: SiFontawesome,
    lightImage: FontAwesome,
    darkImage: FontAwesome,
    tags: [],
  },
];
