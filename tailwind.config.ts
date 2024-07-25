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
        'custom-blue': '#c492e8',
         "secondary": "#92cee8",
         "darkBg": "#ea899a",
         "icones": "#ffe291",
      },
      backgroundImage: {
       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Degradado de morado (#800080) a negro (#000)
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
