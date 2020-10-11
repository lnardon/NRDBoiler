import fs from "fs";

export default function reactComponent(folderName) {
  const reactContent = `
import React, {useState, useEffect} from 'react';

import "${folderName}.css"

export default function ${folderName}({}){
  return (
    <div>
    
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

  fs.writeFile(`./${folderName}/${folderName}.css`, "", (err) => {
    if (err) throw err;
  });
}
