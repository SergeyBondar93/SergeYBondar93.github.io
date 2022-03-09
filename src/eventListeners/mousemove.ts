import { camera } from "../camera";
import { cursor, pointLight1, pointLight2, pointLight3 } from "../meshs/cursor";
import { state } from "../state";
import gsap, { Back } from "gsap";

let isBlocked = false;

export const changeCursorPositionHandler = () => {
  const newMouseX = (state.mouseX - state.windowWidth / 2) / 100;
  const newMouseY =
    (state.windowHeight / 2 - state.mouseY) / 100 + camera.position.y;

  gsap.to(cursor.position, {
    ease: Back.easeOut,
    duration: 1,
    x: newMouseX,
    y: newMouseY,
  });

  if (state.needAnimateCursorPoints) {
    const newPointLight1X = newMouseX - 0.7;
    const newPointLight1Y = newMouseY + 0.3;

    const newPointLight2X = newMouseX + 0.7;
    const newPointLight2Y = newMouseY + 0.1;

    const newPointLight3X = newMouseX - 0.1;
    const newPointLight3Y = newMouseY - 0.6;

    gsap.to(pointLight1.position, {
      ease: Back.easeOut,
      duration: 1.5,
      x: newPointLight1X,
      y: newPointLight1Y,
    });

    gsap.to(pointLight2.position, {
      ease: Back.easeOut,
      duration: 2,
      x: newPointLight2X,
      y: newPointLight2Y,
    });

    gsap.to(pointLight3.position, {
      ease: Back.easeOut,
      duration: 2.5,
      x: newPointLight3X,
      y: newPointLight3Y,
    });
  }

  isBlocked = false;
};

window.addEventListener("mousemove", (e) => {
  if (!isBlocked) {
    const { clientY, clientX } = e;
    isBlocked = true;
    requestAnimationFrame(() => {
      state.setMouseCoords(clientX, clientY);
      changeCursorPositionHandler();
    });
  }
});
