import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import fontUrl from "./helvetiker_regular.typeface.json";
import * as THREE from "three";

import {
  coordX,
  coordZ,
  headerLineHeight,
  headerSize,
  paragraphLineHeight,
  paragraphSize,
} from "../consts";

const loader = new FontLoader();

export const createTextPlate = async (textsJson) => {
  const textPlateGeometry = new THREE.PlaneGeometry(9, 9);
  const textPlateMaterial = new THREE.MeshPhongMaterial({
    transparent: true,
    opacity: 0.000001,
    side: THREE.DoubleSide,
  });

  const textPlateMesh = new THREE.Mesh(textPlateGeometry, textPlateMaterial);
  const font = loader.parse(fontUrl);

  const material = new THREE.MeshPhongMaterial({
    color: "#faf8bb",
    transparent: false,
    opacity: 1,
  });

  const createText = (text, type: "header" | "paragraph") => {
    const geometry = new TextGeometry(text, {
      font: font,
      size: type === "header" ? headerSize : paragraphSize,
      height: 0.03,
      curveSegments: 48,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 1,
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  };

  let coordY = 3.8;

  for (let i = 0; i < textsJson.length; i++) {
    const { groupName, points } = textsJson[i];
    const groupNameMesh = createText(groupName, "header");
    groupNameMesh.position.set(coordX, coordY, coordZ);
    textPlateMesh.add(groupNameMesh);
    coordY -= 0.4;

    for (let k = 0; k < points.length; k++) {
      const skillMesh = createText(points[k], "paragraph");
      skillMesh.position.set(coordX, coordY, coordZ);
      coordY -= paragraphLineHeight;
      textPlateMesh.add(skillMesh);
    }
    coordY -= headerLineHeight;
  }
  return textPlateMesh;
};
