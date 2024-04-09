import { cardProps, defaultSomeType } from "@/types/card.type";

import { SiFauna, SiFirebase, SiMongodb, SiSupabase, SiPlanetscale, SiUpstash, SiCockroachlabs, SiAmazondocumentdb, SiVercel } from "react-icons/si";
import { HiDatabase } from "react-icons/hi";
import { PiButterflyFill } from "react-icons/pi";

import FacebookImage from "@/public/images/facebook.svg";
import MongoDB from "@/public/images/library/services/database/mongodb.svg";
import Fauna from "@/public/images/library/services/database/fauna.svg";
import Firebase from "@/public/images/library/services/database/firebase.svg";
import PlanetscaleLight from "@/public/images/library/services/database/planetscale-light.svg";
import PlanetscaleDark from "@/public/images/library/services/database/planetscale-dark.svg";
import Upstash from "@/public/images/library/services/database/upstash.svg";
import Cockroachlabs from "@/public/images/library/services/database/cockroachlabs.svg";
import Supabase from "@/public/images/library/services/database/supabase.svg";
import Neon from "@/public/images/library/services/database/neon.svg";
import Xata from "@/public/images/library/services/database/butterfly-fill.svg";
import VercelLight from "@/public/images/library/services/server/vercel-light.svg";
import VercelDark from "@/public/images/library/services/server/vercel-dark.svg";

export const dataDatabase: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Mongo DB",
    url: "https://www.mongodb.com/",
    icon: SiMongodb,
    lightImage: MongoDB,
    darkImage: MongoDB,
    suggested: true,
    tags: ["nosql", "mongodb"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Fauna",
    url: "https://fauna.com/",
    icon: SiFauna,
    lightImage: Fauna,
    darkImage: Fauna,
    suggested: true,
    tags: ["json"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Firebase",
    url: "https://firebase.google.com/docs/database",
    icon: SiFirebase,
    lightImage: Firebase,
    darkImage: Firebase,
    suggested: true,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Supabase",
    url: "https://supabase.io/",
    icon: SiSupabase,
    lightImage: Supabase,
    darkImage: Supabase,
    suggested: true,
    tags: ["postgres", "sql"],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "Neon Tech",
    url: "https://neon.tech/",
    icon: HiDatabase,
    lightImage: Neon,
    darkImage: Neon,
    suggested: true,
    tags: ["sql", "postgres"],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Upstash",
    url: "https://upstash.com/",
    icon: SiUpstash,
    lightImage: Upstash,
    darkImage: Upstash,
    suggested: true,
    tags: ["redis", "kafka", "qstash"],
  },
  {
    ...defaultSomeType,
    id: 7,
    name: "Xata",
    url: "https://xata.io/",
    icon: PiButterflyFill,
    lightImage: Xata,
    darkImage: Xata,
    suggested: true,
    tags: ["postgres", "sql"],
  },
  {
    ...defaultSomeType,
    id: 8,
    name: "Cockroach DB",
    url: "https://www.cockroachlabs.com/",
    icon: SiCockroachlabs,
    lightImage: Cockroachlabs,
    darkImage: Cockroachlabs,
    suggested: false,
    tags: ["sql"],
  },
  {
    ...defaultSomeType,
    id: 9,
    name: "Amazon Aurora",
    url: "https://aws.amazon.com/aurora/",
    icon: SiAmazondocumentdb,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 10,
    name: "Amazon DynamoDB",
    url: "https://aws.amazon.com/dynamodb/",
    icon: SiAmazondocumentdb,
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 11,
    name: "Vercel Database",
    url: "https://vercel.com/storage",
    icon: SiVercel,
    lightImage: VercelLight,
    darkImage: VercelDark,
    tags: ["redis", "postgres"],
  },
];
