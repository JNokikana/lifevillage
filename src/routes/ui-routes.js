
exports.plugin = {
    name: "ui-routes",
    version: "1.0.0",
    register: async function (server, options) {
        server.route(
            {
                method: "GET",
                path: "/{params*}",
                handler: {
                    directory: {
                        path: "./",
                        index: "index.html"
                    }
                }
            })
    }
}