import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('tree', 'assets/images/Tronc.png');
    this.load.image('branch', 'assets/images/Branche.png');
    this.load.spritesheet('vipi', 'assets/images/Vipi.png', 261, 194, 3);
  }

  create () {
    this.state.start('Game')
  }
}
