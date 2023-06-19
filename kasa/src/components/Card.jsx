import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data/logements.json";

function Card() {
  const cardsList = data.map((logement) => {
    const { cover, title, id } = logement;

    return (
      <NavLink to={`logement/${id}`} key={id}>
        <div className="card">
          <img src={cover} alt={title} />
          <h2>{title}</h2>
        </div>
      </NavLink>
    );
  });

  return <section class="logements">{cardsList}</section>;
}

export default Card;
