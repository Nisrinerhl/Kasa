import React from 'react';
import star_active from '../images/star_active.png';
import star_inactive from './../images/star_inactive.png';
import propTypes from 'prop-types';

const Stars = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<img key={i} src={star_active} alt="star" />);
            } else {
                stars.push(<img key={i} src={star_inactive} alt="star" />);
            }
        }
        return stars;
    };
    return <div className="rating">{renderStars()}</div>;
};
//validation des props
Stars.propTypes = {
    rating: propTypes.number.isRequired
};
export default Stars;