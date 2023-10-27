/** @type {import('next').NextConfig} */
const nextConfig = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: false,
  },
  latex: true,
});

module.exports = nextConfig({
  images: {
    domains: ["cdn.builder.io", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
  },
});
