import { cardProps, defaultSomeType } from "@/types/card.type";

export const dataThemeDesign: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Neo Brutalism",
    url: "https://github.com/ekmas/neobrutalism-components",
    tags: ["tailwind", "react"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Neumorphism",
    url: "https://neumorphism.io/",
    tags: ["vanilla css"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Glassmorphism",
    url: "https://ui.glass/generator/",
    tags: ["vanilla css"],
  },
];
