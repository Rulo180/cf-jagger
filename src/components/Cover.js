import React from 'react';

import './Cover.scss';

class Cover extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="cover">
                <div className="container">
					<div className="row">
						<div className="col-12">
                            <h3>El mejor momento es AHORA</h3>
                            <h3>El mejor lugar es ACA</h3>
                            <h4 className="cover__subtitle">¿Comenzamos?</h4>
                        </div>
						<div className="col"></div>
					</div>
                </div>
            </section>
        )
    }
}

export default Cover;
