import React from "react";
import inactiveStar from "../images/star-inactive.png";
import activeStar from "../images/star-active.png";

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((starNumber) =>
        rating >= starNumber ? (
          <img
            key={starNumber.toString()}
            className="star"
            src={activeStar}
            alt="Rating star"
          />
        ) : (
          <img
            key={starNumber.toString()}
            className="star"
            src={inactiveStar}
            alt="Rating star"
          />
        )
      )}
    </div>
  );
}
