uniform float time;

varying vec2 vUv;
varying vec3 vPosition;
varying float vColorRandom;
uniform sampler2D texture1;

float PI = 3.141592653589793238;

attribute float randoms;
attribute float colorRandoms;


void main() {
  vUv = uv;
  vColorRandom = colorRandoms;
  vec4 mvPosition = modelViewMatrix * vec4( position.x,position.y * 0.15,position.z, 1. );
  gl_PointSize = (20. *randoms)* (2. / -mvPosition.z );
  gl_Position = projectionMatrix * mvPosition;
}