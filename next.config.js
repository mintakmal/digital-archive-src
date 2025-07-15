/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['images.pexels.com', 'api.dicebear.com'],
    unoptimized: false 
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
