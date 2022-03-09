import gsap, { Power4, Sine } from "gsap";
import { camera } from "../camera";
import { spiral } from "../meshs/spiral";
import {
  showFirstScreenDomNodes,
  showSecondScreenDomNodes,
} from "./domElementsScreensHandlers";

window.addEventListener("wheel", ({ deltaY }) => {
  gsap.to(spiral.aboveSpiral.rotation, {
    ease: Sine.easeOut,
    duration: 1.3,
    y: spiral.aboveSpiral.rotation.y - deltaY / 50,
  });
  gsap.to(spiral.belowSpiral.rotation, {
    ease: Sine.easeOut,
    duration: 1.3,
    y: spiral.belowSpiral.rotation.y - deltaY / 50,
  });

  if (camera.position.y >= 0 && deltaY < 0) return;
  if (camera.position.y <= -14 && deltaY > 0) return;

  const newCameraY = deltaY > 0 ? -14 : 0;

  if (newCameraY === -14) {
    showSecondScreenDomNodes();
  } else {
    showFirstScreenDomNodes();
  }

  gsap.to(camera.position, {
    ease: Power4.easeOut,
    duration: 1,
    y: newCameraY,
  });
});
