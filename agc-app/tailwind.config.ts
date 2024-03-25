import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
      colors: {
        'regal-blue': '#243c5a',
        primary:{
          200: "#fecaca",
          300: "#f87171",
          400: "#ef4444",
          DEFAULT: "#dc2626",
          600: "#b91c1c",
        },
        secondary:{//Tailwind Amber color palet
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          DEFAULT: "#f59e0b",
          600: "#d97706",
        },
        gray:{//Tailwind Gray 
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",  
          700: "#374151",
          800: "#1f2937",
          DEFAULT: "#111827",
        } ,       
      },    
    fontSize: {
      '8xl': ['120px', {
        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',
      }],
      '7xl': ['72px', {
        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',
      }],
      '6xl': ['55px', {
        lineHeight: '60px',
        letterSpacing: '-2.5',
        fontWeight: '500',
      }],
      '5xl': ['48px', {
        lineHeight: '54px',
        letterSpacing: '-1.60000023841858px',
        fontWeight: '500',
      }],
      '4xl': ['36px', {
        lineHeight: '44px',
        letterSpacing: '-1.2000000476837158px',
        fontWeight: '500',
      }],
      '3xl': ['28px', {
        lineHeight: '34px',
        letterSpacing: '-0.8px',
        fontWeight: '500',
      }],
      '2xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }],
      'xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1.2000000476837158px',
        fontWeight: '400',
      }],
      'lg': ['21px', {
        lineHeight: '30px',
        letterSpacing: '-1.2000000476837158px',
        fontWeight: '400',
      }],
      'base': ['17px', {
        lineHeight: '25px',
        letterSpacing: '-0.6px',
        fontWeight: '400',
      }],
      'sm': ['15px', {
        lineHeight: '23px',
        letterSpacing: '-0.6px',
        fontWeight: '400',
      }],
      'caption1': ['20px', {
        lineHeight: '24px',
        letterSpacing: '-0.6px',
        fontWeight: '400',
      }], 
      'caption2': ['18px', {
        lineHeight: '20px',
        letterSpacing: '-0.3px',
        fontWeight: '400',
      }], 
      'caption3': ['16px', {
        lineHeight: '15px',
        letterSpacing: '-0.2px',
        fontWeight: '400',
      }],                                                                       
    },
    borderRadius: {
      DEFAULT: '10px',
      'full': '9999px',
    
    },    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light:{
          colors:{
            background:"#FFFFFF",
            foreground:"#11181C",
            primary:{
              200: "#FBBDA8",
              300: "#F4907B",
              400: "#EA6558",
              DEFAULT: "#dc2626",
              600: "#BD1B29",
              700: "#9E132B",
              800: "#7F0C2A",
              900: "#690729"
            }
          }
        }
      }
    }

  )
],
};
export default config;
