import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, player, branch }) {
    super(game, x, y, asset)
    
    this.player=player;
    this.branch = branch;  

    this.anchor.setTo(0.5)

    game.physics.arcade.enable(this)
    
    this.body.immovable=true;
    this.body.allowGravity=false;
    this.scale.set(0.5);
  }

  update () {
    this.body.velocity.y = this.branch.body.velocity.y;
    if(this.y >= this.game.height) {
      console.log("destroy");
      this.destroy();

      return;
    }
    
    this.game.physics.arcade.collide(this,this.player, (power, player)  => {
      player.power();
      this.destroy();
    });
  
  }
}
