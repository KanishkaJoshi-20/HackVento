import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // For now nothing
  }

  create() {
    this.add.text(500, 300, "Loading Game...", { fontSize: "32px" });

    setTimeout(() => {
      this.scene.start("LoginScene");
    }, 1000);
  }
}
