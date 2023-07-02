import React from "react";
import Card from "./Card";
import "./CardStyles.css";

function CardList(props) {
  const { pagesList, onPageClick } = props;

  return (
    <ul className="list-group md-z">
      {pagesList.map((page) => (
        <li key={page.id} className="list-group-item" onClick={() => onPageClick(page)}>
          <Card
            title={page.title}
            img="https://media.istockphoto.com/photos/eiffel-tower-in-spring-picture-id1297043676?b=1&k=20&m=1297043676&s=170667a&w=0&h=kXklVKUeWIw7UWDDYnxMzB3uXS9prFiea3RaRPyB5M0="
          />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
// img="https://media.istockphoto.com/photos/eiffel-tower-in-spring-picture-id1297043676?b=1&k=20&m=1297043676&s=170667a&w=0&h=kXklVKUeWIw7UWDDYnxMzB3uXS9prFiea3RaRPyB5M0="
