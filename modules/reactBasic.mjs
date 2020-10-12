import { createRequire } from "module";
import fs from "fs";
const require = createRequire(import.meta.url);
const { exec } = require("child_process");

export default function reactComponent(folderName) {
  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
  });

  exec(
    `cd ./${folderName}  && git clone -b jr --single-branch https://github.com/lnardon/ReactBoilerPlate.git && cd ReactBoilerPlate && rm -rf .git && npm install`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err, stdout, stderr);
      }
    }
  );

  console.log("Project Created and dependencies installed!");
}
