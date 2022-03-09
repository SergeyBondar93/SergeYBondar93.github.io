import { camera } from "../camera";
import gsap, { Power4 } from "gsap";
import {
  showFirstScreenDomNodes,
  showSecondScreenDomNodes,
  toDownBtn,
  toUpBtn,
} from "./domElementsScreensHandlers";

const handleClickByToDownButton = () => {
  showSecondScreenDomNodes();
  gsap.to(camera.position, {
    ease: Power4.easeOut,
    duration: 1.5,
    y: -14,
  });
};
const handleClickByToUpButton = () => {
  showFirstScreenDomNodes();
  gsap.to(camera.position, {
    ease: Power4.easeOut,
    duration: 1.5,
    y: 0,
  });
};

toDownBtn.addEventListener("click", handleClickByToDownButton);
toUpBtn.addEventListener("click", handleClickByToUpButton);
