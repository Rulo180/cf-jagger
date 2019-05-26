import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';


const Card = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x card-header-bg"></i>
                    <i className="fas fa-bullseye fa-stack-1x card-header-icon"></i>
                </span>
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

Card.defaultProps = {
    title: '',
    description: '',
};

export default Card;
