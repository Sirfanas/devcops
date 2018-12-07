import Phaser from 'phaser';

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset}) {
        super(game, x, y, asset);

        game.physics.arcade.enable(this)

        this.body.allowGravity = false;
        this.body.immovable = true;
        
        this.SPEED = 2;
    }

    update() {
        this.y += this.SPEED;

        if(this.y >= this.height) {
            this.y = -this.height;
        }
    }
}
  