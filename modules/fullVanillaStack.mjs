import fs from "fs";

export default function fullVanillaStack(folderName) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,400;1,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./styles.css" />
        <script src="./index.js"></script>
        <title>${folderName}</title>
      </head>
      <body>
          
      </body>
    </html>
  `;

  const cssContent = `
  * {
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
  }
    html {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
  `;

  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.html`, htmlContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/styles.css`, cssContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.js`, "", (err) => {
    if (err) throw err;
  });

  console.log("Project Created!");
}
