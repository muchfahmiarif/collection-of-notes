import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";

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
      <svg width="33.125" height="30" viewBox="0 0 1696 1536" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#0ea5e9"
          d="M1671 350q40 57 18 129l-275 906q-19 64-76.5 107.5T1215 1536H292q-77 0-148.5-53.5T44 1351q-24-67-2-127q0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T84 1051q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T372 283q1-8-3-25.5t-2-26.5q2-8 9-18t18-23t17-21q8-12 16.5-30.5t15-35t16-36t19.5-32T504.5 12t36-11.5T588 6l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1057 1280H188q-27 0-38 15q-11 16-1 43q24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57q38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1279 352l21-64q4-13-2-22.5t-20-9.5H670q-13 0-25.5 9.5T628 288zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1196 608l21-64q4-13-2-22.5t-20-9.5H587q-13 0-25.5 9.5T545 544z"
        />
      </svg>
      <span className="pl-3 text-2xl font-semibold">Small Notes</span>
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
