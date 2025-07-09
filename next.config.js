/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.linkedin.com",
      "media.licdn.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
