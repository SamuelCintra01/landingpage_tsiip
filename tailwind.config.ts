import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "0": "#FFFFFF",
          "100": "#E7E7E7",
          "200": "#CFD0D0",
          "300": "#B7B8B8",
          "400": "#9FA1A0",
          "500": "#888989",
          "600": "#707171",
          "700": "#585A59",
          "800": "#404241",
          "900": "#282B2A",
          "1000": "#101312",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
