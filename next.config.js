/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  output: 'export',
  distDir: '.next',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}
