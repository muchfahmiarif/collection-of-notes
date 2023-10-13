import Gradient from "@/public/images/home/gradient.svg";
import Square from "@/public/images/home/square.svg";
import Figma from "@/public/images/home/figma.svg";
import React from "@/public/images/home/react-js.svg";
import Svelte from "@/public/images/home/svelte.webp";
import Tailwind from "@/public/images/home/tailwind.webp";
import Vue from "@/public/images/home/vue.webp";
import Qwik from "@/public/images/home/qwik.svg";
import Safari from "@/public/images/home/safari.webp";
import Chrome from "@/public/images/home/chrome.svg";
import Mobile from "@/public/images/home/mobile.svg";
import Desktop from "@/public/images/home/desktop.svg";
import Cursor from "@/public/images/home/cursor.svg";
import Builder from "@/public/images/home/builder.svg";
import FigmaTwo from "@/public/images/home/figma-two.svg";

export const frameworks = ["react", "chrome", "qwik", "mobile", "tailwind", "desktop", "vue", "safari", "svelte"] as const;

export type Framework = (typeof frameworks)[number];

// export const assets = {
//   gradient: Gradient,
//   square: Square,
//   figma: Figma,
//   react: React,
//   svelte: Svelte,
//   tailwind: Tailwind,
//   vue: Vue,
//   qwik: Qwik,
//   safari: Safari,
//   chrome: Chrome,
//   mobile: Mobile,
//   desktop: Desktop,
//   cursor: Cursor,
//   builder: Builder,
//   figmatwo: FigmaTwo,
// };

export const assets = {
  gradient: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F266e05dba3864799b4715cf4bfd8aa2a",
  square: "https://cdn.builder.io/api/v1/image/assets%2F59c1eb70ac794598ae9d87541c737bee%2F9bb8373a362141b99ec58842565ba154", // Pribadi
  figma: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe82b4bbd5a7c45b49897b9570893dfe2",
  react: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F95c70a06f779481a957c2b384e3a270d",
  svelte: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ffbe9dfb6bb09448ba4fe5feb4bb0e53e?format=webp",
  tailwind: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8d0b6724f6f6496dbf124bfc3af2a0b0?format=webp",
  vue: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F73a54a19443e48fab077e6f21687cd20?format=webp",
  qwik: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fddb7b5acc2d747f198e8ed90dc245f1a",
  safari: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F22ac9809c08e438db8e5716758a0b4ee?format=webp",
  chrome: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ff4c72f33c40b4b7bb220cffbc17ef2c2",
  mobile: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc9bace408c6a4ab6b13a24b947f96517",
  desktop: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0cd3a13636be4aff87208714780c356c",
  builder: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F539de6bea0334a14afdfcccd452bf8a8",
  figmatwo: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8e5e45f981514bac840e2a5f1d46e579",
  cursor: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fbba6d6b3473d436098e3637650f64ee2",
};
