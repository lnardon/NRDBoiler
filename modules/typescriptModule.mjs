import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { exec } = require("child_process");

export default function typescriptModule(folderName) {
  const gitignore = `
/node_modules/
/tests
/lib
neadb.json
package-lock.json
`;

  const packagejson = `
{
  "name": "${folderName.toLowerCase()}",
  "version": "0.1.0",
  "description": "NRDBoiler template",
  "main": "lib/index.js",
  "types": "lib",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc -p .",
    "test": "echo \'Error: no test specified\' && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "github.com/lnardon/NEaDB"
  },
  "keywords": [],
  "author": "github.com/lnardon",
  "license": "MIT",
  "devDependencies": {
    "nodemon": "^2.0.5",
    "sucrase": "^3.16.0",
    "typescript": "^4.0.3"
  },
  "dependencies": {
    "@types/node": "^14.11.10"
  }
}

`;

  const tsconfig = `
{
  "compilerOptions": {
    "target": "es6",
    "module": "CommonJS",
    "strict": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "lib",
    "esModuleInterop": true
  },
  "include": ["src"]
}

`;

  const nodemon = `
{
  "watch": ["src"],
  "ext": "ts",
  "execMap": {
    "ts": "sucrase-node src/index.ts"
  }
}

`;

  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
    fs.mkdir(`./${folderName}/src`, (err) => {
      if (err) throw err;
      fs.writeFile(`./${folderName}/src/index.ts`, "", (err) => {
        if (err) throw err;
        fs.writeFile(`./${folderName}/.gitignore`, gitignore, (err) => {
          if (err) throw err;
          fs.writeFile(`./${folderName}/nodemon.json`, nodemon, (err) => {
            if (err) throw err;
            fs.writeFile(`./${folderName}/package.json`, packagejson, (err) => {
              if (err) throw err;
              fs.writeFile(`./${folderName}/tsconfig.json`, tsconfig, (err) => {
                if (err) throw err;
                exec(
                  `cd ./${folderName} && npm install`,
                  (err, stdout, stderr) => {
                    if (err) {
                      console.error(err, stdout, stderr);
                    }
                    console.log("Project Created and dependencies installed!");
                  }
                );
              });
            });
          });
        });
      });
    });
  });
}
