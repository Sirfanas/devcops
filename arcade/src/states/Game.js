/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import lang from '../lang'

import PowerUp from '../sprites/PowerUp';
import Tree from '../sprites/Tree';
import Branches from '../groups/Branches';

export default class extends Phaser.State {
  init() { }
  preload() {
  }

  create() {
    this.game.stage.backgroundColor = '#fff';
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

    this.branches = new Branches({
      game: this.game,
      player: this.player,
      spawnPowerUp: (branch, x, y) => {
        this.game.add.existing(new PowerUp({
          game: this.game,
          x: x,
          y: y,
          asset: 'mushroom',
          player: this.player,
          branch: branch
        }))
      }
    });

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 200;
    
    this.game.add.existing(this.player);
    this.game.add.existing(this.branches);
    this.game.add.existing(this.trees);


    this.game.world.bringToTop(this.trees);

    this.game.GLOBAL_SPEED=1;

    this.textStyle = { font: "bold 32px Arial", fill: "#000", boundsAlignV: "middle" };

    this.scoreText = this.game.add.text(0, 0, "Score : " + Math.floor(this.game.SCORE), this.textStyle);
    this.scoreText.setTextBounds(60, 0, 300, 100);

    this.energyText = this.game.add.text(0, 0, "Energy : " + this.player.energy + " / " + this.player.energyMax, this.textStyle);
    this.energyText.setTextBounds(60, 50, 300, 100);
  }

  update() {
    this.game.SCORE += 0.01;

    this.scoreText.text = "Score : " + Math.floor(this.game.SCORE);
    this.energyText.text = "Energy : " + this.player.energy + " / " + this.player.energyMax;

    this.game.physics.arcade.collide(this.player, this.trees);
    this.game.physics.arcade.collide(this.player, this.branches)

    if(this.game.GLOBAL_SPEED <= 7){
      this.game.GLOBAL_SPEED+=0.001;
    }
  }
}
