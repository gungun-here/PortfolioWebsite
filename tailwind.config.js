const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        purple: "#b65cff",
      },
    },
  },
  plugins: [flowbite.plugin()],
}

