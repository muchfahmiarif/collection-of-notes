import { cardProps, defaultSomeType } from "@/types/card.type";

export const dataApiClient: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Bruno",
    url: "https://www.usebruno.com/",
    suggested: false,
    tags: ["multi os"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Thunder Client",
    url: "https://www.thunderclient.com/",
    suggested: false,
    tags: ["vs code"],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Insomnia",
    url: "https://insomnia.rest/",
    suggested: false,
    tags: ["multi os", "need login"],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Postman",
    url: "https://www.postman.com/",
    suggested: false,
    tags: ["multi os"],
  },
];
