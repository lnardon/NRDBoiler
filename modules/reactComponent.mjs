import fs from "fs";

export default function reactComponent(folderName) {
  const reactContent = `
import React, {useState, useEffect} from 'react';

import styles from "./styles.module.css"

export default function ${folderName}({}){
  return (
    <div className={styles.container}>
    
    </div>
  )
}
`;

  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.jsx`, reactContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/styles.module.css`, "", (err) => {
    if (err) throw err;
  });

  console.log("Component Structure Created!");
}
