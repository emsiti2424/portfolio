import { LitElement, html, css } from "lit";
import styles from "../assets/styles/skills.scss";

export class SkillsPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <!-- skills -->
    `;
  }
}

customElements.define("skills-component", SkillsPage );
