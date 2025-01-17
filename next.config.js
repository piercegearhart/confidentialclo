/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.xolify.store",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
