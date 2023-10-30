import { LitElement, html, css } from "lit";
import styles from "../assets/styles/landing.scss";
import { router } from "lit-element-router";
import "../src/app-link.js";
import "../src/app-main.js";
import "../components/intro.js";
import "../components/socials.js";
import "../components/scrollDown.js";
import "../components/skills.js";
import "../components/reviews.js";
import "../components/projects.js";
import "../components/faq.js";
import "../components/contact.js";
import "../src/three.js";

export class LandingPage extends router(LitElement) {
  static styles = css([styles]); // Use the css tag function from lit

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      cart: { type: Array },
    };
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
  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.cart = [];
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }
  render() {
    return html`

      <div class="landing">
        <!-- three js background -->
    <three-js-component></three-js-component>
        <!-- Header -->
        <header class="header">
          <div class="header__wrap">
            <ul class="header__left">
              <app-link href="/">
                <li class="coolLink" data-text="Home"><span>Home</span></li>
              </app-link>
              <app-link href="/reviews" class="header__sm">
                <li class="coolLink " data-text="Reviews">
                  <span>Reviews</span>
                </li>
              </app-link>
              <app-link href="/projects">
                <li class="coolLink" data-text="Projects">
                  <span>Projects</span>
                </li>
              </app-link>
              <app-link href="/insights" class="header__sm">
                <li class="coolLink" data-text="Insights">
                  <span>Insights</span>
                </li>
              </app-link>
              <app-link href="/faq" class="header__sm">
                <li class="coolLink" data-text="Faq"><span>Faq</span></li>
              </app-link>
            </ul>
            <div class="header__right">
              <app-link href="/contact"
                ><button class="coolButton">
                  <span>Contact</span>
                </button></app-link
              >
            </div>
          </div>
        </header>
        <app-main active-route=${this.route}>
          <div route="home">
            <!--  Intro -->
            <intro-component></intro-component>
            <!--  Socials icons -->
            <socials-component></socials-component>
            <!-- Scroll Down -->
            <scrolldown-component></scrolldown-component>
          </div>
          <div route="reviews"></div>
          <div route="projects"></div>
          <div route="insights"></div>
          <div route="faq"></div>
          <div route="contact"></div>
          <div route="not-found">Not Found</div>
        </app-main>
      </div>
      <!-- Skills -->
      <skills-component></skills-component>
      <!-- Reviews -->
      <reviews-component></reviews-component>
      <!-- Projects -->
      <project-component></project-component>
      <!-- faq -->
      <faq-component></faq-component>
      <!-- Contact -->
      <contact-component></contact-component>
    `;
  }
  __threManipulation(){

  }
}
customElements.define("landing-page", LandingPage);
