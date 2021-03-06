/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { dev, isServer }) {
    //SVG LOADER
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    });
    if (!dev && isServer) {
        Object.assign(config.resolve.alias, {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat'
        });
    }
    return config;
}
}

module.exports = nextConfig
