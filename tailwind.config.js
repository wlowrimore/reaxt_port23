/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        custombg1: 'url("/images/backgrounds/homebgalt.jpg")',
        custombg2: 'url("/images/backgrounds/abstract_blur_drops.jpg")',
        custombg3: 'url("/images/backgrounds/creativity_img.jpg")',
        custombg4: 'url("/images/backgrounds/night_snow.jpg")',
        custombg5: 'url("/images/backgrounds/needle_lights.jpg")',
      },
    },
  },
  plugins: [],
};
