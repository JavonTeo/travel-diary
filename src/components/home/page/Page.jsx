import React from "react";
import "./PageStyles.css";
import StarsRating from "./StarsRating";

function Page(props) {
  const selectedPage = props.selectedPage;

  if (!selectedPage) {
    return <h2 className="text-white">Select an item to view its details!</h2>;
  }

  return (
    <div className="content position-relative rounded col-8">
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-2"
        aria-label="Close"
        onClick={() => props.setSelectedPage(null)}
      ></button>
      <h1 className="fw-bold">{selectedPage.title}</h1>
      <img className="col-12 rounded" src={selectedPage.imageURLs} />
      {/* <div id="diary-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              className="d-block w-100 c-img"
              src="../src/assets/eiffel-1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item c-item">
            <img
              className="d-block w-100 c-img"
              src="../src/assets/eiffel-2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item c-item">
            <img
              className="d-block w-100 c-img"
              src="../src/assets/eiffel-3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#diary-carousel"
          data-bs-slide="prev"
          onClick={logger}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#diary-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className="line"></div>
      <ul className="list-unstyled pl-0">
        <li>
          <span className="fw-bold">Date visited: </span>
          {selectedPage.dateVisited
            .toDate()
            .toLocaleDateString("en-US", { dateStyle: "long" })}
        </li>
        <li>
          <span className="fw-bold">Rating: </span>
          <StarsRating rating={selectedPage.rating} />
        </li>
      </ul>
      <h4 className="fw-bold">Description:</h4>
      <p>{selectedPage.description}</p>
    </div>
  );
}

export default Page;
