/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "570px",
      md: "760px",
      lg: "970px",
      xl: "1270px",
      "2xl": "1440px"
    },
    extend: {},
    container:{ 
      center: true,
      padding: "10px",
    }
  },
  plugins: [ ],
}