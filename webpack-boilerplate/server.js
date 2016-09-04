var liveServer = require("live-server"),
    webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var compiler = webpack(webpackConfig);

compiler.watch({
    poll: true
}, function(err, status) {

});
var params = {
    port: 9090,
    noBrowser: true
};

liveServer.start(params);
