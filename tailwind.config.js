// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          975: '#1E1B24',
          600: '#AA9BD6'
        },
        red: {
          600: '#F65349'
        },
        violet: {
          300: '#C3BDD3'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}