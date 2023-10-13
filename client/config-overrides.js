// const { DefinePlugin } = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
    webpack: function override(config, env) {
        config.resolve.fallback = {
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser")
        };

        return config;
    }
};