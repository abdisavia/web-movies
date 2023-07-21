/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '9.75':"9.75rem",
        '139' : "39rem",
        '152' : "52rem",
      },
    },
  },
  plugins: [],
}

