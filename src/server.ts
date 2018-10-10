import * as dotenv from 'dotenv';
dotenv.config({ path: "./app.env" });

import * as Path from 'path';
import * as Hapi from 'hapi';

import Game from './util/gamestate';

const Server = new Hapi.Server({
    port: process.env.PORT,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '../webapp/public')
        }
    }
});

async function initServer() {
    try{
        await Server.register([
            require("inert"),
            require('hapi-plugin-websocket')
        ]);
        await Server.register([
            require("./routes/ui-routes.js"),
            require("./routes/app-routes.js")
        ]);
    
        await Server.start();
    
        await Game.initSimulation();
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

initServer();