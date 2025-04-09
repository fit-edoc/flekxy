/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        front:["front"],
        second:["second"],
        banner:["banner"]
      }
    },
  },
  plugins: [],
}

