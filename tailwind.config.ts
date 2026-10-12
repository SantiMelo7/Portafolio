import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // `[class~="dark"]` instead of `.dark`: CSS modules hash class selectors,
  // so `@apply dark:…` would target `._dark_hash` and never match <html class="dark">.
  darkMode: ['class', '[class~="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
