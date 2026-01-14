import Phaser from "phaser";

export default class BossFightScene extends Phaser.Scene {
  constructor() {
    super("BossFightScene");
  }

  create() {
    this.add.text(350, 300, "BOSS FIGHT\nPress V to Win", { fontSize: "32px" });

    this.input.keyboard.once("keydown-V", () => {
      this.scene.start("ArenaScene");
    });
  }
}
