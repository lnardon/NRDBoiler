#!/usr/bin/env node
import fullVanillaStack from "./modules/fullVanillaStack.mjs";
import nodeExpress from "./modules/nodeExpress.mjs";
import webSass from "./modules/webSass.mjs";
import reactComponent from "./modules/reactComponent.mjs";
import reactBasic from "./modules/reactBasic.mjs";
import reactRedux from "./modules/reactRedux.mjs";

switch (process.argv.slice(2)[0]) {
  case "vanilla-web":
    fullVanillaStack(process.argv.slice(2)[1]);
    break;
  case "node-express":
    nodeExpress(process.argv.slice(2)[1]);
    break;
  case "web-sass":
    webSass(process.argv.slice(2)[1]);
    break;
  case "react-basic":
    reactBasic(process.argv.slice(2)[1]);
    break;
  case "react-redux":
    reactRedux(process.argv.slice(2)[1]);
    break;
  case "react-component":
    reactComponent(process.argv.slice(2)[1]);
    break;
  default:
    console.error("Sorry, boilerplate not found");
}
