import Phaser from 'phaser';
import Branches from '../groups/Branches';

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset, onQuitScreen, player, spawnPowerUp}) {
        super(game, x, y, asset);

        game.physics.arcade.enable(this)

        this.body.allowGravity = false;
        this.body.immovable = true;
        this.onQuitScreen = onQuitScreen;
        
        this.player = player;

        
        this.SPEED = 50;
        this.isOnLeft = true;
        
        this.spawnPowerUp = spawnPowerUp;
        
        this.reset();
    }

    update() {
        this.body.velocity.y = this.SPEED * this.game.GLOBAL_SPEED;

        if(this.y >= this.game.height) {
            this.onQuitScreen(this);
        }
    }

    reset() {
        let r = Math.random() * 10;
        this.isOnLeft = (r <= 5);
        console.log(r, this.isOnLeft);
        if(this.isOnLeft) {
            this.x = 0;
        } else {
            this.x = this.game.width - this.width;
        }

        if(r <= 5) {
            this.spawnPowerUp(this, 
                (this.x + 100) + Math.random() * (this.width - 200), 
                this.y - 10);
        }
    }
}
  