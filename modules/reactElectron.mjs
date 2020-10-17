import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { exec } = require("child_process");

export default function reactElectron(folderName) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="lnardon/react-boilerplate"
    />
    <title>${folderName}</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`;

  const appjs = `
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
`;

  const indexjs = `
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

`;

  const gitignore = `
/node_modules
/.pnp
.pnp.js

/coverage

/build

.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`;

  const packagejson = `
{
  "name": "${folderName.toLowerCase()}",
  "productName": "${folderName.toLowerCase()}",
  "version": "0.1.0",
  "private": true,
  "main": "main.js",
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "electron": "^10.1.3",
    "is-dev": "^0.1.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "electron": "electron .",
    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
    "package-win": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE",
    "package-linux": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "electron-packager": "^15.1.0"
  }
}

`;

  const mainjs = `
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("is-dev");

function createWindow() {
  const window = new BrowserWindow({ width: 800, height: 600 });
  if (isDev) {
    window.loadURL("http://localhost:3000");
  } else {
    window.loadFile("file://../build/index.html");
  }
}

app.on("ready", createWindow);

`;

  const homepageJsx = `
import React from "react";

import "./homepage.css";

function Homepage() {
  return (
    <div>
      <h1>NRD BOILER ELECTRON HOMEPAGE</h1>
    </div>
  );
}

export default Homepage;

`;

  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
    fs.mkdir(`./${folderName}/public`, (err) => {
      if (err) throw err;
      fs.writeFile(`./${folderName}/public/index.html`, htmlContent, (err) => {
        if (err) throw err;
        fs.mkdir(`./${folderName}/src`, (err) => {
          if (err) throw err;
          fs.mkdir(`./${folderName}/src/components`, (err) => {
            if (err) throw err;
            fs.mkdir(`./${folderName}/src/components/Homepage`, (err) => {
              if (err) throw err;
              fs.writeFile(
                `./${folderName}/src/components/Homepage/index.jsx`,
                homepageJsx,
                (err) => {
                  if (err) throw err;
                  fs.writeFile(
                    `./${folderName}/src/components/Homepage/homepage.css`,
                    "",
                    (err) => {
                      if (err) throw err;
                      fs.writeFile(
                        `./${folderName}/src/App.js`,
                        appjs,
                        (err) => {
                          if (err) throw err;
                          fs.writeFile(
                            `./${folderName}/src/index.js`,
                            indexjs,
                            (err) => {
                              if (err) throw err;
                              fs.writeFile(
                                `./${folderName}/.gitignore`,
                                gitignore,
                                (err) => {
                                  if (err) throw err;
                                  fs.writeFile(
                                    `./${folderName}/package.json`,
                                    packagejson,
                                    (err) => {
                                      if (err) throw err;
                                      fs.writeFile(
                                        `./${folderName}/main.js`,
                                        mainjs,
                                        (err) => {
                                          if (err) throw err;
                                          exec(
                                            `cd ./${folderName} && npm install`,
                                            (err, stdout, stderr) => {
                                              if (err) {
                                                console.error(
                                                  err,
                                                  stdout,
                                                  stderr
                                                );
                                              }
                                              console.log(
                                                "Project Created and dependencies installed!"
                                              );
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            });
          });
        });
      });
    });
  });
}
