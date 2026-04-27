/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    loader: 'custom',
    loaderFile: './src/loader.js',  // or wherever you put it
    // remotePatterns can stay, but they'll be ignored in static export
  },
};

export default nextConfig;
