/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'tkcaaymkxvrpewbwspwh.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
