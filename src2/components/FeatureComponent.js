import React from 'react';

import './FeatureComponent.scss';

const features = ['coordinación', 'agilidad', 'velocidad'];

class FeatureComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const featuresList = features.map((f, idx) => {
            return (
                <div className="features__list" key={idx}>
                    <div className="features__item row">
                        <div className="features__icon col-3 text-right">
                            <img src="static/images/icon-circle.png" />
                        </div>
                        <div className="features__text col-9 align-self-center">{f}</div>
                    </div>
                </div>
            );
        });

        return (
            <div className="features">
                <div className="container">
                    <h2 className="features__title">MEJORAS EN...</h2>
                    {featuresList}
                    <img className="w-100" src="static/images/icon-circle.png" />
                </div>
            </div>
        )
    }
}

export default FeatureComponent;