import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import TitleSection from "../../components/TitleSection";
import ContactCard from "./ContactCard";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w3c7jqb",
        "template_ph73oau",
        form.current,
        "8Fbln6DhKR0dADA6F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact section sec" id="contact">
      <TitleSection subtitle="Get in Touch" sectionName="Contact Me" />
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <ContactCard type={"Email"} link={"anjumhossain52@gmail.com"} />
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your Project</h3>
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Names
              </label>
              <input
                name="name"
                type="text"
                placeholder="Insert Your Name"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Mail
              </label>
              <input
                name="email"
                type="email"
                placeholder="Insert Your Email"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="contact__form-input contact__form-area"
                placeholder="Write Your Project"
              ></textarea>
            </div>
            <input type="submit" value="Send Message" className="button new" />
            {/* <button className='button'>Send Message</button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
