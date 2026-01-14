import Phaser from "phaser";

export default class ArenaScene extends Phaser.Scene {
  constructor() {
    super("ArenaScene");
  }

  create() {
    this.add.text(400, 300, "ARENA\nPress E to Exit", { fontSize: "32px" });

    this.input.keyboard.once("keydown-E", () => {
      this.scene.start("ExitScene");
    });
  }
}
