import Phaser from 'phaser';

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset, onQuitScreen}) {
        super(game, x, y, asset);

        game.physics.arcade.enable(this)

        this.body.allowGravity = false;
        this.body.immovable = true;
        this.onQuitScreen = onQuitScreen;
        
        this.SPEED = 1;
    }

    update() {
        this.y += this.SPEED * this.game.GLOBAL_SPEED;

        if(this.y >= this.game.height) {
            this.onQuitScreen(this);
        }
    }
}
  