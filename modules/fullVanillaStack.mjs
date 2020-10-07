import fs from "fs";

export default function fullVanillaStack(folderName) {
  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.html`, "Hello content!", (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/styles.css`, "", (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.js`, "", (err) => {
    if (err) throw err;
  });
}
