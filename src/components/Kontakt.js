import React from "react";
import "./Kontakt.css";
import { init } from "emailjs-com";
import emailjs from 'emailjs-com';

init("user_VYUxfuaqCOkmhHuH4RFjm");

function Kontakt() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a983prk",
        "template_fmrhjdp",
        e.target,
        "user_VYUxfuaqCOkmhHuH4RFjm"
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
  }

  return (
    <div className="section3">
      <div className="section__wrapper">
        <div className="section__header">
          <a
            className="section__header__text"
            style={{ color: "white", paddingTop: "1%" }}
          >
            Kontakt
          </a>
        </div>

        <div className="section_items">
         
            <form onSubmit={sendEmail}>
              <div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email-Addresse"
                    name="email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Betreff"
                    name="subject"
                  />
                </div>
                <div>
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Deine Nachricht"
                    name="message"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Senden"
                  ></input>
                </div>
              </div>
            </form>
          </div>

      </div>
    </div>
  );
}

export default Kontakt;
