const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common,{
    mode: "production",
    devtool: "source-map",
    plugins: [
        new WebpackBundleAnalyzer()
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
});