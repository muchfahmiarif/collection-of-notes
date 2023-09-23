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

module.exports = nextConfig({});
