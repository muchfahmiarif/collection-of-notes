/** @type {import('next').NextConfig} */
const nextConfig = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = nextConfig();
