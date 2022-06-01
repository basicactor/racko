module.exports = {
  content: [
    "./components/**/*.{vue,js,jsx,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        cyberpunk: {
          ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
          primary: "red",
        },
        coffee: {
          ...require("daisyui/src/colors/themes")["[data-theme=coffee]"],
          primary: "blue",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
