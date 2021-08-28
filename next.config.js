/** @type {import('next').NextConfig} */
const withImage = require("next-images")
module.exports = withImage({
  reactStrictMode: true,
  esModule: true,
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
});
