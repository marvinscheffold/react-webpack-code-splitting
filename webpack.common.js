const path = require("path");

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
                use: ["style-loader", "css-loader"],
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
    output: {
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: "[name].bundle.js",
        // `chunkFilename` provides a template for naming code-split bundles (optional)
        chunkFilename: "[name].bundle.js",
        // `path` is the folder where Webpack will place your bundles
        path: path.resolve(__dirname, "dist"),
        // `publicPath` is where Webpack will load your bundles from (optional)
        publicPath: "dist/",
        clean: true,
    },
    optimization: {
        usedExports: true, // <- remove unused function
    }
};