/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary-color': '#088F8F',
      'secondary-bg-color': '#222222',
      'secondary-main-color': '#D7D7D7',
      'modal-bg-color': 'rgba(0, 0, 0, 0.315)',
      'modal-main-color': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

