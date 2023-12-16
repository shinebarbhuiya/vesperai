/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['results.deepinfra.com'],
      },


      async rewrites() {
        return [
          {
            source: "/image/:path*",
            destination: "https://results.deepinfra.com/:path*",
          },
        ];
       },
}

module.exports = nextConfig
