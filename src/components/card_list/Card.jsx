import React from "react";
import "./CardStyles.css";

function Card(props) {
  const title = props.title;
  const img = props.img;

  return (
    <div className="card">
        <div className="row g-0 align-items-center">
            <div className="col-md-4">
                <img src={img}/>
            </div>
            <div className="col-md-8">
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
