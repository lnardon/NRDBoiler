#!/usr/bin/env node
import fullVanillaStack from "./modules/fullVanillaStack.mjs";

console.clear();

switch (process.argv.slice(2)[0]) {
  case "full-vanilla-stack":
    fullVanillaStack();
    break;
  default:
    console.error("Sorry, template not found");
}
