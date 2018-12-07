import Phaser from 'phaser';

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset}) {
      super(game, x, y, asset);

      game.physics.arcade.enable(this)
      this.body.immovable = true;
      this.body.allowGravity = false;
    }
}
  