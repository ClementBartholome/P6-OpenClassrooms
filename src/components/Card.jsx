import React from "react";
import { Link } from "react-router-dom";

function Card({ logement }) {
  const { id, cover, title } = logement;

  return (
    <article key={id}>
      <Link to={`/logement/${id}`}>
        <figure className="card">
          <img src={cover} alt={title} />
          <figcaption>
            <h2>{title}</h2>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}

export default Card;
