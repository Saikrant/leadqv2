/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-card': 'var(--bg-card)',
        'bg-surface': 'var(--bg-surface)',
        purple: 'var(--purple)',
        'purple-dark': 'var(--purple-dark)',
        'purple-light': 'var(--purple-light)',
        silver: 'var(--silver)',
        steel: 'var(--steel)',
        platinum: 'var(--platinum)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        'border-purple': 'var(--border-purple)',
      }
    },
  },
  plugins: [],
}
