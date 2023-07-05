/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "weathered-haze-3071.fly.dev",
        port: "",
        pathname: "/api/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
