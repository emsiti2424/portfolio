import { LitElement, html, css } from "lit";
import styles from "../assets/styles/faq.scss";

export class FaqPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <div class="faq">
        <div class="faq__wrap">
          <div class="section__header-title">Faq</div>
          <div class="section__header-subtitle">Have any questions?</div>
          <div class="question">
            <div class="question__wrap">
              <div class="question__status"></div>
              <h3>How long it take to build a website?</h3>
            </div>
            <div class="question__answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptua
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  firstUpdated() {
    this.__questionsFunctionality();
  }
  __questionsFunctionality() {
    // All the question elements within this component
    const questions = this.shadowRoot.querySelectorAll(".question");

    questions.forEach((question) => {
      question.addEventListener("click", (event) => {
        // If the clicked question is already open, we'll be closing it, so no need to close all others
        if (question.classList.contains("open")) {
          question.classList.remove("open");
          return; // early return to skip closing all others
        }

        // Close all questions (remove 'open' from all)
        questions.forEach((q) => q.classList.remove("open"));

        // Open the clicked question (add 'open' to class list)
        question.classList.add("open");
      });
    });
  }

}

customElements.define("faq-component", FaqPage);
