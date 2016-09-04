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
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
           }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url'
        }]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ]
};


module.exports = config;
