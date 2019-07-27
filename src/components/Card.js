import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';


const Card = ({ title, description }) => {
    const descriptionItems = description.map((e) => (
        <li class="list-group-item border-0">{e}</li>
    ));
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
                <ul class="list-group list-group-flush">
                    {descriptionItems}
                </ul>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.array,
};

Card.defaultProps = {
    title: '',
    description: [],
};

export default Card;
