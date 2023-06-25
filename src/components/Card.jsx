import React from "react";
import { NavLink } from "react-router-dom";

function Card({ logement }) {
  const { id, cover, title } = logement;

  return (
    <article key={id}>
      <NavLink to={`logement/${id}`}>
        <figure className="card">
          <img src={cover} alt={title} />
          <figcaption>
            <h2>{title}</h2>
          </figcaption>
        </figure>
      </NavLink>
    </article>
  );
}

export default Card;
