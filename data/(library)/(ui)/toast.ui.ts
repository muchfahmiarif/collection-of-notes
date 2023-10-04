import { cardProps } from "@/types/card.type";
import { MdCircleNotifications } from "react-icons/md";
import DefaultLight from "@/public/images/library/default-light.svg";
import DefaultDark from "@/public/images/library/default-dark.svg";
import { TbSquareLetterH } from "react-icons/tb";
import ReactHotToastLight from "@/public/images/library/ui/toast/react-hot-toast-light.svg";
import ReactHotToastDark from "@/public/images/library/ui/toast/react-hot-toast-dark.svg";

export const dataToast: cardProps[] = [
  {
    id: 1,
    name: "React Toastify",
    url: "https://fkhadra.github.io/react-toastify/introduction",
    icon: MdCircleNotifications,
    lightImage: DefaultLight,
    darkImage: DefaultDark,
    suggested: true,
    tags: [],
  },
  {
    id: 2,
    name: "React Hot Toast",
    url: "https://react-hot-toast.com/",
    icon: TbSquareLetterH,
    lightImage: ReactHotToastLight,
    darkImage: ReactHotToastDark,
    suggested: false,
    tags: [],
  },
];
