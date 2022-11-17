/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'owa-lb-test.thenational.academy',
      },
    ],
  },
}

module.exports = nextConfig
