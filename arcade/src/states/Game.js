/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import lang from '../lang'

import PowerUp from '../sprites/PowerUp';

export default class extends Phaser.State {
  init() { }
  preload() { 
  }

  create() {
    this.anims = new Phaser.AnimationManager(this);

    const bannerText = lang.text('welcome')
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    
  

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'vipi'
    });

    this.powerUp1 = new PowerUp({
      game: this.game,
      x: 500,
      y: 250,
      asset: 'mushroom',
      player:this.player
    })

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 200;
    
    this.game.add.existing(this.player);

    this.game.physics.arcade.enable(this.powerUp1);
    


  }
  render() {
    if (__DEV__) {
    }
  }
}
