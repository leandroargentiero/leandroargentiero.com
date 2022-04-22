const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
});
