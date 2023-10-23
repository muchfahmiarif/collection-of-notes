import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import { Roboto } from "next/font/google";

export const RobotoFont = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

const themeConfig: DocsThemeConfig = {
  // Global
  darkMode: true,
  primaryHue: {
    dark: 203,
    light: 215,
  },
  docsRepositoryBase: "https://github.com/muchfahmiarif/collection-of-notes/tree/main/",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Documentation",
    };
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
      </>
    );
  },
  nextThemes: {
    storageKey: "theme",
    defaultTheme: "dark",
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },

  // Navbar
  logo: (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={36} width={36}>
        <path d="M0 0h512v512H0z" fill="url(#pattern)" fill-opacity="1"></path>
        <g transform="translate(0,0)">
          <linearGradient id="linear-gradient">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="100%" />
            <stop offset="50%" stopColor="#9333ea" stopOpacity="100%" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="100%" />
          </linearGradient>
          <path
            d="M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88c-1.191.024-2.36.07-3.492.134-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 0 0-3.629-.002zm122.686 11.42c-2.916-.026-5.81.011-8.514.098-12.81.417-27.638 2.215-45.84 4.522V427.145c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658l-10.617 46.004h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 0 1 8.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z"
            style={{ fill: "url(#linear-gradient)" }}></path>
        </g>
      </svg> */}
      <span
        className={`pl-3 text-2xl font-semibold animate-text bg-gradient-to-r from-teal-600 via-purple-600 to-orange-600 bg-clip-text text-transparent ${RobotoFont.className}`}>
        Note&#39;s
      </span>
      <style jsx>{`
        span,
        svg {
          mask-image: linear-gradient(60deg, black 25%, rgba(0, 0, 0, 0.2) 50%, black 75%);
          mask-size: 400%;
          mask-position: 0%;
        }
        span:hover,
        svg:hover {
          mask-position: 100%;
          transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        }
      `}</style>
    </>
  ),
  logoLink: "/",
  project: {
    link: "https://github.com/muchfahmiarif/collection-of-notes",
  },
  chat: {
    icon: (
      <svg role="img" viewBox="0 0 24 24" width={24} height={24} xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
        />
      </svg>
    ),
    link: "https://t.me/muchfahmiarif",
  },
  banner: {
    text: "🏗 This application still in development.",
    key: "wip",
  },

  // Sidebar
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true,
  },

  // Table of Contents
  toc: {
    backToTop: true,
  },

  // Footer
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/muchfahmiarif" target="_blank" className="hover:text-blue-500">
          Documentation
        </a>
        .
      </span>
    ),
  },
  faviconGlyph: "📝",
};

export default themeConfig;
