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
    // for static export
    // images: {
    //     unoptimized: true,
    // },
};

module.exports = nextConfig;
