// // const { DefinePlugin } = require("webpack");
// // const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
// const webpack = require('webpack');
// const { override, addWebpackAlias } = require("customize-cra")

// module.exports = override(
//     addWebpackAlias({
//         '@': path.resolve(__dirname, 'src'),
//     }),
// );
// module.exports = {
//     webpack: function override(config, env) {
//         config.resolve.fallback = {
//             "crypto": require.resolve("crypto-browserify"),
//             "stream": require.resolve("stream-browserify"),
//             "path": require.resolve("path-browserify"),
//             "buffer": require.resolve("buffer/")
//             // "os": require.resolve("os-browserify/browser")
//         };

//         return config;
//     }
// };
const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        fs: require.resolve('fs'),
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}