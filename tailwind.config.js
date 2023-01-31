/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif", "Arial"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    animation: {
      enter0: "dezoom 0.2s ease-in-out",
      enter1: "opacity 0.4s ease-in-out",
    },
    keyframes: {
      dezoom: {
        "0%": { transform: "scale(2)" },
        "100%": { transform: "scale(1)" },
      },
      opacity: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
  },
};
