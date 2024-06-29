import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: ["./app/*.{ts,tsx}", "./core/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--poppins), sans-serif", ...fontFamily.sans],
        sans: ["var(--font-sans), sans-serif", ...fontFamily.sans],
      },
      backgroundImage: {},
      colors: {
        primary: {
          DEFAULT: "#0755d1",
          light: "#0755d1",
          dark: "#0755d1",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
        },
      },
      maxWidth: {
        container: "1140px",
      },
    },
    screens: {
      xsr: "350px",

      xs: "375px",
      // => @media (min-width: 375px) { ... }

      xss: "396px",

      xsss: "420px",

      sm: "640px",

      md: "768px",

      mds: "916px",

      lg: "1024px",

      lgs: "1200px",

      xl: "1280px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
