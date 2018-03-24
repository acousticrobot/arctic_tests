import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {
    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  create() {
    this.ground = this.add.sprite(0, this.game.world.height - 64, 'ground')
    this.game.physics.arcade.enable(this.ground)
    this.ground.body.allowGravity = false
    this.ground.body.immovable = true


    this.cub = this.add.sprite(100, 0, 'cub', 3)
    this.cub.anchor.setTo(0.5)
    this.game.physics.arcade.enable(this.cub)
    this.cub.animations.add('standing', [7], 16, false)
    this.cub.animations.add('turning', [7, 21, 22, 23, 7], 16, false)
    this.cub.animations.add('loping', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 16, true)
    this.cub.animations.add('walking', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 16, true)
    this.cub.play('standing')
    this.cub.customParams = { facing: 'right' }
    this.cub.checkWorldBounds = true
    this.cub.body.collideWorldBounds = true

    this.game.camera.follow(this.cub)
  }

  update() {
    this.game.physics.arcade.collide(this.cub, this.ground)

    if (this.cub.customParams.facing === 'turning left') {
      if (this.cub.animations.currentAnim.isFinished) {
        this.cub.customParams.facing = 'left'
        this.cub.scale.setTo(-1, 1)
      }
    } else if (this.cub.customParams.facing === 'turning right') {
      if (this.cub.animations.currentAnim.isFinished) {
        this.cub.customParams.facing = 'right'
        this.cub.scale.setTo(1, 1)
        this.cub.play('loping')
      }
    } else if (this.cursors.left.isDown) {
      if (this.cub.customParams.facing === 'right') {
        this.cub.play('turning')
        this.cub.customParams.facing = 'turning left'
      } else if (this.cub.customParams.facing === 'left') {
        if (this.cub.x < 150) {
          this.cub.play('walking')
          this.cub.body.velocity.x = -75
        } else {
          this.cub.play('loping')
          this.cub.body.velocity.x = -100
        }
      }
    } else if (this.cursors.right.isDown) {
      if (this.cub.customParams.facing === 'left') {
        this.cub.play('turning')
        this.cub.customParams.facing = 'turning right'
      } else if (this.cub.customParams.facing === 'right') {
        if (this.cub.x > 550) {
          this.cub.play('walking')
          this.cub.body.velocity.x = 75
        } else {
          this.cub.play('loping')
          this.cub.body.velocity.x = 100
        }
      }
    } else {
      this.cub.play('standing')
      if (Math.abs(this.cub.body.velocity.x) < 5) {
        this.cub.body.velocity.x = 0
      } else if (this.cub.body.velocity.x > 0) {
        this.cub.body.velocity.x -= 4
      } else {
        this.cub.body.velocity.x += 4
      }
    }
  }
}
