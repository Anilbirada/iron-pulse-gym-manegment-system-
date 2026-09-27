/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        surface: '#141416',
        line: '#232326',
        bone: '#F5F4F1',
        steel: '#8A8B90',
        pulse: '#FF3B1F',
        pulseDim: '#B32A16',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
