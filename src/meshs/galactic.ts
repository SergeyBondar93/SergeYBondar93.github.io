import { degToRad } from "three/src/math/MathUtils";
import * as THREE from "three";
import { TextureLoader } from "three";
import { createPointLight } from "./utils";

import vertexShader from "./vertexGalacticStarsShader.glsl";

const startsCount = 600;

const posArray = new Float32Array(startsCount * 3);

for (let i = 0; i < startsCount * 3; i++) {
  posArray[i] = Math.random() * 1 - Math.random() * 1;
}

const geometry = new THREE.BufferGeometry();

geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

const material = new THREE.ShaderMaterial({
  extensions: {},
  side: THREE.DoubleSide,
  uniforms: {
    time: { value: 0 },
    uColor1: { value: new THREE.Color(0x612574) },
    uColor2: { value: new THREE.Color(0x293583) },
    uColor3: { value: new THREE.Color(0x1954ec) },
    resolution: { value: new THREE.Vector4() },
  },
  depthTest: false,
  depthWrite: false,
  transparent: true,
  vertexShader: vertexShader,
  fragmentShader: `
    uniform float time;
    uniform float progress;
    uniform sampler2D texture1;
    uniform vec4 resolution;
    varying vec2 vUv;
    varying vec3 vPosition;

    varying float vColorRandom;

    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;

    float PI = 3.141592653589793238;

    void main() {
    
      float alpha = 1. - smoothstep(-0.1, 0.4, length(gl_PointCoord -vec2(0.5)));
    
      vec3 finalColor = uColor1;
    
      if (vColorRandom > 0.33 && vColorRandom < 0.66) {
        finalColor = uColor2;
      }
      if (vColorRandom > 0.66) {
        finalColor = uColor3;
      }
    
      gl_FragColor = vec4(finalColor,alpha);
    }
  `,
  blending: THREE.AdditiveBlending,
});

const number = startsCount;

const randoms = new Float32Array(number / 3);
const colorRandoms = new Float32Array(number / 3);

for (let i = 0; i < number / 3; i++) {
  randoms.set([Math.random() * 0.4 + 0.4], i);
  colorRandoms.set([Math.random()], i);
}

geometry.setAttribute("randoms", new THREE.BufferAttribute(randoms, 1));
geometry.setAttribute(
  "colorRandoms",
  new THREE.BufferAttribute(colorRandoms, 1)
);

const starsMesh1 = new THREE.Points(geometry, material);
const starsMesh2 = new THREE.Points(geometry, material);
const starsMesh3 = new THREE.Points(geometry, material);

const galacticGeometry = new THREE.SphereGeometry(0, 0, 0);
const galacticMaterial = new THREE.MeshPhongMaterial({
  color: "#f79b39",
  side: THREE.DoubleSide,
});

export const galactic1 = new THREE.Mesh(galacticGeometry, galacticMaterial);
export const galactic2 = new THREE.Mesh(galacticGeometry, galacticMaterial);
export const galactic3 = new THREE.Mesh(galacticGeometry, galacticMaterial);

galactic1.add(starsMesh1);
galactic2.add(starsMesh2);
galactic3.add(starsMesh3);

galactic2.rotateX(degToRad(30));
galactic3.rotateX(degToRad(-30));

galactic1.position.set(-2, -14.04, 0);
galactic2.position.set(3.8, -11.05, 0);
galactic3.position.set(2.5, -17.05, 0);
