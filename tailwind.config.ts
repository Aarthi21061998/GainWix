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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       fontFamily: {
         Sora: ["sora"],
         Inter:["inter"],
      },
        blur: {
        sm: "4px", // Small blur effect
      },
    },
  },
  plugins: [],
};
export default config;
