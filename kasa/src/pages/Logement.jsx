import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";

function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await axios.get("/logements.json");
        const logementData = response.data.find(
          (logement) => logement.id === logementId
        );
        setLogement(logementData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchLogement();
  }, [logementId]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const tags = logement.tags;

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
      <div className="tag-container">
        {tags.map((tag) => (
          <Tag key={tag} tagName={tag} />
        ))}
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </section>
  );
}

export default Logement;
