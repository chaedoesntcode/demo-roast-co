/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig, // Extend your configuration with any existing Next.js options
  
    webpack(config, options) {
      // Add the video loader configuration here
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/', // Adjust the path as needed
            outputPath: 'static/videos/', // Adjust the path as needed
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
