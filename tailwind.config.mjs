/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette terminal multi-couleurs (style syntax highlighting)
        terminal: {
          bg: '#0a0a08',
          'bg-light': '#14140f',
          // Amber - couleur principale
          amber: '#f59e0b',
          'amber-bright': '#fbbf24',
          // Cyan - liens, accents secondaires
          cyan: '#22d3ee',
          'cyan-dim': '#06b6d4',
          // Vert - succès, status positifs
          green: '#4ade80',
          'green-dim': '#22c55e',
          // Texte
          text: '#fef3c7',
          'text-dim': '#d4d4c8',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { textShadow: '0 0 2px #f59e0b, 0 0 4px #f59e0b' },
          '100%': { textShadow: '0 0 4px #f59e0b, 0 0 8px #f59e0b, 0 0 12px #f59e0b' },
        },
      },
    },
  },
  plugins: [],
};
