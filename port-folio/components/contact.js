import { LitElement, html, css } from "lit";
import styles from "../assets/styles/contact.scss";

export class ContactPage extends LitElement {
  static styles = css([styles]); // Use the css tag function from lit
  render() {
    return html`
      <!-- Contact -->
      <section class="section contact">
        <div class="contact__wrapper">
          <div class="contact__header">
            <div class="section__header-title">/Contact</div>
            <div class="section__header-subtitle">Get in touch</div>
          </div>
          <div class="contact__form">
            <form action="#" class="form">
              <div class="form__flex">
                <div class="form__info">
                  <label>Hey, My name is </label>
                  <input
                    type="text"
                    placeholder="Type Here"
                    name="full name"
                    required
                  />
                </div>
                <div class="form__info">
                  <label>I´m looking for </label>
                  <input
                    type="text"
                    placeholder="Type of service"
                    name="service"
                    required
                  />
                </div>
              </div>
              <div class="form__flex">
                <div class="form__info">
                  <label>Get in touch with me at </label>
                  <input
                    type="email"
                    placeholder="Your email id here"
                    required
                  />
                </div>
              </div>
              <div class="form__flex">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="form__flex">
                <button class="coolButton">
                  <span>Send <i class="uil uil-message"></i></span>
                </button>
              </div>
            </form>
          </div>
          <div class="contact__profile">
            <div class="contact__profile-item">
              <img src="" alt="" />
              <div class="contact__profile-col">
                <b>Name</b>
                <span>Software Developer</span>
              </div>
            </div>
            <div class="contact__profile-item">
              <div class="contact__profile-col">
                <span>info</span>
                <span>info</span>
              </div>
            </div>
            <div class="contact__profile-item">
              <div class="contact__profile-col">
                <span>info</span>
                <span>info</span>
              </div>
              <div class="contact__profile-item">
                <div class="contact__profile-bg"></div>
                <div class="contact__profile-col">
                  <span>Get in touch</span>
                  <b>mail@mail.com</b>
                </div>
              </div>
              <div class="contact__profile-item"></div>
            </div>
          </div>
        </div>
        <div class="contact__footer">
          <div class="contact__footer-link">DS</div>
          <div class="contact__footer-link">Copyright@2023</div>
          <div class="contact__footer-link">Stay safe</div>
        </div>
      </section>
    `;
  }
}

customElements.define("contact-component", ContactPage);
