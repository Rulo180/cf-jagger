import React from 'react';

import './CoverBox.scss';

class CoverBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cover-box">
                <div className="container">
					<div className="row">
						<div className="col-12">
                            <h3>¡Tu primera clase de prueba GRATIS!</h3>
                        </div>
                        <button className="btn btn-primary cover-box__button">¡QUIERO EMPEZAR!</button>
					</div>
                </div>
            </div>
        )
    }
}

export default CoverBox;