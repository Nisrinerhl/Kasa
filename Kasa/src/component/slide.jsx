import React, { useState, useEffect } from 'react';
import '../css/slide.css';
import arrowLeft from '../images/arrow_left.png';
import arrowRight from '../images/arrow_right.png';
import propTypes from 'prop-types';

/*composant Slide qui recoit une prop images qui est un tableau contenant les chemins vers les images à afficher*/
const Slide = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);/*Garde l'image actuellement affiché*/

    /*slider vers l'image suivante*/
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };
    /*reculer vers l'image précédente*/
    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);/*Met à jour le slide actuel en fonction de l'image affichée*/
    };

    /*Ecouteur d'évènement pour changer d'image*/
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },); 
    return (
        <div className="slide">
            <div className="slide-container">
                {images.length > 1 && (
                    <>
                        <div onClick={prevSlide} className="prev" >
                            <img src={arrowLeft} alt="fleche de gauche" />
                        </div>
                        <div onClick={nextSlide} className="next">
                            <img src={arrowRight} alt="fleche de droite" />
                        </div>
                    </>
                )}
                <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
                <div className="slide-counter">{currentSlide + 1}/{images.length}</div>
            </div>
        </div>
    );
};

Slide.propTypes = {
    images: propTypes.array.isRequired
};

export default Slide;