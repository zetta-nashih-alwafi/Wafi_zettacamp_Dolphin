/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({addUtilities}) {
  addUtilities({
    '.backface-visibility-hidden': {
      '-webkit-backface-visibility': 'hidden',
      'backface-visibility': 'hidden',
    },
    '.rotate-y-180': {
      'transform': 'rotateY(180deg)',
      '-webkit-transform': 'rotateY(180deg)',
    },
    'rotate-y-0': {
      'transform': 'rotateY(0deg)',
      '-webkit-transform': 'rotateY(0deg)',
    }
  });
});

module.exports = {
  content: [
    "./src/**/*.{html,ts}", './projects/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'product-sans': "Product Sans",
        'avant-garde': "AvantGarde Bk BT",
      }
    },
  },
  plugins: [rotateY],
};
