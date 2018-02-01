const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack-config/webpack.common");
const production = require("./webpack-config/webpack.production");
const development = require("./webpack-config/webpack.development");
const developmentLint = require("./webpack-config/webpack.lint");
const staging = require("./webpack-config/webpack.staging");

module.exports = env => {
  process.env.BABEL_ENV = env.target;
  switch (env.target) {
    case "production":
      console.log("Production Mode!");
      return merge(common.commonConfig, production.productionConfig);
    case "staging":
      console.log("Staging Mode!");
      return merge(common.commonConfig, staging.stagingConfig);
    case "development":
      if (env.lint === "true") {
        console.log("Development Mode! - With Lint");
        return merge(common.commonConfig, developmentLint.developmenLintConfig);
      }
      console.log("Development Mode! - No Lint");
      return merge(common.commonConfig, development.developmentConfig);
  }
};
