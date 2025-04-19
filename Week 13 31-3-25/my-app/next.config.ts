import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'computing.psu.ac.th',
        port: '',
        pathname: '/**',
        search: '',
      },{
        protocol: 'https',
        hostname: 'images.newscientist.com',
        port: '',
        pathname: '/**',
        search: '',
      },{
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
        search: '?v=4',
      },
    ],
  },
};

export default nextConfig;
