import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //     pathname: "/**", // Allow all images from Unsplash
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "unsplash.com",
    //     pathname: "/**", // Allow all images from Unsplash
    //   },
    // ],
    domains:[
        "images.unsplash.com",
        "unsplash.com"
    ]
  },
};

export default nextConfig;
