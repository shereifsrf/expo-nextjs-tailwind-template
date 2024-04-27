module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "../packages/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  important: "html",
  theme: {
    extend: {},
  },
};
