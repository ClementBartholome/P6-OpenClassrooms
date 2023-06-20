import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data/logements.json";

function Card() {
  const cardsList = data.map((logement) => {
    const { cover, title, id } = logement;

    return (
      <li key={id}>
        <NavLink to={`logement/${id}`}>
          <figure className="card">
            <img src={cover} alt={title} />
            <figcaption>
              <h2>{title}</h2>
            </figcaption>
          </figure>
        </NavLink>
      </li>
    );
  });

  return (
    <section>
      <ul className="logements">{cardsList}</ul>
    </section>
  );
}

export default Card;
