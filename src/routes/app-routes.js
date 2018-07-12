exports.plugin = {
    name: "app-routes",
    version: "1.0.0",
    register: async function (server, options) {
        server.route(
            {
                method: "GET",
                path: "/api/kusi",
                handler: () => {
                    return "kusi"
                }
            }
        )
    }
}