import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
      colors: {
        nevada: "#5e6a71",
        muted: "#4F595F",
        mcmaster: {
          maroon: "#7a003c",
          gold: "#fdbf57",
          modal: {
            background: "#c6cbce",
          },
        },
        dsg: {},
      },
    },
  },
  plugins: [],
};
