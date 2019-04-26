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
            <div className="box-action">
                <div className="box-action__image-contanier" style={imageContainerStyle}>
                    <h2 className="text-center text-white">{this.name}</h2>
                    <div className="text-center">
                        <button className="box-action__button w-75 pt-2 pb-2 border-0 rounded text-white">¡QUIERO EMPEZAR!</button>
                    </div>
                </div>
                <div className="box-action__link">
                    <div className="box-action__button-wrapper text-center text-white">
                        <div className="box-action__button-color" style={backgroundColorStyle}></div> 
                        <span>VER BOX</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxAction;