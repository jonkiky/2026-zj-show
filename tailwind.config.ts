import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cny-red': '#D4282F',
        'cny-gold': '#DAA520',
        'cny-dark-red': '#8B0000',
      },
    },
  },
  plugins: [],
};
export default config;
