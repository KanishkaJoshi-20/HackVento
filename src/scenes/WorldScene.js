import Phaser from "phaser";
import Player from "../objects/Player";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  }

  create() {
    this.add.text(20, 20, "WORLD SCENE\nGo to right box to enter Prison", { fontSize: "20px" });

    this.player = new Player(this, 100, 300);

    this.cursors = this.input.keyboard.createCursorKeys();

    // Portal
    this.portal = this.add.rectangle(1100, 300, 80, 120, 0xff0000);
    this.physics.add.existing(this.portal, true);

    this.physics.add.overlap(this.player, this.portal, () => {
      this.scene.start("PrisonScene");
    });
  }

  update() {
    this.player.update(this.cursors);
  }
}
