const path = require("path");
const merge =require("webpack-merge")
const baseConfig = require("./webpack.base.js");
const nodeExternals = require("webpack-node-externals")

var config = {
    // Inform webpack that we're building a bundle for nodeJs, rather than for the browser
    target: "node",

    // Tell webpack the root file of our sever application
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },

    externals:[nodeExternals()]
}

module.exports = merge(baseConfig, config)