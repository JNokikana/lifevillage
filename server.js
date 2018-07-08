require('dotenv').config({ path: "./app.env" });
const Path = require('path');
const Hapi = require('hapi');

const Server = new Hapi.Server({
    port: process.env.PORT,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'webapp/public')
        }
    }
});

async function initServer() {
    await Server.register(require("inert"));
    await Server.register([
        require("./src/routes/ui-routes.js")
    ]);

    await Server.start();
}

initServer();