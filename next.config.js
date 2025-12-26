/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  // Enable styled-jsx (built-in to Next.js)
  compiler: {
    styledComponents: false,
  },
};

module.exports = nextConfig;
