import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import vertexSpiralShader from "./vertexSpiralShader.glsl";
import fragmentSpiralShader from "./fragmentSpiralShader.glsl";

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
loader.setDRACOLoader(dracoLoader);

export class Spiral {
  aboveSpiral: any;
  belowSpiral: any;
  number: number;
  isReady: boolean;
  constructor() {
    this.isReady = false;
  }

  async init() {
    const geometry: any = await new Promise((res) => {
      loader.load("dna-02.glb", (gltf: any) =>
        res(gltf.scene.children[0].geometry)
      );
    });

    const material = new THREE.ShaderMaterial({
      extensions: {
        // derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        uColor1: { value: new THREE.Color(0x612574) },
        uColor2: { value: new THREE.Color(0x293583) },
        uColor3: { value: new THREE.Color(0x1954ec) },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: vertexSpiralShader,
      fragmentShader: fragmentSpiralShader,
      blending: THREE.AdditiveBlending,
    });

    this.number = geometry.attributes.position.array.length;

    const randoms = new Float32Array(this.number / 3);
    const colorRandoms = new Float32Array(this.number / 3);

    for (let i = 0; i < this.number / 3; i++) {
      randoms.set([Math.random() * 0.4 + 0.4], i);
      colorRandoms.set([Math.random()], i);
    }

    geometry.setAttribute("randoms", new THREE.BufferAttribute(randoms, 1));
    geometry.setAttribute(
      "colorRandoms",
      new THREE.BufferAttribute(colorRandoms, 1)
    );

    const mesh = new THREE.Points(geometry, material);
    mesh.position.y = -10;
    mesh.position.x = 5;

    this.aboveSpiral = mesh;

    const belowSpiral = mesh.clone();
    this.belowSpiral = belowSpiral;

    belowSpiral.position.y = -4;
    belowSpiral.position.x = -5;
    belowSpiral.position.z = -1;
    belowSpiral.rotation.x = Math.PI;
    this.isReady = true;
    return [this.aboveSpiral, this.belowSpiral];
  }
}

export const spiral = new Spiral();
