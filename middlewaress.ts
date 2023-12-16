


// Import necessary types from http-proxy-middleware
import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the rewrite rule
const rewrites = [
  {
    source: '/images/:path*',
    destination: 'https://results.deepinfra.com/:path*',
  },
];

// Create a middleware function
const middleware: RequestHandler = createProxyMiddleware({
  target: 'https://results.deepinfra.com/', // Replace with the actual image server URL
  changeOrigin: true,
  pathRewrite: (path, req) => {
    // Custom path rewrite logic if needed
    return path.replace('/images', ''); // Remove '/images' from the path
  },
});

// Export the middleware
export default middleware;

// Export the rewrites configuration for Next.js
export { rewrites };
