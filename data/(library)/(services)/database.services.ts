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
import Supabase from "@/public/images/library/database/supabase.svg";
import Neon from "@/public/images/library/database/neon.svg";
import Xata from "@/public/images/library/database/butterfly-fill.svg";
import { cardProps } from "@/types/card.type";

export const dataDatabase: cardProps[] = [
  {
    id: 1,
    name: "Mongo DB",
    url: "https://www.mongodb.com/",
    icon: SiMongodb,
    lightImage: MongoDB,
    darkImage: MongoDB,
    tags: ["nosql"],
  },
  {
    id: 2,
    name: "Fauna",
    url: "https://fauna.com/",
    icon: SiFauna,
    lightImage: Fauna,
    darkImage: Fauna,
    tags: [],
  },
  {
    id: 3,
    name: "Firebase",
    url: "https://firebase.google.com/docs/database",
    icon: SiFirebase,
    lightImage: Firebase,
    darkImage: Firebase,
    tags: [],
  },
  {
    id: 4,
    name: "Supabase",
    url: "https://supabase.io/",
    icon: SiSupabase,
    lightImage: Supabase,
    darkImage: Supabase,
    tags: [],
  },
  {
    id: 5,
    name: "Planetscale",
    url: "https://planetscale.com/",
    icon: SiPlanetscale,
    lightImage: Planetscale,
    darkImage: Planetscale,
    tags: [],
  },
  {
    id: 6,
    name: "Neon Tech",
    url: "https://neon.tech/",
    icon: HiDatabase,
    lightImage: Neon,
    darkImage: Neon,
    tags: [],
  },
  {
    id: 7,
    name: "Upstash",
    url: "https://upstash.com/",
    icon: SiUpstash,
    lightImage: Upstash,
    darkImage: Upstash,
    tags: ["redis", "kafka", "qstash"],
  },
  {
    id: 8,
    name: "Xata",
    url: "https://xata.io/",
    icon: PiButterflyFill,
    lightImage: Xata,
    darkImage: Xata,
    tags: [],
  },
  {
    id: 9,
    name: "Cockroach DB",
    url: "https://www.cockroachlabs.com/",
    icon: SiCockroachlabs,
    lightImage: Cockroachlabs,
    darkImage: Cockroachlabs,
    tags: [],
  },
  {
    id: 10,
    name: "Amazon Aurora",
    url: "https://aws.amazon.com/aurora/",
    icon: SiAmazondocumentdb,
    lightImage: FacebookImage,
    darkImage: FacebookImage,
    tags: [],
  },
  {
    id: 11,
    name: "Amazon DynamoDB",
    url: "https://aws.amazon.com/dynamodb/",
    icon: SiAmazondocumentdb,
    lightImage: FacebookImage,
    darkImage: FacebookImage,
    tags: [],
  },
];