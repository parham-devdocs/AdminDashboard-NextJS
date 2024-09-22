/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: "white",
        textSecondary: "rgb(213, 213, 213)",
      },
      backgroundColor: {
        backgroundDark: "#11173a",
        backgroundSoft: "#34325e",
      },
      fontFamily: {
        playpen: ["Playpen Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
