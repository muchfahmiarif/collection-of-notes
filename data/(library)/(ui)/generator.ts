import { cardProps, defaultSomeType } from "@/types/card.type";

import Fffuel from "@/public/images/library/ui/generator/fffuel.svg";

export const dataGenerator: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Fffuel",
    url: "https://fffuel.co/",
    tags: ["svg", "color", "generator"],
    darkImage: Fffuel,
    lightImage: Fffuel,
    suggested: true,
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Avataaars",
    url: "https://getavataaars.com/",
    tags: ["svg", "avatar", "generator"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Dicebear",
    url: "https://www.dicebear.com/",
    tags: ["avatar"],
    suggested: true,
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Event Google Calendar",
    url: "https://decomaan.github.io/google-calendar-link-generator/",
    tags: ["calendar", "url"],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "Gradienty",
    url: "https://gradienty.codes/",
    tags: ["color", "tailwindcss"],
    suggested: true,
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Undraw",
    url: "https://undraw.co/",
    tags: ["svg", "illustration"],
    suggested: true,
  },
  {
    ...defaultSomeType,
    id: 7,
    name: "Meme",
    url: "https://imgflip.com/memetemplates",
    tags: ["meme", "picture"],
  },
  {
    ...defaultSomeType,
    id: 8,
    name: "Hero Patterns",
    url: "https://www.heropatterns.com/",
    tags: ["pattern", "background"],
  },
  {
    ...defaultSomeType,
    id: 9,
    name: "Clone UI",
    url: "https://clone-ui.design/",
    tags: ["ui", "template", "html"],
  },
];
