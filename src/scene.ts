import { degToRad } from "three/src/math/MathUtils";
import { torus } from "./meshs/torus";
import * as THREE from "three";
import { githubLink, hhLink, tgLink, emailLink } from "./eventListeners";
import gsap, { Power4 } from "gsap";
import { camera } from "./camera";
import { renderer, canvas } from "./renderer";
import { state } from "./state";
import { spiral } from "./meshs/spiral";
import { starsMesh } from "./meshs/stars";
import { plane } from "./meshs/plane";
import {
  cursor,
  pointLight1,
  pointLight2,
  pointLight3,
  pointLight4,
} from "./meshs/cursor";
import { createTextPlate } from "./meshs/textPlate";
import { galactic1, galactic2, galactic3 } from "./meshs/galactic";

import skillsText from "./skills.json";
import introduceText from "./introduce.json";
import contactsText from "./contacts.json";

const scene = new THREE.Scene();

scene.add(camera);
scene.add(pointLight4);
scene.add(starsMesh);
scene.updateMatrixWorld(true);
scene.add(cursor, pointLight1, pointLight2, pointLight3);

scene.add(galactic1, galactic2, galactic3);

const light = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(light);

(async () => {
  const [belowSpiral, aboveSpiral]: any = await spiral.init();
  scene.add(belowSpiral, aboveSpiral);

  const skillsMesh = await createTextPlate(skillsText);

  skillsMesh.position.x = 3.6;
  skillsMesh.position.y = -14;
  skillsMesh.position.z = -2;

  skillsMesh.rotateY(degToRad(-5));
  scene.add(skillsMesh);

  const introduceMesh = await createTextPlate(introduceText);

  introduceMesh.position.x = -1.6;
  introduceMesh.position.y = -1.7;
  introduceMesh.position.z = -2;

  introduceMesh.rotateY(degToRad(5));
  scene.add(introduceMesh);

  const contactsMesh = await createTextPlate(contactsText);

  contactsMesh.position.x = -1.6;
  contactsMesh.position.y = -3.7;
  contactsMesh.position.z = -2;
  contactsMesh.rotateY(degToRad(5));
  scene.add(contactsMesh);
  const [, github, hh, tg, email] = contactsMesh.children;

  const coordsGithub = new THREE.Vector3();

  github.updateWorldMatrix(true, false);
  github.getWorldPosition(coordsGithub);

  coordsGithub.project(camera);
  const ghLinkX = (coordsGithub.x * 0.5 + 0.5) * canvas.clientWidth;
  const ghLinkY = (coordsGithub.y * -0.5 + 0.5) * canvas.clientHeight;

  githubLink.style.transform = `translate(-50%, -50%) translate(${
    ghLinkX + 50
  }px,${ghLinkY - 8}px)`;

  const coordsHH = new THREE.Vector3();

  hh.updateWorldMatrix(true, false);
  hh.getWorldPosition(coordsHH);

  coordsHH.project(camera);
  const hhLinkX = (coordsHH.x * 0.5 + 0.5) * canvas.clientWidth;
  const hhLinkY = (coordsHH.y * -0.5 + 0.5) * canvas.clientHeight;

  hhLink.style.transform = `translate(-50%, -50%) translate(${hhLinkX + 50}px,${
    hhLinkY - 8
  }px)`;

  const coordsTG = new THREE.Vector3();

  tg.updateWorldMatrix(true, false);
  tg.getWorldPosition(coordsTG);

  coordsTG.project(camera);
  const tgLinkX = (coordsTG.x * 0.5 + 0.5) * canvas.clientWidth;
  const tgLinkY = (coordsTG.y * -0.5 + 0.5) * canvas.clientHeight;

  tgLink.style.transform = `translate(-50%, -50%) translate(${
    tgLinkX + 240
  }px,${tgLinkY - 8}px)`;

  const coordsEmail = new THREE.Vector3();

  email.updateWorldMatrix(true, false);
  email.getWorldPosition(coordsEmail);

  coordsEmail.project(camera);
  const emailLinkX = (coordsEmail.x * 0.5 + 0.5) * canvas.clientWidth;
  const emailLinkY = (coordsEmail.y * -0.5 + 0.5) * canvas.clientHeight;

  emailLink.style.transform = `translate(-50%, -50%) translate(${
    emailLinkX + 155
  }px,${emailLinkY - 8}px)`;

  const moveLinks = () => {
    const coordsGithub = new THREE.Vector3();

    github.updateWorldMatrix(true, false);
    github.getWorldPosition(coordsGithub);

    coordsGithub.project(camera);
    const ghLinkX = (coordsGithub.x * 0.5 + 0.5) * canvas.clientWidth;
    const ghLinkY = (coordsGithub.y * -0.5 + 0.5) * canvas.clientHeight;

    githubLink.style.transform = `translate(-50%, -50%) translate(${
      ghLinkX + 50
    }px,${ghLinkY - 8}px)`;

    const coordsHH = new THREE.Vector3();

    hh.updateWorldMatrix(true, false);
    hh.getWorldPosition(coordsHH);

    coordsHH.project(camera);
    const hhLinkX = (coordsHH.x * 0.5 + 0.5) * canvas.clientWidth;
    const hhLinkY = (coordsHH.y * -0.5 + 0.5) * canvas.clientHeight;

    hhLink.style.transform = `translate(-50%, -50%) translate(${
      hhLinkX + 50
    }px,${hhLinkY - 8}px)`;

    const coordsTG = new THREE.Vector3();

    tg.updateWorldMatrix(true, false);
    tg.getWorldPosition(coordsTG);

    coordsTG.project(camera);
    const tgLinkX = (coordsTG.x * 0.5 + 0.5) * canvas.clientWidth;
    const tgLinkY = (coordsTG.y * -0.5 + 0.5) * canvas.clientHeight;

    tgLink.style.transform = `translate(-50%, -50%) translate(${
      tgLinkX + 240
    }px,${tgLinkY - 8}px)`;

    const coordsEmail = new THREE.Vector3();

    email.updateWorldMatrix(true, false);
    email.getWorldPosition(coordsEmail);

    coordsEmail.project(camera);
    const emailLinkX = (coordsEmail.x * 0.5 + 0.5) * canvas.clientWidth;
    const emailLinkY = (coordsEmail.y * -0.5 + 0.5) * canvas.clientHeight;

    emailLink.style.transform = `translate(-50%, -50%) translate(${
      emailLinkX + 155
    }px,${emailLinkY - 8}px)`;
  };

  moveLinks();

  window.addEventListener("resize", moveLinks);
})();

