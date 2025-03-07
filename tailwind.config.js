/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
      },
      screens: {
        // Custom breakpoints
        xs: "480px", // Extra small screen (e.g., mobile)
        sm: "640px", // Small screens (e.g., tablets)
        md: "768px", // Medium screens (e.g., small laptops)
        lg: "1024px", // Large screens (e.g., desktops)
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x Extra large screens (e.g., large monitors)
      },
    },
  },
  plugins: [],
};
