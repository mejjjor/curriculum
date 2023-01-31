module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cellar-c2.services.clever-cloud.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/api/auth/signin",
        permanent: true,
      },
    ];
  },
};
