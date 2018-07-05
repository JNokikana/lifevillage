
exports.plugin = {
    name: "ui-routes",
    version: "1.0.0",
    register: async function (server, options) {
        server.route(
            {
                method: "GET",
                path: "/assets/{filename*}",
                handler: {
                    directory: {
                        path: "assets",
                        listing: true
                    }
                }
            },
            {
                method: "GET",
                path: "/{params*}",
                handler: {
                    file: "index.html"
                }
            })
    }
}