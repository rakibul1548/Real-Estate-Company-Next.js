
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // since you’re using static images
  },
};

module.exports = nextConfig;

