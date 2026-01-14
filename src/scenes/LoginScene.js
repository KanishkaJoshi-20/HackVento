import Phaser from "phaser";

export default class LoginScene extends Phaser.Scene {
  constructor() {
    super("LoginScene");
  }

  create() {
    this.add.text(400, 300, "LOGIN SCENE\nPress SPACE", { fontSize: "32px" });

    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("ProfileScene");
    });
  }
}
