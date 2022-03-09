import * as THREE from "three";
import { TextureLoader } from "three";

const loader = new TextureLoader();
const texture = loader.load("./texture.jpg");
const height = loader.load("./height.png");
const alpha = loader.load("./alpha1.png");

const geometry = new THREE.PlaneBufferGeometry(2, 2, 64, 64);

export const material = new THREE.MeshStandardMaterial({
  color: "white",
  map: texture,
  displacementMap: height,
  displacementScale: 0.9,
  alphaMap: alpha,
  transparent: true,
  depthTest: false,
});

export const plane = new THREE.Mesh(geometry, material);

plane.position.y = 0.2;
plane.position.x = 1.7;

plane.rotation.x = 181;
plane.rotation.z = 252;
