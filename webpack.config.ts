import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

const config: Configuration = {
  mode: "development",
  cache: true,
  entry: path.resolve(__dirname, "./src/scene.ts"),
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      minify: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          filter: (path) => {
            if (path.endsWith("index.html")) return false;
            return true;
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".glsl"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/i,
        use: ["ts-loader"],
        // options: {
        //   configFile: path.resolve(__dirname, "tsconfig.json"),
        // },
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.glsl$/,
        loader: "raw-loader",
      },
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: ["ts-loader"],
      // },
    ],
  },
};

export default config;
