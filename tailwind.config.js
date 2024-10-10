/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'brand': '#ff0032',
      'txt': '#1d2023',
      'tertiary': '#f2f3f7',
      'divider': '#bcc3d0',
      'greytxt': '#626c77',
      'greyfooter': '#9198a0',
      'accent': '#007cff',
      'positive': '#26cd58',
      'active': '#12b23f'
    },
    screens: {
      'md': '640px',
      'lg': '1180px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      gridTemplateColumns: {
        purchases: "156px 380px 156px 380px 156px 156px",
      },
      fontFamily: {
        wide: ["var(--font-wide)"],
        sans: ["var(--font-sans)"],
        compact: ["var(--font-compact)"],
        text: ["var(--font-text)"],
      },
      fontSize: {
        '2.5': "0.625rem",
        '17': "1.0625rem",
        'heading': "2.75rem",
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
        '25': '6.25rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '35': '8.75rem',
        '65': '16.25rem',
        '91': '22.75rem',
        '100': '25rem',
        '128': '32rem',
        '388': '97rem',
      },
      boxShadow: {
        'shadow': "0 4px 16px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        '4xl': "32px",
      },
    },
  },
  plugins: [],
}

