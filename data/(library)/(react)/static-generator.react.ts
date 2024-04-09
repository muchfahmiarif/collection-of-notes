import { cardProps, defaultSomeType } from "@/types/card.type";

export const dataFrameworks: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "VitePress",
    url: "https://vitepress.dev/",
    tags: ["vue", "markdown"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Docusaurus",
    url: "https://docusaurus.io/",
    tags: ["markdown"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Nextra",
    url: "https://nextra.site/",
    tags: ["markdown"],
  },
];
