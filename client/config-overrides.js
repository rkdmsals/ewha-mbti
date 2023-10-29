// const { DefinePlugin } = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { override, addWebpackAlias } = require("customize-cra")

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
);
module.exports = {
    webpack: function override(config, env) {
        config.resolve.fallback = {
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "path": path.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser")
        };

        return config;
    }
};