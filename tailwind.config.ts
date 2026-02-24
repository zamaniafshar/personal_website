import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#070b08',
        panel: '#0d1310',
        accent: '#34d399',
        accentSoft: '#10b981'
      },
      boxShadow: {
        glow: '0 0 24px rgba(52, 211, 153, 0.32)',
        glowSoft: '0 0 48px rgba(52, 211, 153, 0.2)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-8px)'}
        },
        pulseGlow: {
          '0%, 100%': {boxShadow: '0 0 14px rgba(52, 211, 153, 0.16)'},
          '50%': {boxShadow: '0 0 28px rgba(52, 211, 153, 0.45)'}
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
