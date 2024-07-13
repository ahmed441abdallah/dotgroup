import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import Carousel from "./Carousel";
import "./main.css";
import ImageLayout from "./ImageLayout";
import main_image from "./images/project_4.jpg.webp";
import img1 from "./images/g1.jpg.webp";
import img2 from "./images/g2.jpg.webp";
import img3 from "./images/g3.jpg.webp";
import img4 from "./images/pexels-cottonbro-studio-4937197.jpg";
import Logo from "./images/logo2 copy.png";

export default function Main() {
  return (
    <Fragment>
      <div className="main mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3 className="main-head">
                Precise concept design for stylish living.
              </h3>
              <p
                style={{ width: "100%", lineHeight: "2", marginTop: "30px" }}
                className="text-lg-start text-md-start text-center"
              >
                "Welcome to Dot Group, where creativity meets innovation, and
                dreams take shape.", "Discover the art of architectural
                excellence with our visionary designs that redefine
                possibilities."
              </p>
              <img
                src={Logo}
                width={"200px"}
                alt=""
                data-aos="fade-right"
                data-aos-duration="2000"
              ></img>

              <button type="button" class="btn btn-dark mb-3">
                Get Started
              </button>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-sm-block d-xs-block">
              <img
                src={main_image}
                alt=""
                width={"100%"}
                height={"580px"}
                className="mb-5 rounded"
                data-aos="fade-left"
                data-aos-duration="2000"
              ></img>
            </div>
          </div>

          <Arrow></Arrow>
        </div>
      </div>

      <Carousel></Carousel>
      <div className="resent-work">
        <div className="text-center">
          <h1 className="resent-head">Our Recent Works may impress you</h1>
          <p className="resent-para">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="container">
          <div className="row mb-5 mt-5 ">
            <div className="col-lg-7 col-md-7 col-12 mt-5">
              <img
                src={img1}
                alt=""
                className=" custom-img"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              ></img>
            </div>
            <div className="col-lg-5 col-md-5 col-12 mt-5 ">
              <img
                src={img2}
                alt=""
                className="custom-img"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              ></img>
            </div>
            <div className="col-lg-5 col-md-5 col-12  mt-5 ">
              <img
                src={img3}
                alt=""
                className="custom-img"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              ></img>
            </div>
            <div className="col-lg-7 col-md-7 col-12 mt-5">
              <img
                src={img4}
                alt=""
                width={"100%"}
                height={"378px"}
                className="rounded custom-img2"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                style={{ marginLeft: "-164px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="resent-head text-center">
            Looking for a quality , Affordable interior design
          </h1>
          <p className="resent-para text-center">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
      </div>
      <ImageLayout></ImageLayout>
      <hr></hr>
    </Fragment>
  );
}
