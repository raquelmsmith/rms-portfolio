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
          975: '#160D30',
          600: '#AA9BD6'
        },
        red: {
          600: '#F65349'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}