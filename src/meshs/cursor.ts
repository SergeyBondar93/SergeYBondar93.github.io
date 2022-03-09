import * as THREE from "three";
import { createPointLight } from "./utils";

const material = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  color: "#cf9ce6",
});

export const cursor = new THREE.Mesh(
  new THREE.RingGeometry(0.18, 0.19, 20, 5, 0, Math.PI * 2),
  material
);

export const pointLight1 = createPointLight(0x8363f7);
export const pointLight2 = createPointLight(0x8363f7);
export const pointLight3 = createPointLight(0x8363f7);

export const pointLight4 = createPointLight(0x8363f7);
