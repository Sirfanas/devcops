/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import lang from '../lang'
import Tree from '../sprites/Tree';

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

    this.treeRight = new Tree({
      game: this.game,
      x: 1280 - 50,
      y: 0,
      asset: 'tree'
    });

    this.treeLeft = new Tree({
      game: this.game,
      x: -125,
      y: 0,
      asset: 'tree'
    });

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 200;
    
    this.game.add.existing(this.player);
    this.game.add.existing(this.treeRight);
    this.game.add.existing(this.treeLeft);
  }

  update() {
    console.log("update");
    this.game.physics.arcade.collide(this.player, this.treeRight);
    this.game.physics.arcade.collide(this.player, this.treeLeft);
  }

  render() {
    if (__DEV__) {
    }
  }
}
