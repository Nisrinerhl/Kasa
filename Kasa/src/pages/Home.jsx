import React from "react";
import Banner from '../component/banner';
import banner1 from '../images/banner1-small.png';
import '../css/housemenu.css';
import Housecard from '../component/housecard'; /*Import le composant housecard*/
import LogementData from "../data/logements.json";



const Home = () => {
    return (
        <>
            <Banner image={banner1} altText="Banner1" text="Chez vous, partout et ailleurs" />
            <div className="logements-menu">
                <div className="grid-container">
                    {/* Parcours le tableau de logements et affiche le composant housecard pour chaque logement */}
                    {LogementData.map((house) => (
                        <Housecard
                            key={house.id}
                            id={house.id}
                            title={house.title}
                            cover={house.cover}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;   