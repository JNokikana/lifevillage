
exports.plugin = {
    name: "api-routes",
    version: "1.0.0",
    register: async function (server, options) {
        server.route(
            {
                method: "GET",
                path: "/perse",
                handler: {
                    
                }
            })
    }
}