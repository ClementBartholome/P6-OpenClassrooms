import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json";
import Collapse from "../components/Collapse";

function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);

  useState(() => {
    const logementData = logementsData.find(
      (logement) => logement.id === logementId
    );

    // The state logement is updated everytime the logementId changes in the URL
    setLogement(logementData);
  }, [logementId]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <section className="logement">
      {/* Créer composant Carrousel */}
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </section>
  );
}

export default Logement;
