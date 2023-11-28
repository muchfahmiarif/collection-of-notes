import { cardProps, defaultSomeType } from "@/types/card.type";

export const dataCarousel: cardProps[] = [
  {
    ...defaultSomeType,
    id: 1,
    name: "Glide JS",
    url: "https://glidejs.com/",
    suggested: true,
    tags: ["lightweight"],
  },
  {
    ...defaultSomeType,
    id: 2,
    name: "Slick",
    url: "https://kenwheeler.github.io/slick/",
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 3,
    name: "Swiper",
    url: "https://swiperjs.com/",
    suggested: true,
    tags: ["customizable"],
  },
  {
    ...defaultSomeType,
    id: 4,
    name: "Splide",
    url: "https://splidejs.com/",
    suggested: true,
    tags: ["lightweight"],
  },
  {
    ...defaultSomeType,
    id: 5,
    name: "Flickity",
    url: "https://flickity.metafizzy.co/",
    tags: [],
  },
  {
    ...defaultSomeType,
    id: 6,
    name: "Tiny Slider",
    url: "https://ganlanyuan.github.io/tiny-slider/",
  },
];
