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
        obsidian: {
          DEFAULT: '#0B0F19',
          50: '#1A2338',
          100: '#141C2E',
          200: '#111827',
          300: '#0F1626',
          900: '#06090F'
        },
        emerald: {
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857'
        },
        violet: {
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#6366F1',
          700: '#4F46E5'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.28)',
        'glow-violet': '0 0 35px -5px rgba(99, 102, 241, 0.28)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)'
      }
    }
  },
  plugins: [],
};
