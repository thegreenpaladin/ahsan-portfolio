/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
