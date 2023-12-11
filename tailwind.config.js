/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3C614',
        secondary: '#353535',
        danger: '#e3342f',
        authBackground: '#f1f2f3',
        white: '#ffffff',
        navBarBorder: '#e7700d',
        buttonBlue: "#1b75d0",
      },
    },
  },
  plugins: [],
};
