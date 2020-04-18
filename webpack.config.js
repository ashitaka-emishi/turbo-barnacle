// MIT License
// https://github.com/ashitaka-emishi/turbo-barnacle/blob/master/LICENSE
//
// Copyright (c) 2020 Emishi Ashitaka

/* eslint-disable object-shorthand */
const path = require("path");

const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postCss = require("precss");

const template = require("html-webpack-template");

module.exports = {
  entry: ["./src/index.jsx", "./src/styles/app.scss"],
  mode: "development",
  externals: {
    platform: "window",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./main.js",
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMap: true,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "main.css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [postCss, autoprefixer];
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images",
          },
        },
      },
      {
        test: /\.(ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react app",
      inject: false,
      mobile: true,
      scripts: ["./main.js"],
      lang: "en-US",
      links: ["./main.css"],
      meta: {viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"},
      template: template,
      appMountId: "app-container",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
};
