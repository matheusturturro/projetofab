/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        'accent-glow': 'var(--color-accent-glow)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
      },
      borderRadius: {
        xl: '16px',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        accent: '0 10px 30px rgba(124,108,242,0.25)',
      },
    },
  },
  plugins: [],
};
