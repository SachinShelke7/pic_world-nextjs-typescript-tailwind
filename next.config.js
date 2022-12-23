/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "farmundefined.staticflickr.com",
      "farm66.staticflickr.com",
      "staticflickr.com",
    ],
  },
};

module.exports = nextConfig;
