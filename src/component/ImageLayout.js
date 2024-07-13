import React, { Fragment } from "react";
function ImageLayout() {
  return (
    <Fragment>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
          <div
            className="col-lg-6 col-md-6 mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs="
              alt=""
              style={{ marginTop: "90px" }}
            ></img>
          </div>
          <div
            className="col-lg-4 md-4  mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={"100%"}
            ></img>
          </div>
          <div
            className="col-lg-6 md-8 mt-5 custom-img2"
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ marginLeft: "100px", marginTop: "10px" }}
          >
            <img
              src="https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={"100%"}
            ></img>
          </div>
          <div
            className="col-lg-6 md-8 mt-5 "
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ marginRight: "100px", marginTop: "10px" }}
          >
            <img
              src="https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={"100%"}
            ></img>
          </div>
          <div
            className="col-lg-4 md-4 mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={"100%"}
            ></img>
          </div>
          <div
            className="col lg-6 col-md-6 col-12 mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://media.istockphoto.com/id/1371075570/photo/stylish-scandinavian-living-room-interior-of-modern-apartment-with-wooden-commode-design.jpg?s=612x612&w=0&k=20&c=ppbE4ev9933UJaH9jFdoQ6lY1gs17wR5Z0CG1Sj3s6Q="
              alt=""
              width={"100%"}
            ></img>
          </div>
          <div
            className="col-lg-4 col-md-4 col-12 mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src="https://media.istockphoto.com/id/1439952380/photo/domestic-composition-of-living-room-interior-with-beige-sofa-pillow-plaid-coffee-table-rattan.jpg?s=612x612&w=0&k=20&c=8kW7cDM33UkZnstOZJHY6B3XtS6J-j839oMuJskFX1Y="
              alt=""
              width={"100%"}
              className="custom-img2"
              style={{ marginLeft: "100px", marginTop: "70px" }}
            ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ImageLayout;
