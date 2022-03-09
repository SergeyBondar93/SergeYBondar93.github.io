import * as THREE from "three";
import { defaultCameraY } from "./consts";
import { state } from "./state";

export const camera = new THREE.PerspectiveCamera(75, state.aspect, 0.1, 100);
camera.position.x = 0;
camera.position.y = defaultCameraY;
camera.position.z = 6;
