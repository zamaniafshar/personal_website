import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070b0a',
        panel: '#0d1412',
        accent: '#22c55e'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,197,94,0.3), 0 0 40px rgba(34,197,94,0.25)'
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%25\" height=\"100%25\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.03\"/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};

export default config;
