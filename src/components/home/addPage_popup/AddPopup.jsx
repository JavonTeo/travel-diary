import React from "react";
import PopupForm from "./PopupForm";

function AddPopup(props) {
  return props.openPopup ? (
    <div
      className="position-fixed top-0 min-vh-100 col-12 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="position-relative col-8 bg-light rounded">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          aria-label="Close"
          onClick={() => props.setOpenPopup(false)}
        ></button>
        <h2 className="my-1 mx-2">Add a New Page</h2>
        <PopupForm
          pagesCollectionRef={props.pagesCollectionRef}
          setOpenPopup={props.setOpenPopup}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddPopup;