const clock = new THREE.Clock();

pointLight4.position.z = 0;
pointLight4.intensity = 1.5;

const tick = () => {
  torus.rotation.y += 0.01;

  const elapsedTime = clock.getElapsedTime();
  const halfHeight = state.windowHeight / 2;
  const halfWidth = state.windowWidth / 2;

  if (spiral.isReady) {
    spiral.aboveSpiral.rotation.y -= 0.005;
    spiral.aboveSpiral.rotation.z += 0.0007 * Math.cos(elapsedTime);
    spiral.belowSpiral.rotation.y -= 0.005;
    spiral.belowSpiral.rotation.z += 0.0007 * Math.cos(elapsedTime);
  }

  gsap.to(starsMesh.rotation, {
    ease: Power4.easeOut,
    duration: 2.3,
    y: elapsedTime * 0.01 + (state.mouseX - halfWidth) * 0.00005,
    x: elapsedTime * 0.01 + (state.mouseY - halfHeight) * 0.00005,
  });

  plane.rotation.z = 0.2 * elapsedTime;

  renderer.render(scene, camera);

  pointLight4.position.x = Math.sin(elapsedTime * 0.5) * 3.5 - 1.5;
  pointLight4.position.y = Math.sin(elapsedTime * 3) * 0.55 + 0.7 + 0.8;

  if (state.needAnimateCursorPoints) {
    pointLight1.position.x -= Math.sin(elapsedTime) * 0.003;
    pointLight1.position.y += 0.002;

    pointLight2.position.x += 0.0015;
    pointLight2.position.y += Math.sin(elapsedTime) * 0.003;

    pointLight3.position.x -= Math.sin(elapsedTime) * 0.003 + 0.002;
    pointLight3.position.y -= 0.002;
  } else {
    pointLight1.position.y += Math.sin(elapsedTime) * 0.001;

    pointLight2.position.y += Math.sin(elapsedTime) * 0.001;

    pointLight3.position.y += Math.sin(elapsedTime) * 0.001;
  }

  galactic1.rotation.y += 0.002;
  galactic1.rotation.z = degToRad(Math.sin(elapsedTime) * 5);
  galactic1.position.y += Math.sin(elapsedTime) * 0.001;

  galactic2.rotation.y += 0.002;
  galactic2.rotation.z = degToRad(Math.sin(elapsedTime) * 5);
  galactic2.position.y += Math.sin(elapsedTime) * 0.001;

  galactic3.rotation.y += 0.002;
  galactic3.rotation.z = degToRad(Math.sin(elapsedTime) * 5);
  galactic3.position.y += Math.sin(elapsedTime) * 0.001;

  window.requestAnimationFrame(tick);
};

tick();
