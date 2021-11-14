import { Configuration } from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const config: Configuration = {
  cache: true,
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 1337,
    static: {
      directory: resolve(__dirname, "./public"),
    },
  },
  devtool: "inline-source-map",
  entry: {
    main: resolve(__dirname, "./src/index.tsx"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: "/node_modules/",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              limit: 10000,
              mimetype: "application/font-woff",
            },
          },
        ],
      },
    ],
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "public/index.html",
    }),
    new ESLintPlugin({
      extensions: [".ts", ".tsx", ".d.ts"],
    }),
  ],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".tsx", ".js"],
  },
};

export default config;
