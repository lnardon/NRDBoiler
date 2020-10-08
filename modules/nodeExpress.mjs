import { createRequire } from "module";
import fs from "fs";
const require = createRequire(import.meta.url);
const { exec } = require("child_process");

export default function nodeExpress(folderName) {
  const nodeContent = `
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8888

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello world!")
})

app.listen(process.env.PORT || port});

`;

  const packageContent = `
{
  "name": "${folderName.toLowerCase()}",
  "version": "1.0.0",
  "description": "NRDBoiler node express template",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \'Error: no test specified\' && exit 1"
  },
  "keywords": [
    "nrd",
    "boilerplate"
  ],
  "author": "github/lnardon",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "nodemon": "^2.0.4"
  }
}

`;

  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.js`, nodeContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/package.json`, packageContent, (err) => {
    if (err) throw err;
  });

  exec("cd ./dd && npm install && npm start", (err, stdout, stderr) => {
    if (err) {
      console.error(err, stdout, stderr);
    }
  });
}
