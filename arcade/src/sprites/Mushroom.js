import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    game.physics.arcade.enable(this)
    
    this.cursors = game.input.keyboard.createCursorKeys();
    this.cursors.up.onDown.add(()=> this.jump());
  }

  jump(){
    this.body.velocity.y = -250; 
  }
  update () {
    this.body.velocity.x = 0;
    if(this.cursors.left.isDown){
      this.body.velocity.x = -200;
    }
    if(this.cursors.right.isDown){
      this.body.velocity.x = 200;
    }
    if(this.cursors.down.isDown){
      this.body.velocity.y = +40;
    }
  }
}
