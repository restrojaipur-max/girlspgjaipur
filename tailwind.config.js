/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8A598',
          light: '#FADADD',
          dark: '#C97B6E',
        },
        accent: {
          DEFAULT: '#F5C5A3',
          light: '#FFE5B4',
        },
        beige: '#F5F5DC',
        'blue-soft': '#E6F0FF',
        bg: {
          DEFAULT: '#FFFAF8',
          warm: '#FFF5F0',
        },
        fg: {
          DEFAULT: '#2D1B16',
          muted: '#7A5C55',
          subtle: '#B89E99',
        },
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'pink-sm': '0 4px 16px rgba(232, 165, 152, 0.2)',
        'pink-md': '0 8px 28px rgba(232, 165, 152, 0.3)',
        'pink-lg': '0 20px 48px rgba(232, 165, 152, 0.25)',
        'card': '0 2px 16px rgba(45, 27, 22, 0.06)',
        'card-hover': '0 12px 40px rgba(45, 27, 22, 0.1)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(135deg, #FADADD 0%, #FFE5B4 50%, #E6F0FF 100%)',
        'warm-gradient': 'linear-gradient(160deg, #FFFAF8 0%, #FFF0ED 40%, #FFF5E6 100%)',
        'primary-gradient': 'linear-gradient(135deg, #E8A598 0%, #C97B6E 100%)',
      },
    },
  },
  plugins: [],
};