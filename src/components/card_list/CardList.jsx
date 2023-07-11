import React from "react";
import Card from "./Card";
import "./CardStyles.css";
import Header from "./Header";

function CardList(props) {
  const { pagesList, onPageClick, setOpenPopup } = props;

  return (
    <div className="col-4 bg-dark" style={{height: "100vh", width: "400px"}}>
      <Header />
      <ul className="list-group">
        {pagesList.map((page) => (
          <li
            key={page.id}
            className="list-group-item bg-dark"
            onClick={() => onPageClick(page)}
          >
            <Card
              title={page.title}
              img="https://media.istockphoto.com/photos/eiffel-tower-in-spring-picture-id1297043676?b=1&k=20&m=1297043676&s=170667a&w=0&h=kXklVKUeWIw7UWDDYnxMzB3uXS9prFiea3RaRPyB5M0="
            />
          </li>
        ))}
      </ul>
      <button onClick={() => setOpenPopup(true)}>Add a new page</button>
    </div>
  );
}

export default CardList;
// img="https://media.istockphoto.com/photos/eiffel-tower-in-spring-picture-id1297043676?b=1&k=20&m=1297043676&s=170667a&w=0&h=kXklVKUeWIw7UWDDYnxMzB3uXS9prFiea3RaRPyB5M0="
