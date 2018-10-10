import Phaser from 'phaser';
import * as ApiListener from '../util/apilistener'

let state;
let text;

class GameScene extends Phaser.Scene {
    preload() {

    }

    create() {
        var circle = new Phaser.Geom.Circle(400, 300, 100);

        var graphics = this.add.graphics({ fillStyle: { color: "0xff0000" } });
        graphics.fillCircleShape(circle);
        text = this.add.text(64, 350, "test", { fill: '#6fba25' });
    }

    update() {
        ApiListener.syncRequest();
        text.setText(ApiListener.getRecentState());
    }
}

export default GameScene;