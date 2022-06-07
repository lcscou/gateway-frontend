module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
  features: {
    'custom-properties': false,
    'nesting-rules': false // disable nesting and let tailwindcss/nesting handle it for you instead
  }
};
