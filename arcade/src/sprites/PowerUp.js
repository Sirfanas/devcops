import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, player}) {
    super(game, x, y, asset)
    this.player=player;

    this.anchor.setTo(0.5)

    game.physics.arcade.enable(this)
    
    this.body.immovable=true;
    this.body.allowGravity=false;
    this.scale.set(0.5);
    
    }


 

  update () {
    this.body.velocity.x = 0;
    this.angle += 1;
    this.game.physics.arcade.collide(this,this.player, (power, player)  => {
      player.power();
      this.destroy();
    });
  
  }
}
