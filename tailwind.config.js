/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          vdgrayishblue: "hsl(217, 19%, 35%)",
        ddarkblue: "(214, 17%, 51%)",
        grayishblue: "hsl(212, 23%, 69%)",
        lgrayishblue: "hsl(210, 46%, 95%)",
        }
      },

      fontFamily: {
        body: ["Manrope"],
      }
    },
  },
  plugins: [],
}