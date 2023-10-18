import { LitElement, html, css } from "lit";
import styles from "../assets/styles/loading.scss";
import { gsap } from "gsap";
export class LoadingPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <div class="loading">
        <div class="loading__box">
          <div class="loading__text">
            <div class="loading__text--border loading__width_animation"></div>
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
  firstUpdated() {
    this.__doLoading();
  }
  __doLoading() {
    const bar = this.shadowRoot.querySelector(".loading__bar--inner");
    const conter_num = this.shadowRoot.querySelector(
      ".loading__counter--number"
    );
    const loading_bar = this.shadowRoot.querySelector(".loading__bar");
    let c = 0;
    let barInterval = setInterval(() => {
      bar.style.width = c + "%";
      conter_num.innerText = c + "%";
      c++;
      if (c === 101) {
        clearInterval(barInterval);
        gsap.to(loading_bar, {
          duation: 5,
          rotate: "90deg",
          left: "1000%",
        });
      }
    }, 20);
  }
}

customElements.define("loading-page", LoadingPage);
