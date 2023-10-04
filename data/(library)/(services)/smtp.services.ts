import { cardProps } from "@/types/card.type";
import { SiMailgun } from "react-icons/si";
import Mailgun from "@/public/images/library/services/smtp/mailgun.svg";
import SendGrid from "@/public/images/library/services/smtp/SG_Twilio_Lockup_RGB.svg";
import Mailjet from "@/public/images/library/services/smtp/mailjet-seeklogo.com.svg";
import { BsCursor } from "react-icons/bs";
import { PiIntersectSquareDuotone } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import ElasticEmail from "@/public/images/library/services/smtp/elastic-email-logos-id_ieeTVE-.svg";

export const dataSMTP: cardProps[] = [
  {
    id: 1,
    name: "Mailgun",
    url: "https://www.mailgun.com/",
    icon: SiMailgun,
    lightImage: Mailgun,
    darkImage: Mailgun,
    suggested: false,
    tags: [],
  },
  {
    id: 2,
    name: "Sendgrid",
    url: "https://sendgrid.com/",
    icon: PiIntersectSquareDuotone,
    lightImage: SendGrid,
    darkImage: SendGrid,
    suggested: false,
    tags: ["api", "webhook", "smtp relay"],
  },
  {
    id: 3,
    name: "Mailjet",
    url: "https://www.mailjet.com/",
    icon: BsCursor,
    lightImage: Mailjet,
    darkImage: Mailjet,
    suggested: false,
    tags: ["api", "smtp", "webhook"],
  },
  {
    id: 4,
    name: "Elastic Email",
    url: "https://elasticemail.com/",
    icon: LuMail,
    lightImage: ElasticEmail,
    darkImage: ElasticEmail,
    suggested: false,
    tags: ["api", "smtp"],
  },
];
