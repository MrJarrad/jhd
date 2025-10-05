/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // ✅ Allow Builder.io's dev proxy to access your local dev server
      allowedDevOrigins: [
        "https://builder.io",
        "https://cdn.builder.io",
        "https://builder.io/content",
        "https://*.builder.io",
      ],
    },
  };
  
  export default nextConfig;
  