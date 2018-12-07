/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
    init() { }

    preload() { 
    }

    create() {
        this.game.stage.backgroundColor = '#182d3b';

        this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);

        this.titleStyle = { font: "bold 64px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.scoreStyle = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        this.gameOverText = this.game.add.text(0, 0, "Game Over", this.titleStyle);
        this.gameOverText.setTextBounds(0, 100, this.game.width, 100);

        this.scoreText = this.game.add.text(0, 0, "Score : " + Math.floor(this.game.SCORE), this.scoreStyle);
        this.scoreText.setTextBounds(0, 200, this.game.width, 100);
    
        this.game.SCORE = 0;
    }

    update() {
    }

    actionOnClick () {
        this.state.start('Game')
    }
}
