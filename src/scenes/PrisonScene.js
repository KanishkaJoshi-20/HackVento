import Phaser from "phaser";

export default class PrisonScene extends Phaser.Scene {
  constructor() {
    super("PrisonScene");
  }

  create() {
    this.add.text(400, 300, "PRISON SCENE\nPress B for Boss Fight", { fontSize: "32px" });

    this.input.keyboard.once("keydown-B", () => {
      this.scene.start("BossFightScene");
    });
  }
}
