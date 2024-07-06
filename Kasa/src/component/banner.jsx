import React from 'react';
import PropTypes from 'prop-types'; // Pour la validation des props
import './../css/banner.css'; 

// Définir le composant Banner
const Banner = ({ image, altText, text, additionalClass }) => (
  <div className={`banner ${additionalClass}`}>
    <img src={image} alt={altText} className="banner-image" />
    {text && <div className="banner-text">{text}</div>}
  </div>
);

// Valider les types des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
  additionalClass: PropTypes.string,
};

// Définir les props par défaut
Banner.defaultProps = {
  text: '',
  additionalClass: '',
};

// Exporter le composant
export default Banner;