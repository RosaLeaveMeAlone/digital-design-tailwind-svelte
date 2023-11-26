/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
}

