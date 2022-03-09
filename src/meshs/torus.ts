import * as THREE from "three";
export const torusGeometry = new THREE.TorusKnotGeometry(3, 0.5, 700, 20, 2, 5);

export const torusMaterial = new THREE.PointsMaterial({
  size: 0.01,
});

export const torus = new THREE.Points(torusGeometry, torusMaterial);

torus.position.z = -3;
torus.position.x = -3;
torus.position.y = 0;
