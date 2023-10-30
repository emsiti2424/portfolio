import { LitElement, html, css } from "lit";
import styles from "../assets/styles/intro.scss";
import * as THREE from "three";
import images from "../src/images.js";
import vertex from "../assets/shaders/vertex.glsl";
import fragment from "../assets/shaders/fragment.glsl";
const loader = new THREE.TextureLoader();
const texture1 = loader.load(images.bg1);
const texture2 = loader.load(images.bg2);
const texture3 = loader.load(images.bg3);
const texture4 = loader.load(images.bg4);
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}
export class IntroPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit

  constructor() {
    super();

    this.scene = new THREE.Scene();
    this.perspective = 1000;
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);
    this.uniforms = {
      uTexture: { value: texture1 },
      uAlpha: { value: 0.0 },
      uOffset: { value: new THREE.Vector2(0, 0) },
      transparent: true,
    };
    this.links = [];
    this.geometry = null;
    this.material = null;
    this.hovered = false;
    this.targetX = 0;
    this.targetY = 0;
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.container = this.shadowRoot;
    this.links = [...this.shadowRoot.querySelectorAll(".shadedimg")];

    this.links.forEach((link, i) => {
      link.addEventListener("mouseenter", this.handleMouseEnter.bind(this, i));
      link.addEventListener("mouseleave", this.handleMouseLeave.bind(this));
    });
    this.setupCamera();
    this.followMouseMove();
    this.createMesh();
    this.animate();
    this.checkHovered();
    this.renderThree();
  }
  handleMouseEnter(i) {
    console.log("Mouse entered", i);
    switch (i) {
      case 0:
        this.uniforms.uTexture.value = texture1;
        break;
      case 1:
        this.uniforms.uTexture.value = texture2;
        break;
      case 2:
        this.uniforms.uTexture.value = texture3;
        break;
      case 3:
        this.uniforms.uTexture.value = texture4;
        break;
    }
  }

  handleMouseLeave() {
    this.hovered = false;
    this.uniforms.uTexture.value = texture1;
  }
  get viewport() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let aspectRatio = width / height;
    let pixelRatio = window.devicePixelRatio;
    return { width, height, aspectRatio, pixelRatio };
  }
  setupCamera() {
    window.addEventListener("resize", this.onResize.bind(this));
    let fov =
      (180 * (2 * Math.atan(window.innerHeight / 2 / this.perspective))) /
      Math.PI;
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.viewport.aspectRatio,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, this.perspective);
    //renderer
    this.renderer = new THREE.WebGL1Renderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio(this.viewport.pixelRatio);
    this.container.appendChild(this.renderer.domElement);
  }
  onResize() {
    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.fov =
      (180 * (2 * Math.atan(window.innerHeight / 2 / this.perspective))) /
      Math.PI;
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.camera.updateProjectionMatrix();
  }
  createMesh() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.sizes.set(370, 470, 1);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
    this.mesh.position.set(this.offset.x, this.offset.y, 0);
    this.scene.add(this.mesh);
  }
  checkHovered() {
    this.addEventListener("mouseenter", () => {
      this.hovered = true;
    });
    this.addEventListener("mouseleave", () => {
      this.hovered = false;
      this.uniforms.uTexture = { value: texture1 };
    });
  }
  followMouseMove() {
    console.log("followMouseMove");
    window.addEventListener("mousemove", (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });
  }
  animate() {
    requestAnimationFrame(() => this.animate());

    this.renderer.render(this.scene, this.camera);
  }
  renderThree() {
    this.offset.x = lerp(this.offset.x, this.targetX, 0.1);
    this.offset.y = lerp(this.offset.y, this.targetY, 0.1);
    this.uniforms.uOffset.value.set(
      (this.targetX - this.offset.x) * 0.0006,
      -(this.targetY - this.offset.y) * 0.0006
    );
    this.mesh.position.set(
      this.offset.x - window.innerWidth / 2,
      -this.offset.y + window.innerHeight / 2
    );
    this.hovered
      ? (this.uniforms.uAlpha.value = lerp(
          this.uniforms.uAlpha.value,
          1.0,
          0.1
        ))
      : (this.uniforms.uAlpha.value = lerp(
          this.uniforms.uAlpha.value,
          0.0,
          0.1
        ));
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.renderThree.bind(this));
  }
  render() {
    return html`
      <!--  Intro -->
      <div class="intro">
        <h4>Hi 😎, My name is</h4>
        <h1 class="shadedimg">Sebastian Gabriel</h1>
        <h1 class="shadedimg">Full stack web developer</h1>
        <h1 class="shadedimg">From Romania, currently living in Spain</h1>
      </div>
      <div></div>
    `;
  }
}

customElements.define("intro-component", IntroPage);
