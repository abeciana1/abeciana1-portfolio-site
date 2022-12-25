/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [100, 200, 320, 375, 425, 640, 750, 768, 828, 1024, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
        "media.graphcms.com",
        "s3.us-west-2.amazonaws.com",
        "media.graphassets.com"
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports =
  nextConfig

module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
  })
);