import fs from 'fs';
import MapTile from '../entity/maptile';
import Villager from '../entity/villager';

class GameState {
    public stateJSON: any;

    async generateMap() {
        let mapArray: Array<MapTile> = [];
        let mapSquareSize = parseInt(process.env.MAP_SQUARE_SIZE || "0");
        let mapSquares = parseInt(process.env.MAP_SQUARES || "0");

        for (var i = 0; i <= mapSquares; i += mapSquareSize) {
            for (var m = 0; m <= mapSquares; m += mapSquareSize) {
                console.log("X: " + i + " " + "Y: " + m);
                mapArray.push(new MapTile({
                    x: i,
                    y: m
                }));
            }
        }
        this.stateJSON.map = mapArray;
    }

    async generateVillagers() {
        let villager = new Villager({ name: "Pekka", x: 0, y: 0, speed: 0, hitpoints: 5 });
        
    }

    async initSimulation() {
        /** Check whether previous simulation data exists and if not then create new from scratch. */
        try {
            if (fs.existsSync("./" + process.env.STATE_FILENAME)) {
                this.stateJSON = fs.readFileSync("./" + process.env.STATE_FILENAME).toJSON();
            }
            await this.generateMap();

        } catch (error) {
            throw error;
        }
    }
}

export default new GameState()