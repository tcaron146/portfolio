import type { Config } from "tailwindcss";
import {url} from "node:inspector";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#333333",
        text: "#CCCCCC",
        buttons: "#666666",
        clickies: "#999999"
      },
      backgroundImage:{
        'mountains': "url('../public/images/mountains.jpg')",
        'ocean': "url('../public/images/ocean.jpg')"
      },
      fontFamily:{
        roboto:["Roboto Mono", "sans-serif"]

      }
    },
  },
  plugins: [],
} satisfies Config;
