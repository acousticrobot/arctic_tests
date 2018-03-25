import Phaser from 'phaser'
import Cub from '../sprites/cub'

export default class extends Phaser.State {
  init() {
    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  create() {
    this.ground = this.add.sprite(0, this.game.world.height - 64, 'ground')
    this.game.physics.arcade.enable(this.ground)
    this.ground.body.allowGravity = false
    this.ground.body.immovable = true

    this.cub = new Cub(this.game, 100, 0)
    this.game.add.existing(this.cub)
    this.game.camera.follow(this.cub)
  }

  update() {
    this.game.physics.arcade.collide(this.cub, this.ground)

    if (this.cursors.left.isDown) {
      this.cub.goLeft()
    } else if (this.cursors.right.isDown) {
      this.cub.goRight()
    } else {
      this.cub.stop()
    }
  }
}
