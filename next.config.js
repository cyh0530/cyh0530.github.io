/** @type {import('next').NextConfig} */
const withImage = require("next-images");

// max-age = 1 day, stale-while-revalidate = 30 days
const imageCacheControl =
  "public, max-age=86400, s-maxage=86400, stale-while-revalidate=2592000";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*).jpg",
        headers: [
          {
            key: "Cache-Control",
            value: imageCacheControl,
          },
        ],
      },
      {
        source: "/(.*).jpeg",
        headers: [
          {
            key: "Cache-Control",
            value: imageCacheControl,
          },
        ],
      },
      {
        source: "/(.*).png",
        headers: [
          {
            key: "Cache-Control",
            value: imageCacheControl,
          },
        ],
      },
    ];
  },
};

module.exports = withImage({
  reactStrictMode: true,
  esModule: true,
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
  ...nextConfig,
});
