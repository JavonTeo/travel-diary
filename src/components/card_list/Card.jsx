import React from "react";
import "./CardStyles.css";

function Card(props) {
  const title = props.title;
  const img = props.img;

  return (
    <div className="card bg-dark-subtle justify-content-center" style={{height: "65px"}}>
        <div className="row g-0">
            <div className="col-md-2">
                <img src={img} className="img-fluid img-thumbnail"/>
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
