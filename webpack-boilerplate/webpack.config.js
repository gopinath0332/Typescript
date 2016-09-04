var path = require("path");
var webpack = require("webpack");
var config = {
    entry: ["./src/app.ts"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
           }
         ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ]
};


module.exports = config;
