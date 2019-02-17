const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
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
        use: ["style-loader", "css-loader", "sass-loader"]
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
    })
  ]
};
