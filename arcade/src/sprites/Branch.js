import Phaser from 'phaser';
import Branches from '../groups/Branches';

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset, onQuitScreen, player}) {
        super(game, x, y, asset);

        game.physics.arcade.enable(this)

        this.body.allowGravity = false;
        this.body.immovable = true;
        this.onQuitScreen = onQuitScreen;
        
        this.player = player;

        this.reset();

        this.SPEED = 50;
        this.isOnLeft = true;
    }

    update() {
        this.body.velocity.y = this.SPEED;

        if(this.y >= this.game.height) {
            this.onQuitScreen(this);
        }
    }

    reset() {
        let r = Math.random() * 10;;
        this.isOnLeft = (r <= 5);
        console.log(r, this.isOnLeft);
        if(this.isOnLeft) {
            this.x = 0;
        } else {
            this.x = this.game.width - this.width;
        }
    }
}
  