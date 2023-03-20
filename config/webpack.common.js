const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const {getAliasConfig} = require("@xotomicro/xotomicro-front-utility-registry/src/config/webpack.shared")

module.exports = {
    resolve: {
        alias: getAliasConfig(),
        extensions: [".js", ".tsx", ".jsx", ".ts"],
        plugins: [new TsconfigPathsPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
}
