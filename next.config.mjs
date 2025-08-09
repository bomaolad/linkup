/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true
    // ppr: 'incremental' // ❌ Only supported in Next.js canary
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "www.freepik.com"
      }
    ]
  }
};

export default nextConfig;