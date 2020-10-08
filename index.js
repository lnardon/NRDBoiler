#!/usr/bin/env node
import fullVanillaStack from "./modules/fullVanillaStack.mjs";
import nodeExpress from "./modules/nodeExpress.mjs";

switch (process.argv.slice(2)[0]) {
  case "vanilla-web":
    fullVanillaStack(process.argv.slice(2)[1]);
    break;
  case "node-express":
    nodeExpress(process.argv.slice(2)[1]);
    break;
  default:
    console.error("Sorry, boilerplate not found");
}
