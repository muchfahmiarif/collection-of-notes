import { cardProps, defaultSomeType } from "@/types/card.type";

import { MdCircleNotifications } from "react-icons/md";
import { TbSquareLetterH, TbSquareLetterN } from "react-icons/tb";

import DefaultLight from "@/public/images/library/default-light.svg";
import DefaultDark from "@/public/images/library/default-dark.svg";
import ReactHotToastLight from "@/public/images/library/ui/toast/react-hot-toast-light.svg";
import ReactHotToastDark from "@/public/images/library/ui/toast/react-hot-toast-dark.svg";
import Notistack from "@/public/images/library/ui/toast/notistack.png";

export const dataToast: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "React Toastify",
    url: "https://fkhadra.github.io/react-toastify/introduction",
    icon: MdCircleNotifications,
    lightImage: DefaultLight,
    darkImage: DefaultDark,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "React Hot Toast",
    url: "https://react-hot-toast.com/",
    icon: TbSquareLetterH,
    lightImage: ReactHotToastLight,
    darkImage: ReactHotToastDark,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Sonner",
    url: "https://sonner.emilkowal.ski/",
    icon: MdCircleNotifications,
    lightImage: DefaultLight,
    darkImage: DefaultDark,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Notistack",
    url: "https://notistack.com/",
    icon: TbSquareLetterN,
    lightImage: Notistack,
    darkImage: Notistack,
    suggested: false,
    tags: [],
  },
];
