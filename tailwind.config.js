module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'blue-main': 'hsl(217, 54%, 11%)',
      'blue-card': 'hsl(216, 50%, 16%)',
      'blue-line': 'hsl(215, 32%, 27%)',
      'white': 'hsl(0, 0%, 100%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
