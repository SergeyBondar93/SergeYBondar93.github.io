class State {
  windowHeight: number;
  windowWidth: number;
  aspect: number;
  mouseX: number;
  mouseY: number;

  needAnimateCursorPoints: boolean;

  constructor() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.aspect = this.windowWidth / this.windowHeight;
    this.mouseX = 0;
    this.mouseY = 0;

    this.needAnimateCursorPoints = true;
  }

  setMouseCoords(mouseX: number, mouseY: number) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
  }
}

export const state = new State();
