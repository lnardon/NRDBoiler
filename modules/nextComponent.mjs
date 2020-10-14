import fs from "fs";

export default function nextComponent(folderName) {
  const reactContent = `
import "${folderName}.module.css"

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

  console.log("Component Structure Created!");
}
