/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#34495E',
          light: '#3D5A80',
          dark: '#2C3E50',
        },
        secondary: {
          DEFAULT: '#3498DB',
          light: '#5DADE2',
          dark: '#2874A6',
        },
        neutral: {
          DEFAULT: '#333333',
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#242424',
        },
        text: {
          DEFAULT: '#333333',
          light: 'rgba(255, 255, 255, 0.87)',
          dark: '#212529',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#242424',
        },
        blue: {
          500: '#3498DB',
          600: '#2874A6',
          700: '#1F618D',
        },
        gray: {
          200: '#e9ecef',
          600: '#6c757d',
          800: '#343a40',
          900: '#212529',
        },
      },
      ringOffsetWidth: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      ringOffsetColor: {
        DEFAULT: '#ffffff',
        primary: '#34495E',
        secondary: '#3498DB',
      },
      ringWidth: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      ringColor: {
        DEFAULT: '#3498DB',
        primary: '#34495E',
        secondary: '#3498DB',
      },
    },
  },
  plugins: [],
}
