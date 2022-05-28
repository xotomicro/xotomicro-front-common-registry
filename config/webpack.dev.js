const {merge} = require("webpack-merge")
const path = require("path")
const commonConfig = require("./webpack.common")

const devConfig = {
    mode: "development",

    entry: "./src/index.ts",
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "index.js",
        library: "xotomicro-front-common-registry",
        libraryTarget: "umd",
    },
}

module.exports = merge(commonConfig, devConfig)
