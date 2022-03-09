import { camera } from "../camera";
import { renderer } from "../renderer";
import { state } from "../state";

window.addEventListener("resize", () => {
  // Update sizes
  state.windowWidth = window.innerWidth;
  state.windowHeight = window.innerHeight;

  // Update camera
  camera.aspect = state.windowWidth / state.windowHeight;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(state.windowWidth, state.windowHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
