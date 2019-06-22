import React from 'react';
import classNames from 'classnames';

import './CoverBox.scss';

class CoverBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { actionLink } = this.props;

        const sectionClasses = classNames(
            'cover-box',
            {'cover-box--maipu': this.props.box === "maipu"},
            {'cover-box--gc': this.props.box === "godoyCruz"},
        );

        return (
            <section className={sectionClasses}>
                <div className="container">
					<div className="row">
						<div className="col-12 text-center">
                            <h3 className="cover-box__title">¡Tu primera clase de prueba GRATIS!</h3>
                            <a href={actionLink} className="btn btn-primary cover-box__button">¡QUIERO EMPEZAR!</a>
                        </div>
					</div>
                </div>
            </section>
        )
    }
}

export default CoverBox;
