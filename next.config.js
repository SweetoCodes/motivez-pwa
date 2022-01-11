const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  images: {
    domains: ["lh3.googleusercontent.com", "images.ctfassets.net"],
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
});
