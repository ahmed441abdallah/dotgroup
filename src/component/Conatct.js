import React, { Fragment } from "react";
import image1 from "./images/pexels-wendy-wei-2981107.jpg";

function Contact() {
  return (
    <Fragment>
      <div className="contact mt-5 ">
        <div className="text-center">
          <h1 className="resent-head">Contact us</h1>
          <p className="resent-para">
            Far far away, behind the word mountains, far from the countries
            Vocalic and consonant's
          </p>
        </div>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-md-6 col-12 order-2 mt-2">
              <form class="row g-3">
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your Message Here
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="col-md-6">
                  <label for="validationDefault03" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault03"
                    required
                  />
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-dark " type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-12  order-1">
              <img
                src={image1}
                alt="img"
                width={"100%"}
                className="rounded"
                data-aos="fade-right"
                data-aos-duration="2000"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </Fragment>
  );
}

export default Contact;
