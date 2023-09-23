import { libraryProps } from "@/types/library.type";
import { SiMailgun } from "react-icons/si";
import Mailgun from "@/public/images/library/smtp/mailgun.svg";
import SendGrid from "@/public/images/library/smtp/SG_Twilio_Lockup_RGB.svg";
import Mailjet from "@/public/images/library/smtp/mailjet-seeklogo.com.svg";
import { BsCursor } from "react-icons/bs";
import { PiIntersectSquareDuotone } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import ElasticEmail from "@/public/images/library/smtp/elastic-email-logos-id_ieeTVE-.svg";

export const dataSMTP: libraryProps[] = [
  {
    id: 1,
    name: "Mailgun",
    url: "https://www.mailgun.com/",
    icon: SiMailgun,
    image: Mailgun,
    tags: [],
  },
  {
    id: 2,
    name: "Sendgrid",
    url: "https://sendgrid.com/",
    icon: PiIntersectSquareDuotone,
    image: SendGrid,
    tags: ["api", "webhook", "smtp relay"],
  },
  {
    id: 3,
    name: "Mailjet",
    url: "https://www.mailjet.com/",
    icon: BsCursor,
    image: Mailjet,
    tags: ["api", "smtp", "webhook"],
  },
  {
    id: 4,
    name: "Elastic Email",
    url: "https://elasticemail.com/",
    icon: LuMail,
    image: ElasticEmail,
    tags: ["api", "smtp"],
  },
];
