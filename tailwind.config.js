/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F051D',
        'bg-secondary': '#130749',
        'text-primary': '#E700EC',
      },
    },
  },
  plugins: [],
};
