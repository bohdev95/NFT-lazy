/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
          test: /\.(glsl|frag|vert)$/,
          exclude: /node_modules/,
          use: ['glslify-import-loader', 'raw-loader', 'glslify-loader']
      },
    )
    return config
  }
};


module.exports = nextConfig;
