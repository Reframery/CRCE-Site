import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1350px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        "sans-condensed": [
          "Roboto Condensed Variable",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      boxShadow: {
        mcmaster: "0 0 32px 0 rgba(94, 106, 113, 0.6)",
        mcmasterSmall: "0 0 16px 0 rgba(94, 106, 113, 0.6)",
      },
      colors: {
        muted: "#4F595F",
        "heading-foreground": "#333",
        gallery: "#ebebeb",
        nevada: "#5e6a71",
        maroon: "#7a003c",
        gold: "#fdbf57",
        modal: {
          background: "#c6cbce",
        },
      },
    },
  },
  plugins: [],
};
