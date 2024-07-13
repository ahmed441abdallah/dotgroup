import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./images/logo2 copy.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <div className="footer text-lg-start text-md-start text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-12">
              <img src={Logo} width={"200px"} alt=""></img>
              <p style={{ width: "100%", lineHeight: "2" }}>
                Dot group creates unique and aesthetically pleasing
                architectural designs for residential, commercial, and
                institutional buildings. They focus on blending functionality,
                sustainability, and visual appeal in their designs.
              </p>
              <div className="mt-3">
                <h2>Connect with us</h2>
                <FaFacebook size={"2rem"} className="me-3 mb-3"></FaFacebook>
                <FaInstagram size={"2rem"} className="me-3 mb-3"></FaInstagram>
                <FaLinkedin size={"2rem"} className="me-3 mb-3"></FaLinkedin>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <h4 className="mt-5" style={{ color: "#000000" }}>
                Useful link
              </h4>
              <ul style={{ listStyle: "none" }}>
                <li className="nav-item  mt-3 ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/cv"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <h4 className="mt-5" style={{ color: "#000000" }}>
                Newsletter
              </h4>
              <p>
                Stay updated with our latest trends Seed heaven so said place
                winged over given forth fruit.
              </p>
              <ul style={{ listStyle: "none" }}>
                <li className="mt-5"> Tel. 123-456-7890</li>
                <li className="mt-3">Email: hello@reallygreatsite.com</li>
                <li className="mt-3"> Social: @Dot Group</li>
                <li className="mt-3">united arab emirates, ST 12345 </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <p className="text-center">
            Copyright ©2023 All rights reserved | Dot Group
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
