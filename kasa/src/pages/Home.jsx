import React from "react";
import Banner from "../components/Banner";
import HomeBanner from "../images/banner-home.png";
import Card from "../components/Card";
import data from "../data/logements.json";

function Home() {
  return (
    <>
      <Banner
        bannerImg={HomeBanner}
        bannerTitle="Chez vous, partout et ailleurs"
      />
      <Card data={data} />
    </>
  );
}

export default Home;
