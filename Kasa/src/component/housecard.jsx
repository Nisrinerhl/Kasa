import '../css/housecard.css'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';//importe le hook usenavigate qui permet de naviguer vers une autre page

//creation du composant HousingCard qui prend en parametre  d entree 3 props l'id, le titre et la photo du logement
const HouseCard = ({ id, title, cover }) => {
  const navigate = useNavigate();//permet de naviguer vers d autres routes

  //fonction qui permet de declencher vers une  page detailler du logement en cliquant sur le logement
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