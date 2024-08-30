/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        domains: ["localhost"],
    },
    async rewrites() {
        return [
            {
                source: "/project/:path*",
                destination: "/api/project/:path*",
            },
        ];
    },
    redirects: async () => [
        {
            source: "/:path*",
            has: [
                {
                    type: "host",
                    value: "www.nicholas-schneider.de",
                },
            ],
            destination: "https://nicholas-schneider.de/:path*",
            permanent: true,
        },
    ],
};

module.exports = nextConfig;
