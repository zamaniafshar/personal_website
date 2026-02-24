import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        panelBorder: 'rgb(var(--panelBorder) / <alpha-value>)',
        glow: 'rgb(var(--glow) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)'
      },
      boxShadow: {
        glass: '0 18px 50px rgba(0, 0, 0, 0.38)',
        glow: '0 0 0 1px rgba(52, 211, 153, 0.35), 0 18px 40px rgba(16, 185, 129, 0.22)',
        'glow-strong': '0 0 0 1px rgba(52, 211, 153, 0.45), 0 24px 55px rgba(16, 185, 129, 0.34)'
      },
      borderRadius: {
        xl: '0.95rem',
        '2xl': '1.25rem',
        '3xl': '1.7rem'
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%25\" height=\"100%25\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.03\"/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

export default config;
