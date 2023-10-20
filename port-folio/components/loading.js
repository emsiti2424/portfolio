import { LitElement, html, css } from "lit";
import styles from "../assets/styles/loading.scss";
import { gsap } from "gsap";
export class LoadingPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <div class="loading">
        <div class="loading__box">
          <img
            src="../assets/images/loaders/loader15.svg"
            class="loading__svg"
          />
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
            <div class="loading__counter--number">0%</div>
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
    const loading_text = this.shadowRoot.querySelector(".loading__text");
    const loading_counter = this.shadowRoot.querySelector(".loading__counter");
    const loading_box = this.shadowRoot.querySelector(".loading__box");
    const loading_svg = this.shadowRoot.querySelector(".loading__svg");
    const loading_part = this.shadowRoot.querySelector(".loading");
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
          ease: "power2.out",
        });
        gsap.to([loading_text, loading_counter], {
          duation: 0.5,
          opacity: "0",
        });
        gsap.to(loading_box, {
          duation: 1,
          height: "500px",
          borderRadius: "50%",
        });
        gsap.to(loading_svg, {
          duration: 10,
          opacity: 1,
          rotate: "360deg",
        });
        gsap.to(loading_box, {
          delay: 2,
          border: "none",
        });
        gsap.to(loading_part, {
          delay: 2,
          duration: 2,
          zIndex: 1,
          background: "transparent",
          opacity: 0.5,
        });
        gsap.to(loading_svg, {
          delay: 200,
          duration: 2,
          rotate: "360deg",
        });
      }
    }, 20);
  }
}

customElements.define("loading-component", LoadingPage);
