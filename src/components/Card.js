import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';


const Card = ({ title, description }) => {
    const descriptionItems = description.map((e) => (
        <li class="list-group-item">{e}</li>
    ));
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-header__circle">
                    <div className="card-header__circle-border">
                        <img src="../static/images/mira-negra.png" alt="Crossfit Jager icon" className="card-header__circle-icon" />
                    </div>
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
