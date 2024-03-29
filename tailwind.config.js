/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "skk-dark": "#252d38",
        "skk-darker": "#181c27",
        "skk-gray": "#f4f5f6",
        "skk-deep-gray": "#ddd",
        "skk-deep-gray-dark": "#435266",
      },
    },
  },
  plugins: [],
};
