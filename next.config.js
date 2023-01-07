/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: ({ module }) => {
    module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
