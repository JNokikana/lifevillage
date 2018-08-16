const Game = require('../handler/game.js');

exports.plugin = {
    name: "app-routes",
    version: "1.0.0",
    register: async function (server: any, options: any) {
        server.route(
            {
                method: "POST",
                path: "/api/game/sync",
                config: {
                    plugins: {
                        websocket: {
                            only: true,
                            autoping: 30 * 1000
                        }
                    },
                    handler: Game.gameSync
                }
            }
        )
    }
}