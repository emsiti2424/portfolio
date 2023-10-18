import { LitElement, html, css } from "lit";
import styles from "../assets/styles/loading.scss";
import { router } from "lit-element-router";
import "../src/app-link.js";
import "../src/app-main.js";
export class LandingPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      cart: { type: Array },
    };
  }
  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.cart = [];
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "#",
        pattern: "#",
      },
      {
        name: "detail",
        pattern: "/detail/:id",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }
  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
  }
  render() {
    return html`
      <div class="landing">
        <!-- Header -->
        <header>
          <div class="header__wrap">
            <ul class="header__left">
              <app-link href="#">
                <li><span>Home</span></li>
              </app-link>
              <app-link href="#">
                <li><span>Reviews</span></li>
              </app-link>
              <app-link href="#">
                <li><span>Projects</span></li>
              </app-link>
              <app-link href="#">
                <li><span>Insights</span></li>
              </app-link>
              <app-link href="#">
                <li><span>Faq</span></li>
              </app-link>
            </ul>
            <div class="header__right">
              <button>Contact</button>
            </div>
          </div>
        </header>
        <app-main active-route=${this.route}>
          <div route="home"></div>
        </app-main>
      </div>
    `;
  }
}
customElements.define("landing-page", LandingPage);
