import Phaser from "phaser";

export default class ExitScene extends Phaser.Scene {
  constructor() {
    super("ExitScene");
  }

  create() {
    this.add.text(450, 300, "YOU WON 🎉", { fontSize: "40px" });
  }
}
