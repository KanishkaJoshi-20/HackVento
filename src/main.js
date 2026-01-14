import Phaser from "phaser";
import gameConfig from "./config/gameConfig";

// Import scenes
import BootScene from "./scenes/BootScene";
import LoginScene from "./scenes/LoginScene";
import ProfileScene from "./scenes/ProfileScene";
import WorldScene from "./scenes/WorldScene";
import PrisonScene from "./scenes/PrisonScene";
import BossFightScene from "./scenes/BossFightScene";
import ArenaScene from "./scenes/ArenaScene";
import ExitScene from "./scenes/ExitScene";

// Add scenes
gameConfig.scene = [
  BootScene,
  LoginScene,
  ProfileScene,
  WorldScene,
  PrisonScene,
  BossFightScene,
  ArenaScene,
  ExitScene,
];

new Phaser.Game(gameConfig);
