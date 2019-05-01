import React from 'react';

import './BoxAction.scss';

class BoxAction extends React.Component {
    constructor(props) {
        super(props);

        this.side = this.props.side || 'right';
        this.name = this.props.boxName;
        this.image = 'url(static/images/' + this.props.image + ')';
    }

    render() {

        const backgroundColorStyle = {
            marginLeft: (this.side === 'right') ? '15px' : '-15px'
        };

        const imageContainerStyle = {
            backgroundImage: this.image
        };

        return (
            <section className="box-action" style={imageContainerStyle}>
                <div className="container">
                    <div className="box-action__titles-container">
                        <h2 className="box-action__title">{this.name}</h2>
                        <button className="box-action__button">¡QUIERO EMPEZAR!</button>
                    </div>
                    {/* <div className="box-action__link">
                        <div className="box-action__button-wrapper text-center text-white">
                            <div className="box-action__button-color" style={backgroundColorStyle}></div> 
                            <span>VER BOX</span>
                        </div>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default BoxAction;
