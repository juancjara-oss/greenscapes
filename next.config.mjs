/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // generates fully static /out folder
  trailingSlash: true,    // creates /about/index.html instead of /about.html
  images: {
    unoptimized: true,    // required for static export (we use <img> tags anyway)
  },
}

export default nextConfig
