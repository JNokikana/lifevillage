import Phaser from 'phaser';
import GameScene from './scenes/game.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "view",
    scene: GameScene
}

let gameBeGood = new Phaser.Game(config);