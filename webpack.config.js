module.exports = {
    entry: ["babel-polyfill", "./webapp/public/index.js"],
    output: {
        path: __dirname + "/webapp/public/build",
        filename: 'app.js'
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: "/node_modules/",
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}