/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  preload() { }

  create() {
    this.ground = this.add.sprite(0, this.game.world.height - 64, 'ground')
    this.game.physics.arcade.enable(this.ground)
    this.ground.body.allowGravity = false
    this.ground.body.immovable = true


    this.cub = this.add.sprite(100, 0, 'cub', 3)
    this.cub.anchor.setTo(0.5)
    this.game.physics.arcade.enable(this.cub)
    this.cub.animations.add('standing', [8])
    this.cub.animations.add('loping', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 16, true)
    this.cub.play('standing')
    this.cub.checkWorldBounds = true
    this.cub.body.collideWorldBounds = true

    this.game.camera.follow(this.cub)
  }

  render() { }

  update() {
    this.game.physics.arcade.collide(this.cub, this.ground)

    if(this.cursors.left.isDown) {
      this.cub.play('loping')
      this.cub.body.velocity.x = -100
      this.cub.scale.setTo(-1, 1)
    }
    else if(this.cursors.right.isDown) {
      this.cub.play('loping')
      this.cub.body.velocity.x = 100
      this.cub.scale.setTo(1, 1)
    }
    else {
      this.cub.play('standing')
      let v = this.cub.body.velocity.x
      if (this.cub.body.velocity.x > 0) {
        this.cub.body.velocity.x = this.cub.body.velocity.x - 2
      }
    }
  }
}
