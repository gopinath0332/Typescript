var webpack = require("webpack"),
    webpackDevServer = require("webpack-dev-server"),
    path = require("path");
var webpackConfig = require("./webpack.config"),
    port = 9091;

webpackConfig.devTool = "cheap-source-map";
var uglify = new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
        warnings: false
    },
    output: {
        comments: false
    }
});
webpackConfig.plugins.push(uglify);

var compiler = webpack(webpackConfig, function(error, status) {
    console.log("App builded in " + (status.endTime - status.startTime) + "ms");
    console.log("App running in " + port);
});


var server = new webpackDevServer(compiler, {
    contentBase: path.join(__dirname),
    hot: true,
    inline: true,
    progress: true,
    publicPath: "/build/",
    stats: 'errors-only'
});

server.listen(port, "localhost", function() {
    console.log("Building app. Please wait.....");
});
