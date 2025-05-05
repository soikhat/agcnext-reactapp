import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "regal-blue": "#243c5a",

        primary: {
          100: "#FDE1D3",
          200: "#FBBDA8",
          300: "#F4907B",
          400: "#EA6558",
          DEFAULT: "#DC2626",
          600: "#BD1B29",
          700: "#9E132B",
          800: "#7F0C2A",
          900: "#4B011D",
        },

        gray: {
          100: "#F3F3F3",
          200: "#E8E8E8",
          300: "#BBBBBB",
          400: "#777777",
          DEFAULT: "#1D1D1D",
          600: "#181515",
          700: "#140E0F",
          800: "#10090B",
          900: "#0B0606",
        },

        accent: {
          DEFAULT: "#F94F46",
          600: "#E53E3E",
        },
        info: {
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          DEFAULT: "#0EA5E9", // Sky-500
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },

        success: {
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          DEFAULT: "#22C55E", // Green-500
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },

        warning: {
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          DEFAULT: "#EAB308", // Yellow-500
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },

        danger: {
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          DEFAULT: "#EF4444", // Red-500
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
      },

      fontSize: {
        // Titles & Headings
        "8xl": [
          "120px",
          { lineHeight: "120px", letterSpacing: "-6px", fontWeight: "500" },
        ],
        "7xl": [
          "72px",
          { lineHeight: "80px", letterSpacing: "-4.5px", fontWeight: "600" },
        ],
        "6xl": [
          "55px",
          { lineHeight: "60px", letterSpacing: "-2.5px", fontWeight: "500" },
        ],
        "5xl": [
          "48px",
          { lineHeight: "54px", letterSpacing: "-1.6px", fontWeight: "500" },
        ],
        "4xl": [
          "36px",
          { lineHeight: "44px", letterSpacing: "-1.2px", fontWeight: "500" },
        ],
        "3xl": [
          "28px",
          { lineHeight: "34px", letterSpacing: "-0.8px", fontWeight: "500" },
        ],
        "2xl": [
          "24px",
          { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "400" },
        ],
        xl: ["20px", { lineHeight: "28px", fontWeight: "400" }],
        lg: ["18px", { lineHeight: "26px", fontWeight: "400" }],
        base: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        sm: ["14px", { lineHeight: "22px", fontWeight: "400" }],
        xs: ["12px", { lineHeight: "18px", fontWeight: "400" }],

        // Captions / Labels
        caption1: [
          "20px",
          { lineHeight: "24px", letterSpacing: "-0.6px", fontWeight: "400" },
        ],
        caption2: [
          "18px",
          { lineHeight: "20px", letterSpacing: "-0.3px", fontWeight: "400" },
        ],
        caption3: [
          "16px",
          { lineHeight: "18px", letterSpacing: "-0.5px", fontWeight: "400" },
        ],
        caption4: [
          "13px",
          { lineHeight: "15px", letterSpacing: "-0.2px", fontWeight: "400" },
        ],
      },

      borderRadius: {
        DEFAULT: "10px",
        full: "9999px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              100: "#FEF9F2",
              200: "#FBBDA8",
              300: "#F4907B",
              400: "#EA6558",
              DEFAULT: "#DC2626",
              600: "#BD1B29",
              700: "#9E132B",
              800: "#7F0C2A",
              900: "#690729",
            },
            secondary: {
              200: "#fde68a",
              300: "#fcd34d",
              400: "#fbbf24",
              DEFAULT: "#f59e0b",
              600: "#d97706",
            },
          },
        },
      },
    }),
  ],
};

export default config;
