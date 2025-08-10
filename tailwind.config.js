/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f8f4',
          100: '#e1ede3',
          200: '#c3dbc8',
          300: '#95bf9e',
          400: '#659d70',
          500: '#447c50',
          600: '#2C5530',
          700: '#264a2b',
          800: '#213c25',
          900: '#1c3220',
          DEFAULT: '#2C5530',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#FBF7F0',
          dark: '#F4E8D8',
        },
        cheese: {
          yellow: '#F4E4BC',
          golden: '#E8D196',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}