import React from "react";
import PopupForm from "./PopupForm";

function AddPopup(props) {
  return props.openPopup ? (
    <div
      className="position-fixed top-0 min-vh-100 col-12 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="position-relative col-8 bg-light">
        <button
          className="position-absolute top-0 end-0"
          onClick={() => props.setOpenPopup(false)}
        >
          close
        </button>
        <h2>New Page</h2>
        <PopupForm pagesCollectionRef={props.pagesCollectionRef}/>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddPopup;
