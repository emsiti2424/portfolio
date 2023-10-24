import { LitElement, html, css } from "lit";
import styles from "../assets/styles/swiper.scss";
import { register } from "swiper/element/bundle";
register();
import { reviews } from "../src/data.js";
export class SwiperPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit

  render() {
    return html`
      <!--  Intro -->
      <div class="swiper__wrapper">
        <div class="swiper">
          <swiper-container
            class="swiper-wrapper"
            slides-per-view="1"
            .loop="${true}"
            space-between="30"
            .clickable="${true}"
            .breakpoints="${{
              850: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
              1900: { slidesPerView: 4 },
            }}"
          >
            ${reviews.map(
              (review) =>
                html` <swiper-slide class="swiper-slide">
                  <div class="review">
                    <div class="review__card">
                      <div class="review__topborder"></div>
                      <div class="review__text">
                        <span>${review.review.substring(0, 1)}</span>
                        ${review.review.substring(1, review.review.lenght)}
                      </div>
                      <img src=${review.image} alt="" class="review__img" />
                      <div class="review__profile">
                        <span>${review.name}</span>
                        <span>${review.position}</span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>`
            )}
          </swiper-container>
        </div>
        <div class="swiper__tools">
          <div class="swiper__buttons">
            <button id="prevButton" class="swiper-button-prev">
              <img src="../assets/images/rightArrow.png" />
            </button>
            <button id="nextButton" class="swiper-button-prev">
              <img src="../assets/images/rightArrow.png" />
            </button>
            <div class="swiper-pagination"></div>
          </div>

        </div>
      </div>
    `;
  }

  firstUpdated() {
    const swiperElement = this.shadowRoot.querySelector("swiper-container");
    const prevButton = this.shadowRoot.getElementById("prevButton");
    const nextButton = this.shadowRoot.getElementById("nextButton");

    if (swiperElement) {
      const swiper = swiperElement.swiper;

      // Linking navigation buttons
      if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => swiper.slidePrev());
        nextButton.addEventListener("click", () => swiper.slideNext());
      }

// Ensure pagination is enabled and configured
swiper.params.pagination = {
  el: '.swiper-pagination', // standard class for Swiper pagination
  clickable: true,
  // more configuration options if needed...
};

// Updating Swiper to know about changes in params
swiper.update();
    }
  }
}

customElements.define("swiper-component", SwiperPage);
