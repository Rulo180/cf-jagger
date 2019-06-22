import React from 'react';
import { Link } from 'react-router-dom';

import './BoxSection.scss';
import { MAIPU_APP_LINK, GODOY_CRUZ_APP_LINK } from '../constants';


class BoxSection extends React.Component {
    constructor(props) {
        super(props);

        this.side = this.props.side || 'right';
        this.name = this.props.boxName;
        this.image = 'url(static/images/' + this.props.image + ')';
    }

    render() {

        const maipuBackground = {
            backgroundImage: 'url(static/images/jager-maipu-05.jpg)'
        };
        const gcBackground = {
            backgroundImage: 'url(static/images/tigres.jpg)'
        };

        return (
            <section className="box-section" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-9 col-lg-6 order-lg-last">
                            <div className="box-action box-action--right-offset" style={gcBackground}>
                                <div className="box-action__titles-container">
                                    <h4 className="box-action__title">Box Godoy Cruz</h4>
                                    <a href={GODOY_CRUZ_APP_LINK} className="btn btn-primary">¡QUIERO EMPEZAR!</a>
                                </div>
                            </div>
                            <div className="box-action__link">
                                <div className="row">
                                    <div className="col">
                                        <Link to="/godoycruz" className="btn btn-link">Ver Box</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-9 col-lg-6 order-lg-first">
                            <div className="box-action box-action--left-offset" style={maipuBackground}>
                                <div className="box-action__titles-container">
                                    <h4 className="box-action__title">Box Maip&uacute;</h4>
                                    <a href={MAIPU_APP_LINK} className="btn btn-primary">¡QUIERO EMPEZAR!</a>
                                </div>
                            </div>
                            <div className="box-action__link">
                                <div className="row">
                                    <div className="col">
                                        <Link to="/maipu" className="btn btn-link">Ver Box</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BoxSection;
