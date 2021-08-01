const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common,{
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 3333,
        contentBase: "./",
        publicPath: 'auto',
        openPage: "foo",
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
});