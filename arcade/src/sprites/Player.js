import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset}) {
    super(game, x, y, asset)

    this.anchor.setTo(0.5)

    game.physics.arcade.enable(this)
    
    this.cursors = game.input.keyboard.createCursorKeys();
    this.cursors.up.onDown.add(()=> this.jump());
    this.energy = 100;

    this.animations.add('plane', [1]);
    this.animations.add('fly', [1, 2]);
    this.animations.play('fly', 8, true);
    this.scale.set(0.5);
  }


  jump(){
    this.body.velocity.y = -250;
    this.energy -= 10;
  }

  update () {
    this.body.velocity.x = 0;
    this.angle=0;

    if(this.cursors.left.isDown){
      this.body.velocity.x = -200;
      this.angle= -10;
    }
    if(this.cursors.right.isDown){
      this.body.velocity.x = 200;
      this.angle=  10;
    }
    if(this.cursors.down.isDown){
      this.animations.play('plane');
      this.body.velocity.y = +40;
    } else {
      this.animations.play('fly');
    }
  }
}
