/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/images/category/**',
      },
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/images/media/**',
      },
    ],
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
};

export default nextConfig;
