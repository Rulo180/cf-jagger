import React from 'react';

import './FeatureComponent.scss';

const features1 = ['coordinación', 'agilidad', 'velocidad', 'resistencia muscular', 'equilibrio']
const features2 = ['resistencia cardiovascular', 'precisión', 'fuerza', 'potencia', 'elongación'];

class FeatureComponent extends React.Component {
    constructor(props) {
        super(props);
	}
	
	getItem(items) {
		return items.map((f, idx) => {
			return (
				<div className="features__item" key={idx}>
					<div className="features__icon p-0 d-inline">
						<img src="static/images/miras.png" />
					</div>
					<p className="features__text align-self-center d-inline">{f}</p>
				</div>
			)
		});
	}

    render() {

		const featuresList1 = this.getItem(features1);
		const featuresList2 = this.getItem(features2);
		
		const featuresList = (
			<div className="features__list row">
				<div className="col-12 col-sm-6">
					{featuresList1}
				</div>
				<div className="col-12 col-sm-6 features__second-list-mt">
					{featuresList2}
				</div>
			</div>
		)
		
        return (
            <div className="features">
                <div className="container">
					<div className="row">
						<div className="col-12 col-lg-6">
							<h1 className="features__title mb-0">MEJORAS EN...</h1>
							{featuresList}
						</div>
						<div className="features__image col-12 col-lg-6">
							<img src="static/images/icon-circle.png" />
						</div>
					</div>
                </div>
            </div>
        )
    }
}

export default FeatureComponent;
