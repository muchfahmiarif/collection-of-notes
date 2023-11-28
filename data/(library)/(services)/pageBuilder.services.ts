import { type cardProps, defaultSomeType } from "@/types/card.type";

export const dataPageBuilder: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Prosmic",
    url: "https://prismic.io",
    suggested: true,
    tags: ["CMS", "API"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Contentful",
    url: "https://contentful.com",
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Sanity",
    url: "https://sanity.io",
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Storyblok",
    url: "https://storyblok.com",
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "Strapi",
    url: "https://strapi.io",
    suggested: false,
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Builder.io",
    url: "https://builder.io",
    suggested: false,
    tags: [],
  },
];
