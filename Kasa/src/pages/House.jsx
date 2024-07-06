import React from "react";
import { useState, useEffect } from 'react'; /*importation du hook usestate et useEffect*/
import { useParams, useNavigate} from 'react-router-dom'; /*importation du hook useparams et usenavigate*/
import Slide from '../component/slide';
import LogementData from '../data/logements.json';
import "../css/housedescription.css"
import Collapse from '../component/collapse';
import Stars from '../component/stars';
import Tags from '../component/tagsname';

const HousePage = () => {
    const { id } = useParams(); /*Récupère l'id du logement*/
    const navigate = useNavigate(); /*Navigue vers d'autres routes*/
    const [house, setHouse] = useState(null); /*Gère l'état du logement si rempli ou vide*/

    useEffect(() => {
        /*Exécute un effet si changement de id et navigate*/
        const selectedLogement = LogementData.find(logement => logement.id === id);
        if (!selectedLogement) {
            navigate('/404'); /*Redirige vers la page error 404 si l'id est inexistant*/
        } else {
            setHouse(selectedLogement);
        }
    }, [id, navigate]);

    if (!house) {
        return null; /*N'affiche rien si le param house n'est pas défini*/
    }

    

    /*Si id correct, utilisation des composants slide et housedescription*/
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
                                <img src={house.host.picture} alt="Host" className="host-picture" />
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