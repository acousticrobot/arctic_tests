/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
  init() { }

  preload() { }

  create() {
    this.ground = this.add.sprite(0, this.game.world.height - 64, 'ground')


    this.cub = this.add.sprite(100, 200, 'cub', 3)
    this.cub.anchor.setTo(0.5)
    this.cub.animations.add('loping', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 16, true)
    this.cub.play('loping')

  }

  render() { }
}
