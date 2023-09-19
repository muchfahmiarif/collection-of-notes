import { SiFauna, SiFirebase, SiMongodb, SiSupabase, SiPlanetscale, SiUpstash, SiCockroachlabs, SiAmazondocumentdb } from "react-icons/si";
import { HiDatabase } from "react-icons/hi";
import { PiButterflyFill } from "react-icons/pi";
import FacebookImage from "@/public/images/facebook.svg";
import MongoDB from "@/public/images/library/database/mongodb.svg";
import Fauna from "@/public/images/library/database/fauna.svg";
import Firebase from "@/public/images/library/database/firebase.svg";
import Planetscale from "@/public/images/library/database/planetscale.svg";
import Upstash from "@/public/images/library/database/upstash.svg";
import Cockroachlabs from "@/public/images/library/database/cockroachlabs.svg";

export const Data = [
  {
    id: 1,
    name: "Mongo DB",
    url: "https://www.mongodb.com/",
    icon: SiMongodb,
    image: MongoDB,
  },
  {
    id: 2,
    name: "Fauna",
    url: "https://fauna.com/",
    icon: SiFauna,
    image: Fauna,
  },
  {
    id: 3,
    name: "Firebase",
    url: "https://firebase.google.com/",
    icon: SiFirebase,
    image: Firebase,
  },
  {
    id: 4,
    name: "Supabase",
    url: "https://supabase.io/",
    icon: SiSupabase,
    image: FacebookImage,
  },
  {
    id: 5,
    name: "Planetscale",
    url: "https://planetscale.com/",
    icon: SiPlanetscale,
    image: Planetscale,
  },
  {
    id: 6,
    name: "Neon Tech",
    url: "https://neon.tech/",
    icon: HiDatabase,
    image: FacebookImage,
  },
  {
    id: 7,
    name: "Upstash",
    url: "https://upstash.com/",
    icon: SiUpstash,
    image: Upstash,
  },
  {
    id: 8,
    name: "Xata",
    url: "https://xata.io/",
    icon: PiButterflyFill,
    image: FacebookImage,
  },
  {
    id: 9,
    name: "Cockroach DB",
    url: "https://www.cockroachlabs.com/",
    icon: SiCockroachlabs,
    image: Cockroachlabs,
  },
  {
    id: 10,
    name: "Amazon Aurora",
    url: "https://aws.amazon.com/aurora/",
    icon: SiAmazondocumentdb,
    image: FacebookImage,
  },
  {
    id: 11,
    name: "Amazon DynamoDB",
    url: "https://aws.amazon.com/dynamodb/",
    icon: SiAmazondocumentdb,
    image: FacebookImage,
  },
];
