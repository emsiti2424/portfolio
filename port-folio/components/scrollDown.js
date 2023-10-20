import { LitElement, html, css } from "lit";
import styles from "../assets/styles/socrollDown.scss";
import { gsap } from "gsap";
export class ScrollDownPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
    <!-- Scroll Down -->
    <div class="scrollDown">
          <div class="scrollDown__wheel">
            <div class="scrollDown__wheel--inner"></div>
          </div>
          <div class="scrollDown__arrows">
            <span class="scrollDown__arrow"></span>
            <span class="scrollDown__arrow"></span>
            <span class="scrollDown__arrow"></span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("scrolldown-component", ScrollDownPage);
