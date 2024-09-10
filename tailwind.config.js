/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#40F5EA", secondary: "#DF3636 "
      },
      gridTemplateColumns: {
        tools: "repeat(3, 200px)"
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    keyframes: {
      photoMove: {
        '0%': { transform: 'translateY(-20px)', transform: 'rotate(-20deg)' },
        '50%': { transform: 'translateY(20px)', transform: 'rotate(20deg)' },
        '100%': { transform: 'translateY(-20px)', transform: 'rotate(-20deg)' }
      }
    },
    animation: {
      photoMove: 'photoMove 3s linear infinite'
    }
  },
  plugins: [],
  "darkMode": "class",
}
