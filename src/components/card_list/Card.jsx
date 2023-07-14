import React, { useState } from "react";
import "./CardStyles.css";

function Card(props) {
  const { title, img, isSelected, onClick } = props;

  return (
    <div
      className={`card justify-content-center ${
        isSelected ? "bg-info" : "bg-dark-subtle"
      }`}
      style={{ height: "65px" }}
      onClick={() => onClick()}
    >
      <div className="row g-0">
        <div className="col-md-2">
          <img src={img} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-10 d-flex align-items-center">
          <div className="card-body">
            <h5 className="fw-semibold">{title}</h5>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
