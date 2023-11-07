/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'rickandmorty': "url('./src/images/rickandmorty.jpeg)"      }
    },
  },
  plugins: [],
}

