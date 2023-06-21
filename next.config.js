/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  output: 'export',
  distDir: 'out',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}
