import React from "react";
import { useState, useEffect } from 'react';//importation du hook usestate et useEffect
import { useParams, useNavigate} from 'react-router-dom';
import Slide from '../component/slide';
import LogementData from '../data/logements.json';
import "../css/housedescription.css"
import Collapse from '../component/collapse';
import Stars from '../component/stars';
import Tags from '../component/tagsname';

const HousePage = () => {
    const { id } = useParams(); // Récupère l'id du logement
    const navigate = useNavigate(); // Permet de naviguer vers d'autres routes
    const [house, setHouse] = useState(null); // Gère l'état du logement

    useEffect(() => {
        // Exécute un effet si changement de id et navigate
        const selectedLogement = LogementData.find(logement => logement.id === id);
        if (!selectedLogement) {
            navigate('/404'); // Redirection vers la page 404 si id inexistant
        } else {
            setHouse(selectedLogement);
        }
    }, [id, navigate]);

    if (!house) {
        return null; // Affiche rien tant que house n'est pas défini
    }

    

    // Si id est correct alors utilisation du composant Slide et Housedescription
    return (
        <div>
            <Slide images={house.pictures} />
            
                <div className="logement-details-container">
                    <div className="logement-details">
                        <div className="logement-infos">
                            <h2 className="logement-title">{house.title}</h2>
                            <p className="logement-location">{house.location}</p>
                            <Tags tags={house.tags} />
                        </div>
                        <div className="logement-host-and-rating">
                            <div className="logement-host">
                                <p>{house.host.name}</p>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#C4C4C4" />
                                    <image href={house.host.picture} x="0" y="0" width="64" height="64" clip-path="url(#circleClip)" />
                                    <defs>
                                        <clipPath id="circleClip">
                                            <circle cx="32" cy="32" r="32" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="logement-rating">
                                <Stars stars={house.stars} />
                            </div>
                        </div>
                    </div>
                    <div className="logement-collapses">
                        <Collapse title="Description" content={house.description} />
                        <Collapse title="Equipments" content={house.equipments} />
                    </div>
                </div>
                

            
        </div>
    );
};



export default HousePage;