/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        glow: [
          "0 0 35px 10px rgba(255,255,255,1)",
          "inset 0 0 30px 10px rgba(255,255,255,1)",
        ],
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-20px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
