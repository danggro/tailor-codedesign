/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "ui-sans-serif", "ui-system"],
    },
    extend: {
      fontSize: {
        lg: ["18px", "21px"],
        xl: ["20px", "24px"],
        "2xl": ["24px", "28px"],
        sm: ["14px", "17px"],
        base: ["16px", "19px"],
        13: ["13px", "16px"],
      },
      colors: {
        pink: "#F7C8E0",
      },
    },
  },
  plugins: [],
};
