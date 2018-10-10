import Phaser from 'phaser';
import ApiListener from '../util/apilistener.js';

class GameScene extends Phaser.Scene {
    preload() {

    }

    create() {
        var circle = new Phaser.Geom.Circle(400, 300, 100);

        var graphics = this.add.graphics({ fillStyle: { color: "0xff0000" } });
        graphics.fillCircleShape(circle);
    }

    update(){}
}

export default GameScene;