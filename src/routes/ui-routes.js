const Path = require('path');

exports.plugin = {
    name: "ui-routes",
    version: "1.0.0",
    register: async function (server, options) {
        server.route([
            {
                method: "GET",
                path: "/{params*}",
                handler: {
                    directory: {
                        path: "./",
                        index: ["index.html"]
                    }
                }
            }            ,{
                method: "GET",
                path: "/demo",
                handler: (request, reply) => {
                    return reply.file("demo.html");
                }
            }
        ])
    }
}