// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                // 👈 key for static export
  basePath: '/VOV',                // 👈 repo name
  assetPrefix: '/VOV/',            // 👈 required for assets
};

module.exports = nextConfig;
