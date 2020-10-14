import fs from "fs";

export default function nextSSGComponent(folderName) {
  const reactContent = `
import "${folderName}.module.css"

export default function ${folderName}({prop}){
  return (
    <div>
    
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1095990" } }],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { id } = context.params;
  return {
    props: { prop },
    revalidate: 10,
  };
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
