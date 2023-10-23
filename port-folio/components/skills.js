import { LitElement, html, css } from "lit";
import styles from "../assets/styles/skills.scss";

export class SkillsPage extends LitElement {
  static styles = css([styles]);
  render() {
    return html`
      <!-- skills -->
      <section class="skills">
        <div class="skills__header">My expertise</div>
        <div class="skills__text skills__text--left">
          Web Developer &nbsp;&nbsp;&nbsp;Web Developer &nbsp;&nbsp;&nbsp;
        </div>
        <div class="skills__text skills__text--right">
          Web Developer &nbsp;&nbsp;&nbsp;Web Developer &nbsp;&nbsp;&nbsp;
        </div>
      </section>
    `;
  }
}

customElements.define("skills-component", SkillsPage);
