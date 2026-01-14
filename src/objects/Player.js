import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, null);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setDisplaySize(40, 40);
    this.setTint(0x00ff00);

    this.setCollideWorldBounds(true);
    this.speed = 300;
  }

  update(cursors) {
    this.setVelocity(0);

    if (cursors.left.isDown) this.setVelocityX(-this.speed);
    if (cursors.right.isDown) this.setVelocityX(this.speed);
    if (cursors.up.isDown) this.setVelocityY(-this.speed);
    if (cursors.down.isDown) this.setVelocityY(this.speed);
  }
}
