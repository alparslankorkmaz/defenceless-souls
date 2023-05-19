/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.webp')",
      },
      colors: {
        "ds-dark-green": "#386641",
        "ds-green": "#6a994e",
        "ds-light-green": "#a7c957",
        "ds-beige": "#f2e8cf",
        "ds-brick": "#bc4749",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
