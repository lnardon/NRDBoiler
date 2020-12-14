import fs from "fs";

export default function fullVanillaStack(folderName) {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,400;1,500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
    <script type="module" defer src="./index.js"></script>
    <title>${folderName}</title>
  </head>
  <body>
    <canvas id="canvas"></canvas>
  </body>
</html>
`;

  const cssContent = `* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
html {
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}

body {
  width: 100%;
  height: 100%;
}
`;

  const jsContent = `// IMPORTS
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/GLTFLoader.js";

//SCENE
const scene = new THREE.Scene();

//RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
  antialias: true,
});
renderer.setClearColor(0x25c8ce);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  3000
);

//LIGHTS
const light1 = new THREE.AmbientLight(0xffffff, 0.5),
  light2 = new THREE.PointLight(0xffffff, 1);

scene.add(light1);
scene.add(light2);

//OBJECT
const geometry = new THREE.CubeGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({ color: 0xf3ffe2 });
const mesh = new THREE.Mesh(geometry, material);

//RENDER LOOP
requestAnimationFrame(render);

function render() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.03;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.addEventListener(
  "resize",
  function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  false
);
`;

  console.log("Creating files...");

  fs.mkdir(`./${folderName}`, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.html`, htmlContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/styles.css`, cssContent, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`./${folderName}/index.js`, jsContent, (err) => {
    if (err) throw err;
  });

  console.log("Project Created!");
}
