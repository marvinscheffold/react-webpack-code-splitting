const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AsyncCssPlugin = require("async-css-plugin");
const envVariables = require("./env.config");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            minify: true,
            title: "Code Splitting Test",
            template: "./public/index.html",
        }),
        new AsyncCssPlugin({
            /* options */
        }),
        new webpack.DefinePlugin({
            "process.env.API_BASE_URL": JSON.stringify(
                envVariables.baseURL[process.env.BUILD_ENV]
            ),
            "process.env.BUILD_ENV": JSON.stringify(process.env.BUILD_ENV),
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    output: {
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: "[name].bundle.js",
        // `chunkFilename` provides a template for naming code-split bundles (optional)
        chunkFilename: "[name].bundle.js",
        // `path` is the folder where Webpack will place your bundles
        path: path.resolve(__dirname, "dist/"),
        // `publicPath` is where Webpack will load your bundles from (optional)
        publicPath: "/",
        clean: true,
    },
    optimization: {
        usedExports: true, // <- remove unused function
    }
};