import * as dotenv from 'dotenv';
dotenv.config({ path: "./app.env" });

import * as Path from 'path';
import * as Hapi from 'hapi';

const Server = new Hapi.Server({
    port: process.env.PORT,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '../webapp/public')
        }
    }
});

async function initServer() {
    await Server.register(require("inert"));
    await Server.register([
        require("./routes/ui-routes.js"),
        require("./routes/app-routes.js")
    ]);

    await Server.start();
}

initServer();