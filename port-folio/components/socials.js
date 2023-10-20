import { LitElement, html, css } from "lit";
import styles from "../assets/styles/socials.scss";
import { gsap } from "gsap";
export class SocialsPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />
      <!--  Socials icons -->
      <div class="social">
        <a href="#" target="_blank">
          <i class="uil uil-linkedin coloredIcon"></i>
        </a>
        <a href="#" target="_blank">
          <i class="uil uil-linkedin coloredIcon"></i>
        </a>
        <a href="#" target="_blank">
          <i class="uil uil-linkedin coloredIcon"></i>
        </a>
        <a href="#" target="_blank">
          <i class="uil uil-linkedin coloredIcon"></i>
        </a>
      </div>
    `;
  }
}

customElements.define("socials-component", SocialsPage);
