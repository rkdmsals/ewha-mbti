// const { DefinePlugin } = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
    webpack: function override(config, env) {
        config.resolve.fallback = {
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify")
        };

        return config;
    }
};