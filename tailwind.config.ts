import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens driven by CSS variables (flip in dark mode)
        paper: "rgb(var(--paper) / <alpha-value>)",
        paper2: "rgb(var(--paper2) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        ink2: "rgb(var(--ink2) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        // Accent stays constant across themes
        rust: {
          50: "#FBF1EC",
          100: "#F6DDD0",
          200: "#ECB69E",
          300: "#E08E6B",
          400: "#D86B41",
          500: "#C85228",
          600: "#AB4220",
          700: "#86341A",
          800: "#5F2614",
          900: "#3F1B0F"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.05), 0 18px 50px -20px rgba(0,0,0,0.28)",
        lift: "0 2px 6px rgba(0,0,0,0.08), 0 30px 60px -25px rgba(0,0,0,0.4)"
      },
      letterSpacing: {
        tightest: "-0.045em"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        eq: {
          "0%,100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        eq: "eq 1.1s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    },
  },
  plugins: [],
} satisfies Config;
