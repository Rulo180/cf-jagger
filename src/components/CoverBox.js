import React from 'react';

import './CoverBox.scss';

class CoverBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { actionLink } = this.props;
        return (
            <section className="cover-box">
                <div className="container">
					<div className="row">
						<div className="col-12">
                            <h3 className="cover-box__title">¡Tu primera clase de prueba GRATIS!</h3>
                        </div>
                        <a href={actionLink} className="btn btn-primary cover-box__button">¡QUIERO EMPEZAR!</a>
					</div>
                </div>
            </section>
        )
    }
}

export default CoverBox;
