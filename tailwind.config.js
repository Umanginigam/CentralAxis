module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-surface-primary': 'rgb(9 9 11) ',
        'dark-surface-secondary': 'rgb(24 24 27) ',
        'dark-surface-tertiary': 'rgb(39 39 42) ',
        'dark-text-primary': 'rgb(250 250 250) ',
        'dark-text-secondary': 'rgb(161 161 170) ',
        'dark-text-tertiary': 'rgb( 113 113 122)',
        "surface-primary": 'rgb(250 250 250 )',
        "surface-secondary": 'rgb(244 244 245 )',
        "surface-tertiary": 'rgb(228 228 231)',
        "text-primary": 'rgb(9 9 11)',
        "text-secondary": 'rgb(82 82 91 )',
        "text-tertiary": 'rgb(113 113 122 )',
        primary: '#8b5cf6',
        dark: '#0d0d0d',
        "border": "rgba(0, 0, 0, 0.1)",
        "border-bottom": "1px solid",
        "border-top": "1px solid",
        "border-top-color": 'rgb(255, 255, 255,0.1)',
        "dark-border": "rgb(39 39 42)",
        "textOnAccent-primary": 'rgb(250 250 250)',
        "background": "rgb(0, 0, 0)"
      },
      
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      
      animation: {
        slide: 'slide 20s linear infinite',
      },
      
    },
  },
  plugins: [], 
};
