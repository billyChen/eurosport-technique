/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["i.eurosport.com"],
    },
    compiler: {
      relay: {
        src: "./",
        language: "typescript",
        eagerEsModules: false,
      },
    },
  };
  
  export default nextConfig;
  