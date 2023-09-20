/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#000000",
      contentbackground: "#282A31",
      greylevel1: "#131417",
      greylevel2_3: "#18191D",
      primarytext_selection: "#FFFFFF",
      unselectedstate: "#666666",
      success: "#3ab7bf",
      greylevel4: "#ecebff",
    },
    extend: {},
  },
  plugins: [],
  /* safelist: [
    {
      pattern:
        /(bg|text|border)-(background|current|white|purple|midnight|metal|tahiti|silver|bermuda)/,
    },
  ], */
};
