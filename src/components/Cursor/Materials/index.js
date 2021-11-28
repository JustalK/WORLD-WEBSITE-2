import * as THREE from 'three'
import { extend } from '@react-three/fiber'

export default class CursorMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uVeloX: { value: 0.0 },
        uVeloY: { value: 0.0 },
        uHover: { value: 0.0 },
        uTime: { value: 0 }
      },
      vertexShader: `
      varying vec2 vUv;
      uniform float uHover;
      uniform float uVeloX;
      uniform float uVeloY;
      uniform float uTime;
      void main() {
        vUv = uv;
        vec3 pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
      fragmentShader: `
      varying vec2 vUv;
      uniform float uVeloX;
      uniform float uVeloY;
      uniform float uHover;
      void main()  {
          vec2 newUV = vUv;
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }`
    })
  }

  get uVeloX() {
    return this.uniforms.uVeloX.value
  }

  set uVeloX(v) {
    return (this.uniforms.uVeloX.value = v)
  }

  get uVeloY() {
    return this.uniforms.uVeloY.value
  }

  set uVeloY(v) {
    return (this.uniforms.uVeloY.value = v)
  }

  get uHover() {
    return this.uniforms.uHover.value
  }

  set uHover(v) {
    return (this.uniforms.uHover.value = v)
  }

  get uTime() {
    return this.uniforms.uTime.value
  }

  set uTime(v) {
    return (this.uniforms.uTime.value = v)
  }
}

extend({ CursorMaterial })
