var liveServer = require("live-server"),
    webpack = require("webpack"),
    webpackDevServer = require("webpack-dev-server"),
    path = require("path");
var webpackConfig = require("./webpack.config"),
    port = 9090;


webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:" + port, "webpack/hot/dev-server");
var compiler = webpack(webpackConfig);

var server = new webpackDevServer(compiler, {
    contentBase: path.join(__dirname),
    hot: true,
    inline: true,
    progress: true,
    publicPath: "/build/",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    stats: 'errors-only'
});

server.listen(port, "localhost", function() {
    console.log("server running in " + port);
});
