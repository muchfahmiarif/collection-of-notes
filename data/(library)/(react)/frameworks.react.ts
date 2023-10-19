import { cardProps, defaultSomeType } from "@/types/card.type";

export const dataFrameworks: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Next Js",
    url: "https://nextjs.org/",
    tags: ["react"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Gatsby",
    url: "https://www.gatsbyjs.com/",
    tags: ["react"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Remix",
    url: "https://remix.run/",
    tags: ["react"],
  },
];
