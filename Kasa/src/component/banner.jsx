import React from 'react';
import PropTypes from 'prop-types'; /*validation des props*/
import './../css/banner.css'; 

/*Composant banner*/
const Banner = ({ image, altText, text, additionalClass }) => (
  <div className={`banner ${additionalClass}`}>
    <img src={image} alt={altText} className="banner-image" />
    {text && <div className="banner-text">{text}</div>}
  </div>
);

/*Validation de chaque types de props*/
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
  additionalClass: PropTypes.string,
};

/*Props par défauts*/
Banner.defaultProps = {
  text: '',
  additionalClass: '',
};


export default Banner;