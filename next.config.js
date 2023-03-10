/** @type {import('next').NextConfig} */
const nextConfig = {
  generateSourceMap: false,
  reactStrictMode: true,
  env: {
    REACT_APP_OPENAI_API_KEY: process.env.REACT_APP_OPENAI_API_KEY,
  },
}

module.exports = nextConfig
