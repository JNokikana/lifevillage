module.exports = {
    entry: ["babel-polyfill", "./webapp/public/index.js"],
    output: {
        path: __dirname + "/webapp/public/assets/build",
        filename: 'app.js'
    },
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