import React, { Fragment } from "react";
import "./arrow.css";
function Arrow() {
  return (
    <Fragment>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </Fragment>
  );
}
export default Arrow;
