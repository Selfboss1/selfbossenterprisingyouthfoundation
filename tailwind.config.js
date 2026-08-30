/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },

    extend: {
      colors: {
        selfboss: {
          yellow: "#FACC15",
          "yellow-dark": "#EAB308",
          black: "#050505",
          charcoal: "#111111",
          white: "#FFFFFF",
          soft: "#F8F8F6",
          gray: "#6B7280",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },

      boxShadow: {
        soft: "0 10px 40px rgba(0, 0, 0, 0.08)",
        card: "0 15px 50px rgba(0, 0, 0, 0.10)",
        yellow: "0 10px 30px rgba(250, 204, 21, 0.25)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      backgroundImage: {
        "selfboss-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "32px 32px",
      },

      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.7s ease-out both",
        float: "float 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        pulseSoft: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.04)",
            opacity: "0.85",
          },
        },
      },
    },
  },

  plugins: [],
};