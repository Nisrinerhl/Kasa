import '../css/housecard.css'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';/*importation du hook usenavigate qui permet de naviguer vers une autre page*/

/*création du composant Housecard avec pour paramètre 3 props l'id, le titre et la photo du logement*/
const HouseCard = ({ id, title, cover }) => {
  const navigate = useNavigate();/* Navigation vers d'autres routes*/

  
  /*Fonction pour naviguer vers la page détailler du logement en cliquant sur la card*/
  const handleCardClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="logements-card" data-id={id} onClick={handleCardClick}>
      <div className="card-cover">
        <img src={cover} alt={title} />
        <div className="card-content">
          {title}
        </div>
      </div>
    </div>
  );
};

export default HouseCard;