module.exports = {
    entry: ["babel-polyfill", "./src/webapp/public/index.jsx"],
    output: {
        path: __dirname + "/src/webapp/public/assets/build",
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