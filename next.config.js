const path = require("path");

module.exports = {
  basePath: '/amd75692.github.io',
  assetPrefix: "/amd75692.github.io",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: 'custom'
  },
};
