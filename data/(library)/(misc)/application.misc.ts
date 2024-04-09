import { cardProps, defaultSomeType } from "@/types/card.type";

export const dataApplicationMisc: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Zenstack",
    url: "https://zenstack.dev/",
    tags: ["backend"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Click Vote",
    url: "https://clickvote.dev/",
    tags: ["feature"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Let's Encrypt",
    url: "https://letsencrypt.org/",
    tags: ["security", "ssl"],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Phase",
    url: "https://phase.dev/",
    tags: [".env"],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "UseFlytrap",
    url: "https://www.useflytrap.com/",
    tags: ["bug", "error", "production"],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Tinybird",
    url: "https://www.tinybird.co/",
    tags: ["database", "data", "api"],
  },
];
