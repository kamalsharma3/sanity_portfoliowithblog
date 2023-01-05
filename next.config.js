/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    // domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
