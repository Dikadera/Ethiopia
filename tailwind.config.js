/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F4ECE0',
          300: '#E8DCB8',
          400: '#D7C498',
          500: '#C2A769',
          800: '#4A3B22',
          900: '#2A1F10',
        },
        ethiopian: {
          gold: '#D4AF37',
          goldBright: '#FFD700',
          crimson: '#8B0000',
          redRoyal: '#B22222',
          greenEthiopian: '#009A44',
          yellowEthiopian: '#FED100',
          redEthiopian: '#EF212B',
          indigo: '#1E1B4B',
          obsidian: '#121214',
          obsidianCard: '#1C1C21',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Noto Serif Ethiopic', 'Abyssinica SIL', 'Georgia', 'serif'],
        geez: ['Noto Sans Ethiopic', 'Abyssinica SIL', 'Nyala', 'Ethiopic', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #996515 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #B22222 0%, #8B0000 50%, #4A0000 100%)',
        'ethiopian-flag-gradient': 'linear-gradient(90deg, #009A44 0%, #FED100 50%, #EF212B 100%)',
      }
    },
  },
  plugins: [],
}
