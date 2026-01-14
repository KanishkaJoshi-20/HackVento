import Phaser from "phaser";

export default class ProfileScene extends Phaser.Scene {
  constructor() {
    super("ProfileScene");
  }

  create() {
    this.add.text(400, 300, "PROFILE SCENE\nPress ENTER", { fontSize: "32px" });

    this.input.keyboard.once("keydown-ENTER", () => {
      this.scene.start("WorldScene");
    });
  }
}
