/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    GITGHUB_ENDPOINT: process.env.GITGHUB_ENDPOINT,
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
