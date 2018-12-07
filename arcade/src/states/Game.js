/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import lang from '../lang'

import PowerUp from '../sprites/PowerUp';
import Tree from '../sprites/Tree';

export default class extends Phaser.State {
  init() { }
  preload() { 
  }

  create() {
    this.trees = new Phaser.Group(this.game);
    for(let i = 0; i < 2; i++) {
      this.trees.add(
        new Tree({
          game: this.game,
          x: 1280 - 50,
          y: 0,
          asset: 'tree'
        }));

      this.trees.add(
        new Tree({
          game: this.game,
          x: -125,
          y: 0,
          asset: 'tree'
        }));

        this.trees.add(
          new Tree({
            game: this.game,
            x: 1280 - 50,
            y: -900,
            asset: 'tree'
          }));
  
        this.trees.add(
          new Tree({
            game: this.game,
            x: -125,
            y: -900,
            asset: 'tree'
          }));
    }
    
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
    this.game.add.existing(this.trees);
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.trees);
  }
}
