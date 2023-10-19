import { LitElement, html, css } from "lit";
import styles from "../assets/styles/landing.scss";
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
        name: "reviews",
        pattern: "/reviews",
      },
      {
        name: "projects",
        pattern: "/projects",
      },
      {
        name: "insights",
        pattern: "/insights",
      },
      {
        name: "faq",
        pattern: "/faq",
      },
      {
        name: "contact",
        pattern: "/contact",
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
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />
      <div class="landing">
        <!-- Header -->
        <header class="header">
          <div class="header__wrap">
            <ul class="header__left">
              <app-link href="#">
                <li class="coolLink" data-text="Home"><span>Home</span></li>
              </app-link>
              <app-link href="#" class="header__sm">
                <li class="coolLink " data-text="Reviews">
                  <span>Reviews</span>
                </li>
              </app-link>
              <app-link href="#">
                <li class="coolLink" data-text="Projects">
                  <span>Projects</span>
                </li>
              </app-link>
              <app-link href="#" class="header__sm">
                <li class="coolLink" data-text="Insights">
                  <span>Insights</span>
                </li>
              </app-link>
              <app-link href="#" class="header__sm">
                <li class="coolLink" data-text="Faq"><span>Faq</span></li>
              </app-link>
            </ul>
            <div class="header__right">
              <app-link href="#"
                ><button class="coolButton">
                  <span>Contact</span>
                </button></app-link
              >
            </div>
          </div>
        </header>
        <app-main active-route=${this.route}>
          <div route="home"></div>
          <div route="reviews"></div>
          <div route="projects"></div>
          <div route="insights"></div>
          <div route="faq"></div>
          <div route="contact"></div>
        </app-main>
        <!--  Socials iccons -->
        <div class="social">
          <a href="#" target="_blank">
            <i class="uil uil-linkedin coloredIcon"></i>
          </a>
          <a href="#" target="_blank">
            <i class="uil uil-linkedin coloredIcon"></i>
          </a>
          <a href="#" target="_blank">
            <i class="uil uil-linkedin coloredIcon"></i>
          </a>
          <a href="#" target="_blank">
            <i class="uil uil-linkedin coloredIcon"></i>
          </a>
        </div>
        <!-- Scroll Down -->
        <div class="scrollDown">
          <div class="scrollDowm__wheel">
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
customElements.define("landing-page", LandingPage);
