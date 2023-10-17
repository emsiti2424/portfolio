import { LitElement, html, css } from "lit";
import styles from "../assets/styles/loading.scss";
export class LoadingPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <div class="loading">
        <div class="loading__box">*
          <div class="loading__text">
            <div class="loading__text--border"></div>
            L
            <div class="loading__text--dot"></div>
            OADING EXPERIENCE
          </div>

          <div class="loading__bar">
            <div class="loading__bar--inner"></div>
          </div>
          <div class="loading__counter">
            <span>0%</span>
            <div class="loading__counter--number">100%</div>

          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("loading-page", LoadingPage);
