import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Loader from "../components/Loader";

function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);
  const [isDataLoading, setDataLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(
          // Get the correct URL for deployment on gh pages
          process.env.PUBLIC_URL + "/logements.json"
        );
        const logementData = response.data.find(
          (logement) => logement.id === logementId
        );
        if (logementData) {
          setLogement(logementData);
        } else {
          navigate("/404");
        }
        setDataLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchLogement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDataLoading || !logement) {
    return <Loader />;
  }

  return (
    <section className="logement">
      <Carrousel images={logement.pictures} />
      <div className="logement-title">
        <div>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name}></img>
        </div>
      </div>
      <div className="tags-and-rating">
        <div className="tags-container">
          {logement.tags.map((tag) => (
            <Tag key={tag} tagName={tag} />
          ))}
        </div>
        <Rating rating={logement.rating} />
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </section>
  );
}

export default Logement;
