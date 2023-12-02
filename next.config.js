/** @type {import('next').NextConfig} */

// import million from 'million/compiler';
const million = require('million/compiler');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const millionConfig = {
  auto: true,
}

if (process.env.NODE_ENV === 'production') {
  module.exports = million.next(withBundleAnalyzer({
      reactStrictMode: true,
      swcMinify: true,
      experimental: {
        nextScriptWorkers: true,
      },
      images: {
        deviceSizes: [100, 200, 320, 375, 425, 640, 750, 768, 828, 1024, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.graphcms.com/**",
          },
          {
            protocol: "https",
            hostname: "s3.us-west-2.amazonaws.com/**"
          },
          {
            protocol: "https",
            hostname: "www.notion.so/**"
          },
          {
            protocol: "https",
            hostname: "media.graphassets.com"
          }
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
      return [
        {
          source: "/portfolio",
          destination: "/freelance",
          permanent: true
        }
      ]
    }
  }, millionConfig))
} else {
    module.exports = withBundleAnalyzer({
      reactStrictMode: true,
      swcMinify: true,
      experimental: {
        nextScriptWorkers: true,
      },
      images: {
        deviceSizes: [100, 200, 320, 375, 425, 640, 750, 768, 828, 1024, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "media.graphcms.com/**",
          },
          {
            protocol: "https",
            hostname: "s3.us-west-2.amazonaws.com/**"
          },
          {
            protocol: "https",
            hostname: "www.notion.so/**"
          },
          {
            protocol: "https",
            hostname: "media.graphassets.com"
          }
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
      return [
        {
          source: "/portfolio",
          destination: "/freelance",
          permanent: true
        }
      ]
    }
  })
}