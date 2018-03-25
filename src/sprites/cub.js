import Phaser from 'phaser'

class Cub extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'cub')
    this.game.physics.arcade.enableBody(this)
    this.anchor.setTo(0.5)
    this.checkWorldBounds = true
    this.body.collideWorldBounds = true

    this.animations.add('standing', [7], 16, false)
    this.animations.add('turning', [7, 21, 22, 23, 7], 16, false)
    this.animations.add('loping', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 16, true)
    this.animations.add('walking', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 16, true)
    this.play('standing')
    this.customParams = {
      facing: 'right',
      inTransition: false
    }
  }

  stop() {
    if (this.customParams.inTransition) {
      return
    }
    this.play('standing')
    if (Math.abs(this.body.velocity.x) < 5) {
      this.body.velocity.x = 0
    } else if (this.body.velocity.x > 0) {
      this.body.velocity.x -= 4
    } else {
      this.body.velocity.x += 4
    }
  }

  faceLeft() {
    this.customParams.facing = 'left'
    this.scale.setTo(-1, 1)
  }

  goLeft() {
    if (this.customParams.inTransition) {
      return
    }
    if (this.customParams.facing === 'right') {
      this.play('turning')
      this.customParams.facing = 'turning left'
      this.customParams.inTransition = true
    } else if (this.customParams.facing === 'left') {
      if (this.x < 150) {
        this.play('walking')
        this.body.velocity.x = -75
      } else {
        this.play('loping')
        this.body.velocity.x = -100
      }
    }
  }

  faceRight() {
    this.customParams.facing = 'right'
    this.scale.setTo(1, 1)
  }

  goRight() {
    if (this.customParams.inTransition) {
      return
    }
    if (this.customParams.facing === 'left') {
      this.play('turning')
      this.customParams.facing = 'turning right'
      this.customParams.inTransition = true
    } else if (this.customParams.facing === 'right') {
      if (this.x > 550) {
        this.play('walking')
        this.body.velocity.x = 75
      } else {
        this.play('loping')
        this.body.velocity.x = 100
      }
    }
  }

  update() {
    if (this.customParams.inTransition && this.animations.currentAnim.isFinished) {
      this.customParams.inTransition = false
      if (this.customParams.facing === 'turning left') {
        this.faceLeft()
      } else if (this.customParams.facing === 'turning right') {
        this.faceRight()
      }
    }
  }
}

export default Cub
