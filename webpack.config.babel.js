const HtmlWebpackPlugin = require("html-webpack-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = ({analyze = false, production = false} = {}) => {
    return {
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [production ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.html/,
                    use: 'html-loader',
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: "body",
                template: "./src/index.html"
            }),
            analyze && new BundleAnalyzerPlugin({}),
            production && new MiniCssExtractPlugin(),
        ].filter((plugin) => plugin),
        optimization: production ? {
            minimizer: [
                new UglifyJsPlugin({
                    parallel: true,
                }),
                new OptimizeCSSAssetsPlugin({}),
            ]
        } : undefined
    }
};
