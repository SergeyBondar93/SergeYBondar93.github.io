import { pointLight1, pointLight2, pointLight3 } from "../meshs/cursor";
import gsap, { Back, Elastic } from "gsap";

import { state } from "../state";
import { changeCursorPositionHandler } from "./mousemove";

export const toDownBtn = document.querySelector(".arrows-down") as SVGElement;
export const toUpBtn = document.querySelector(".arrows-up") as SVGElement;

export const githubLink = document.getElementById(
  "github-link"
) as HTMLLinkElement;
export const hhLink = document.getElementById("hh-link") as HTMLLinkElement;
export const tgLink = document.getElementById("tg-link") as HTMLLinkElement;
export const emailLink = document.getElementById(
  "email-link"
) as HTMLLinkElement;

export const showFirstScreenDomNodes = () => {
  toDownBtn.style.visibility = "visible";
  toUpBtn.style.visibility = "hidden";
  setTimeout(() => {
    changeCursorPositionHandler();
  }, 1000);
  setTimeout(() => {
    gsap.to(pointLight1, {
      duration: 2,
      intensity: 0.6,
    });
    gsap.to(pointLight2, {
      duration: 2,
      intensity: 0.6,
    });
    gsap.to(pointLight3, {
      duration: 2,
      intensity: 0.6,
    });
  }, 0);

  state.needAnimateCursorPoints = true;
};

export const showSecondScreenDomNodes = () => {
  toDownBtn.style.visibility = "hidden";
  toUpBtn.style.visibility = "visible";
  setTimeout(() => {
    changeCursorPositionHandler();
  }, 1000);

  setTimeout(() => {
    state.needAnimateCursorPoints = false;

    gsap.to(pointLight1.position, {
      ease: Back.easeOut,
      duration: 3.5,
      x: -2,
      y: -14,
    });

    gsap.to(pointLight2.position, {
      ease: Back.easeOut,
      duration: 3,
      x: 3.8,
      y: -11,
    });

    gsap.to(pointLight3.position, {
      ease: Back.easeOut,
      duration: 3.5,
      x: 2.5,
      y: -17,
    });
  }, 1500);

  setTimeout(() => {
    gsap.to(pointLight1, {
      duration: 2,
      intensity: 1.5,
    });
    gsap.to(pointLight2, {
      duration: 2,
      intensity: 1.5,
    });
    gsap.to(pointLight3, {
      duration: 2,
      intensity: 1.5,
    });
  }, 2000);
};
