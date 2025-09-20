/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"], // required for shadcn theme toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        Mogra: ['Mogra', 'sans-serif'],
        sans: ["var(--font-sans)", ...fontFamily.sans], // shadcn needs this
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // required by shadcn components
  ],
}
