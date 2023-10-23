import { LitElement, html, css } from "lit";
import styles from "../assets/styles/swiper.scss";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export class SwiperPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit

  render() {
    return html`
      <!--  Intro -->
      <div class="swiper__wrapper">
        <div class="swiper">
          <swiper-container
            class="swiper-wrapper"
            slidesPerView="1"
            spaceBetween="30"
            pagination="true"
            clickable="true"
          >
            <div class="swiper-slide">
              <div class="review">
                
              </div>
            </div>
          </swiper-container>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("swiper-component", SwiperPage);
