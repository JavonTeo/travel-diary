import React from "react";
import "./CardStyles.css";
import { deleteDoc, doc } from "firebase/firestore";

function Card(props) {
  const { id, title, img, isSelected, onClick } = props;

  function handleDeleteClick(e) {
      e.stopPropagation();
      console.log(id);
      // deleteDoc(doc())
  }

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
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5 className="fw-semibold">{title}</h5>
            <button className="delete-button" onClick={handleDeleteClick}><i className="fa fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
