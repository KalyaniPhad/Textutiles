/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'right-bottom': '5px 5px 10px rgba(0, 0, 0, 0.2)', // Customize the shadow as needed
      }

    },
  },
  plugins: [],
}

