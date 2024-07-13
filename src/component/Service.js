import React, { Fragment } from "react";
import img1 from "./images/ser/11.png";
import img2 from "./images/ser/2.png";
import img5 from "./images/ser/5.png";
import img4 from "./images/ser/4.png";
import img6 from "./images/ser/6.png";
import img7 from "./images/ser/7.png";
import img8 from "./images/ser/8.png";
function Services() {
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="resent-head">Services</h1>
        <p className="resent-para">
          Separated they live in. Separated they live in Bookmarksgrove right at
          the coast of the Semantics,
        </p>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img1} alt="" width={"90%"}></img>
              <div className="serries-content text-center">
                <h3>Planning</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img2} alt="" width={"103%"}></img>
              <div className="serries-content text-center">
                <h3>Interior Design</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img5} alt="" width={"81%"}></img>
              <div className="serries-content text-center">
                <h3>Exterior Design</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img4} alt="" width={"90%"}></img>
              <div className="serries-content text-center">
                <h3>Decoration</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img5} alt="" width={"90%"}></img>
              <div className="serries-content text-center">
                <h3>Furniture</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img6} alt="" width={"90%"}></img>
              <div className="serries-content text-center">
                <h3>Consultation</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img7} alt="" width={"90%"}></img>
              <div className="serries-content text-center">
                <h3>Restoration</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12  ">
              <img src={img8} alt="" width={"108%"}></img>
              <div className="serries-content text-center">
                <h3>Building</h3>
                <p style={{ color: "#3D3D3D", lineHeight: "2" }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
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
export default Services;
