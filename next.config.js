const path = require("path");

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

module.exports = {
  prefix,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  sassOptions: {
    includePaths: [prefix+path.join(__dirname, "styles")],
  },
  images: {
    loader: 'custom'
  },
};
