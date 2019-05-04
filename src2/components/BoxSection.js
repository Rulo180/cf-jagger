import React from 'react';

import './BoxSection.scss';


class BoxSection extends React.Component {
    constructor(props) {
        super(props);

        this.side = this.props.side || 'right';
        this.name = this.props.boxName;
        this.image = 'url(static/images/' + this.props.image + ')';
    }

    render() {

        const imageContainerStyle = {
            backgroundImage: 'url(static/images/tigres.jpg)'
        };

        return (
            <section className="box-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="box-action box-action--left-offset" style={imageContainerStyle}>
                                <div className="box-action__titles-container">
                                    <h4 className="box-action__title">Box Maip&uacute;</h4>
                                    <button className="btn btn-primary">¡QUIERO EMPEZAR!</button>
                                </div>
                            </div>
                            <div className="box-action__link">
                                <div className="row">
                                    <div className="col">
                                        <a href="/maipu" className="btn btn-link">Ver Box</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="box-action box-action--right-offset" style={imageContainerStyle}>
                                <div className="box-action__titles-container">
                                    <h4 className="box-action__title">Box Godoy Cruz</h4>
                                    <button className="btn btn-primary">¡QUIERO EMPEZAR!</button>
                                </div>
                            </div>
                            <div className="box-action__link mb-0">
                                <div className="row">
                                    <div className="col">
                                        <a href="/godoycruz" className="btn btn-link">Ver Box</a>
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
