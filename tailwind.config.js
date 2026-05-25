/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Deep indigo accent — the single accent across the site
        accent: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Neutral surfaces — light and dark.
        // Dark palette uses warm zinc tones (not pure black) for a softer feel.
        surface: {
          light: '#fafafa',
          'light-elevated': '#ffffff',
          dark: '#18181b',           // zinc-900 — greyish charcoal, not pure black
          'dark-elevated': '#212126', // slightly raised surface (cards, navbar bg)
          'dark-border': '#2e2e34',   // visible-but-quiet borders
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { transform: 'translate(0%, 0%)' },
          '50%': { transform: 'translate(2%, -2%)' },
        },
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 4px 12px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 10px 24px -4px rgb(0 0 0 / 0.08)',
        'glow': '0 0 0 1px rgb(99 102 241 / 0.2), 0 8px 24px -4px rgb(99 102 241 / 0.15)',
      },
    },
  },
  plugins: [],
};
