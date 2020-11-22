import { createRequire } from "module";
import fs from "fs";
const require = createRequire(import.meta.url);
const { exec } = require("child_process");

export default function reactBasic(folderName) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta name="theme-color" content="#000000" />
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
  "name": "${folderName}",
  "version": "0.1.0",
  "private": true,
  "main": "main.js",
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
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
  }
}

`;

  const homepageJsx = `
import React from "react";

import styles from  "./styles.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <h1>HOMEPAGE</h1>
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
                    `./${folderName}/src/components/Homepage/styles.module.css`,
                    "",
                    (err) => {
                      if (err) throw err;
                      fs.writeFile(
                        `./${folderName}/src/App.jsx`,
                        appjs,
                        (err) => {
                          if (err) throw err;
                          fs.writeFile(
                            `./${folderName}/src/index.jsx`,
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
                                      exec(
                                        `cd ./${folderName} && npm install`,
                                        (err, stdout, stderr) => {
                                          if (err) {
                                            console.error(err, stdout, stderr);
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
            });
          });
        });
      });
    });
  });
}
