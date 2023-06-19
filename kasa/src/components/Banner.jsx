import React from "react";

function Banner({ bannerImg, bannerTitle }) {
  return (
    <div className="banner">
      <img src={bannerImg} alt={bannerTitle} />
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default Banner;
