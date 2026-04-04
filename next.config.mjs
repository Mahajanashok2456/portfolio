/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: {
    root: '.',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3d.iconscout.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
