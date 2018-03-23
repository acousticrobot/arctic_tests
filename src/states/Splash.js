import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.physics.arcade.gravity.y = 1000

    this.game.world.setBounds(0, 0, 800, 300)
    this.game.physics.arcade.checkCollision.down = false
  }

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)

    this.load.image('ground', './assets/images/ground.png')
    this.load.spritesheet('cub', './assets/images/wireframe_spritesheet.png', 64, 64)
  }

  create() {
    this.state.start('Game')
  }
}
