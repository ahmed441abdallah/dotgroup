import React, { Fragment } from "react";
import Arrow from "./component/Arrow";
import img from "./component/images/bg_3.jpg.webp";
function Resume() {
  return (
    <Fragment>
      <div className="about-us mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <img
                src={img}
                alt=""
                width={"100%"}
                height={"480px"}
                data-aos="fade-right"
                data-aos-duration="2000"
              ></img>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div>
                <h1 className=" mb-5 text-center">
                  We are the best Interior, Exterior & Architecture Firm
                </h1>
                <p style={{ width: "90%", lineHeight: "1.9" }} className="ms-4">
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their. When she reached the first hills of the
                  Italic Mountains, she had a last view back on the skyline of
                  her hometown Bookmarksgrove, the headline of Alphabet Village
                  and the subline of her own road, the Line Lane. Pityful a
                  rethoric question ran over her cheek, then she continued her
                  way.
                </p>
                <button className="btn btn-dark ms-4 ">Learn more</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-5">
              <div className="border border-white p-3 text-lg-start text-md-start text-center">
                <h3 className="mb-3 ">Mosaic</h3>
                <p style={{ lineHeight: "1.7" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-5">
              <div className="border border-white p-3 text-lg-start text-md-start text-center">
                <h3 className="mb-3 ">Mission</h3>
                <p style={{ lineHeight: "1.7" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-5">
              <div className="border border-white p-3 text-lg-start text-md-start text-center">
                <h3 className="mb-3 r">Vision</h3>
                <p style={{ lineHeight: "1.7" }}>
                  A small river named Duded flows by their place and supplies it
                  with the necessary regalia. It is a paradigmatic country, in
                  which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
