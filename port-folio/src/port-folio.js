import { LitElement, html, css } from "lit";
import styles from "../assets/styles/base.scss";
import "../components/loading.js";
import "../pages/landing.js";
export class PortFolio extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <loading-component></loading-component>
      <landing-page></landing-page>
    `;
  }
}

customElements.define("port-folio", PortFolio);
