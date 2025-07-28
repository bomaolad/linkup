/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true
    // ppr: 'incremental' // ❌ Only supported in Next.js canary
  },
};

export default nextConfig;
