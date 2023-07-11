import React from "react";
import "./CardStyles.css";

function Card(props) {
  const title = props.title;
  const img = props.img;

  return (
    <div className="card bg-dark-subtle" style={{height: "90px"}}>
        <div className="row g-0">
            <div className="col-md-3">
                <img src={img} className="img-fluid img-thumbnail mw-20"/>
            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <h4 className="card-title m-0">{title}</h4>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
