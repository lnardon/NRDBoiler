// #!/usr/bin/env node
import fullVanillaStack from "./modules/fullVanillaStack.mjs";

console.clear();

switch (process.argv.slice(2)[0]) {
  case "full-vanilla-stack":
    fullVanillaStack(process.argv.slice(2)[1]);
    break;
  default:
    console.error("Sorry, boilerplate not found");
}
