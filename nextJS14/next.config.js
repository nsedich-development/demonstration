/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.suelo.pl', 'lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
}

module.exports = nextConfig
