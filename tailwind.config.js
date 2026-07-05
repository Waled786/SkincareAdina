/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B45309',
        background: '#FAF7F2',
        card: '#FFFFFF',
        heading: '#1F1F1F',
        paragraph: '#5E6472',
        border: '#ECECEC',
        hover: '#FDE68A',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'card': '32px',
        'button': '28px',
      },
      spacing: {
        'section-desktop': '120px',
        'section-mobile': '80px',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};
