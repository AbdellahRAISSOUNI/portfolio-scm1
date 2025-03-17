/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 