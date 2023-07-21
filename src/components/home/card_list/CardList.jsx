import React, { useState } from "react";
import Card from "./Card";
import "./CardStyles.css";
import Header from "./Header";

function CardList(props) {
  const { pagesList, setSelectedPage, setOpenPopup } = props;
  const [selectedCard, setSelectedCard] = useState(null);
  
  return (
    <div className="d-flex flex-column bg-dark" style={{height: "100vh", width: "325px"}}>
      <Header />
      <ul className="list-group flex-grow-1">
        {pagesList.map((page) => (
          <li
            key={page.id}
            className="list-group-item bg-dark"
          >
            <Card
              title={page.title}
              img={page.imageURLs}
              isSelected={selectedCard === page}
              onClick={() => {
                setSelectedCard(page);
                setSelectedPage(page);
              }}
            />
          </li>
        ))}
      </ul>
      <div className="d-grid gap-2 mt-auto">
        <button type="button" className="btn btn-success btn-lg" onClick={() => setOpenPopup(true)}>+ Add a new page</button>
      </div>
    </div>
  );
}

export default CardList;
