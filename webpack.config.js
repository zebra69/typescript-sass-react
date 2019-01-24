const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry:'./src/index.tsx',
  output: {
    filename: "[name].tsx",
    path: path.resolve(__dirname, "./src")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
/*
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    publicPath: "/",
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true
  },
*/
 /*
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/index.html"
      }
    ]),
    new ExtractTextPlugin({
      filename: "[name].scss",
      allChunks: true
    })
    // new MonacoWebpackPlugin()
  ],
  */
    rules: [
      {
        "object-literal-sort-keys": false
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
};
