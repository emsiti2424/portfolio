import { LitElement, html, css } from "lit";
import styles from "../assets/styles/reviews.scss";
import "./swiper.js"

export class ReviewsPage extends LitElement {
  static styles = css([styles]);
  render() {
    return html`
      <div class="section reviews">
        <div class="reviews__header">
          <div class="instructor">
            <div class="instructor__curve">
              <div class="instructor__infos">
                <img
                  src="http://placehold.it/100x100"
                  alt=""
                  class="instructor__img"
                />
                <div class="instructor__col">
                  <div class="instructor__info">
                    <img src="http://placehold.it/100x100" alt="" />
                    <span>4.9 / 5.0 instructor rating </span>
                  </div>
                  <div class="instructor__info">
                    <img src="http://placehold.it/100x100" alt="" />
                    <span>100+ 5 star reviews</span>
                  </div>
                  <div class="instructor__info">
                    <img src="http://placehold.it/100x100" alt="" />
                    <span>1k+ students </span>
                  </div>
                  <div class="instructor__info">
                    <img src="http://placehold.it/100x100" alt="" />
                    <span>2 major courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Swiper -->
        <swiper-component></swiper-component>
      </div>
    `;
  }
}

customElements.define("reviews-component", ReviewsPage);
