import fs from "fs";

export default function webSass(folderName) {
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
        <link rel="stylesheet" href="./css/main.css" />
        <script src="./index.js"></script>
        <title>${folderName}</title>
      </head>
      <body>
          
      </body>
    </html>
  `;

  const sassContent = `
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

  fs.writeFile(`./${folderName}/css/main.scss`, sassContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.js`, "", (err) => {
    if (err) throw err;
  });
}
