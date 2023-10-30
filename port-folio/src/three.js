import { LitElement, html, css } from "lit";
import * as THREE from "three";
import images from "../src/images.js";
class ThreeJSComponent extends LitElement {
  static styles = css`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -5;
    }
  `;
  constructor() {
    super();
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.mesh = null;
    this.count = null;
    this.clock = null;
    this.loader = null;
    this.geometry = null;
    this.material = null;
  }
  firstUpdated() {
    this.initThreeJs();
    this.animate();
  }

  initThreeJs() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGL1Renderer({
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.shadowRoot.appendChild(this.renderer.domElement);
    this.loader = new THREE.TextureLoader();
    this.geometry = new THREE.PlaneGeometry(18, 10, 15, 9);
    this.material = new THREE.MeshBasicMaterial({
      /* color: 0xff0000, */ map: this.loader.load(images.bg1),
      /* wireframe: true, */
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
    this.camera.position.z = 5;
    this.count = this.geometry.attributes.position.count;
    this.clock = new THREE.Clock();
    window.addEventListener("resize", () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const time = this.clock.getElapsedTime();
    /*   this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01; */
    for (let i = 0; i < this.count; i++) {
      const x = this.geometry.attributes.position.getX(i);
      const y = this.geometry.attributes.position.getY(i);
      //animations
      const anim1 = 0.75 * Math.sin(x + time * 0.7);
      const anim2 = 0.25 * Math.sin(y + time * 0.7);
      /*   this.geometry.attributes.position.setZ(i, -y * time * 2); */
      this.geometry.attributes.position.setZ(i, anim1, anim2);
      this.geometry.computeVertexNormals();
      this.geometry.attributes.position.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return html` <div></div>`;
  }
}

customElements.define("three-js-component", ThreeJSComponent);
