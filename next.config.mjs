/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
     basePath: isProd ? "/kape" : "",
     output: "export",
     images: { unoptimized: true },
     reactStrictMode: true,
     swcMinify: true,            // Enable SWC minification for improved performance
     compiler: {
          removeConsole: !isProd,
     }
};

export default withPWA({
     dest: "public",         // destination directory for the PWA files
     disable: !isProd,      // disable PWA in the development environment
     register: true,         // register the PWA service worker
     skipWaiting: true,      // skip waiting for service worker activation
     cacheStartUrl: true,
     skipWaiting: true,
     scope: '/',
     cacheId: 'kape',
     cleanupOutdatedCaches: true,
     clientsClaim: true,
     navigationPreload: true,
})(nextConfig);