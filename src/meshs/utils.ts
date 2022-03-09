import * as THREE from "three";

const pointLightSphere = new THREE.SphereGeometry(0.05, 8, 8);

export function createPointLight(color) {
  const pointLight = new THREE.PointLight(color, 0.6, 0);
  const pointLightSphereMesh = new THREE.Mesh(
    pointLightSphere,
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  pointLight.add(pointLightSphereMesh);
  return pointLight;
}
