/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3d.iconscout.com',
      },
    ],
  },
};

export default nextConfig;
