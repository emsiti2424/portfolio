import { LitElement, html, css } from "lit";
import styles from "../assets/styles/intro.scss";

export class IntroPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <!--  Intro -->
      <div class="intro">
        <h4>Hi 😎, My name is</h4>
        <h1>Sebastian Gabriel</h1>
        <h1>Full stack web developer</h1>
        <h1>From Romania, currently living in Spain</h1>
      </div>
    `;
  }
}

customElements.define("intro-component", IntroPage);
