import * as THREE from "three";
import { state } from "./state";

export const canvas = document.querySelector("canvas") as HTMLCanvasElement;

export const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setClearColor(new THREE.Color("#000003"), 1);

renderer.setSize(state.windowWidth, state.windowHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
