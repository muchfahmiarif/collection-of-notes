import { cardProps, defaultSomeType } from "@/types/card.type";
import { SiFontawesome, SiIconfinder, SiIcons8, SiReact, SiUpstash } from "react-icons/si";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { IoShapesOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";
import { TbShield } from "react-icons/tb";

import FontAwesome from "@/public/images/library/ui/icons/fontawesome.svg";
import Icon8 from "@/public/images/library/ui/icons/icons8.svg";
import IconScoutLight from "@/public/images/library/ui/icons/iconscout-light.svg";
import IconBuddyLight from "@/public/images/library/ui/icons/iconsbuddy-light.png";
import IconScoutDark from "@/public/images/library/ui/icons/iconscout-dark.svg";
import IconFinderLight from "@/public/images/library/ui/icons/iconfinder-light.svg";
import IconFinderDark from "@/public/images/library/ui/icons/iconfinder-dark.svg";
import IconLucideLight from "@/public/images/library/ui/icons/iconlucide-light.svg";
import IconLucideDark from "@/public/images/library/ui/icons/iconlucide-dark.svg";
import ReactIcon from "@/public/images/library/ui/icons/react-icon.svg";
import HeroIcon from "@/public/images/library/ui/icons/hero-icon.svg";
import IconMonstLight from "@/public/images/library/ui/icons/iconmonstr-light.svg";
import IconMonstDark from "@/public/images/library/ui/icons/iconmonstr-dark.svg";
import TablerIconLight from "@/public/images/library/ui/icons/tabler-icons-light.svg";
import TablerIconDark from "@/public/images/library/ui/icons/tabler-icons-dark.svg";

export const dataIcons: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Font Awesome",
    url: "https://fontawesome.com/",
    icon: SiFontawesome,
    lightImage: FontAwesome,
    darkImage: FontAwesome,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Icon Buddy",
    url: "https://iconbuddy.app/",
    icon: IoShapesOutline,
    lightImage: IconBuddyLight,
    darkImage: FontAwesome,
    suggested: false,
    tags: [],
  },
  {
    id: 3,
    name: "Iconscout",
    url: "https://iconscout.com/",
    icon: HiMagnifyingGlassCircle,
    lightImage: IconScoutLight,
    darkImage: IconScoutDark,
    suggested: true,
    tags: [],
  },
  {
    id: 4,
    name: "Iconfinder",
    url: "https://www.iconfinder.com/",
    icon: SiIconfinder,
    lightImage: IconFinderLight,
    darkImage: IconFinderDark,
    suggested: false,
    tags: [],
  },
  {
    id: 5,
    name: "Icons8",
    url: "https://icons8.com/",
    icon: SiIcons8,
    lightImage: Icon8,
    darkImage: Icon8,
    suggested: false,
    tags: [],
  },
  {
    id: 6,
    name: "Iconmonstr",
    url: "https://iconmonstr.com/",
    icon: SiFontawesome,
    lightImage: IconMonstLight,
    darkImage: IconMonstDark,
    suggested: false,
    tags: [],
  },
  {
    id: 7,
    name: "Tabler Icon",
    url: "https://tabler-icons.io/",
    icon: FaPenNib,
    lightImage: TablerIconLight,
    darkImage: TablerIconDark,
    suggested: false,
    tags: [],
  },
  {
    id: 8,
    name: "Lucide Icons",
    url: "https://lucide.dev/icons/",
    icon: SiUpstash,
    lightImage: IconLucideLight,
    darkImage: IconLucideDark,
    suggested: true,
    tags: [],
  },
  {
    id: 9,
    name: "Heroicons",
    url: "https://heroicons.com/",
    icon: TbShield,
    lightImage: HeroIcon,
    darkImage: HeroIcon,
    suggested: false,
    tags: [],
  },
  {
    id: 10,
    name: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    icon: SiReact,
    lightImage: ReactIcon,
    darkImage: ReactIcon,
    suggested: true,
    tags: [],
  },
];
