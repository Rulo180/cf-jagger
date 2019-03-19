import React from 'react';
import ReactDOM from 'react-dom';

const styleArrow = {
    zIndex: 1000,
    backgroundColor: '#e3e3e3'
};

const styleSliderContainer = {
    zIndex: 900, 
    overflow: 'hidden'
};

class SliderContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            widthSlider: 0,
            position: 0,
            showingImages: 0
        };

        this.singleImageCointainerWidth = 0;

        this.onClickArrow = this.onClickArrow.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
        this.calculateDimensions = this.calculateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.calculateDimensions);
        this.calculateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.calculateDimensions);
    }

    _getQuantityShowinImages(widthSliderContainer) {
        if(widthSliderContainer > 639) return 5;
        else if(widthSliderContainer >= 480) return 4;
        else if(widthSliderContainer >= 360) return 3;
        else if(widthSliderContainer >= 290) return 2;
        else return 1;
    }
    
    calculateDimensions() {
        const widthSliderContainer = ReactDOM.findDOMNode(this.refs.slider_container).getBoundingClientRect().width;
        const showingImages = this._getQuantityShowinImages(widthSliderContainer);
        this.singleImageCointainerWidth = widthSliderContainer / showingImages;
        const widthSlider = this.singleImageCointainerWidth * this.props.images.length;
        this.setState({widthSlider, showingImages});
    }

    onClickImage(idx) {
        return () => {
            this.props.onClickImage(idx);
        }
    }

    onClickArrow(side) {
        return () => {
            if(side === 'right' && this.state.position >= 0) return;
            if(side === 'left' && (this.state.position <= this.state.showingImages - this.props.images.length)) return;
            const value = (side === 'left') ? -1 : 1;
            this.setState({position: this.state.position + value});
        }        
    }

    render() {
        let containerImages;
        if(this.state.widthSlider) {
            const imgs = this.props.images.map((img, idx) => {
                return (
                    <div className="col" onClick={this.onClickImage(idx)}>
                        <img className="col" src={'../static/images/' + img} alt=""/>
                    </div>
                );
            });

            containerImages = (
                <div
                    className="row" 
                    style={{
                        width: this.state.widthSlider + 'px', 
                        transform: 'translateX('+ this.state.position * this.singleImageCointainerWidth + 'px)', 
                        transition: 'all 1s'
                    }}>
                    {imgs}
                </div>
            );
            
        }
        return (
            <div className="row">
                <div className="col-2" onClick={this.onClickArrow('right')} style={styleArrow}>Izq</div>
                <div ref="slider_container" className="col-8" style={styleSliderContainer}>
                    {containerImages}
                </div>
                <div className="col-2" onClick={this.onClickArrow('left')} style={styleArrow}>Der</div>
            </div>
        );
    }
}

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            images: ['leon.jpg', 'tigres.jpg', 'leon.jpg', 'leon.jpg', 'tigres.jpg', 'leon.jpg'],
            selectedImage: 0
        };

        this.onClickImage = this.onClickImage.bind(this);
    }

    onClickImage(idx) {
        this.setState({selectedImage: idx});
    }

    render() {
        return (
			<div className="pictures__images-container">
                <SliderContainer images={this.state.images} onClickImage={this.onClickImage}/>
				<div>
                    <img src={'../static/images/' + this.state.images[this.state.selectedImage]} alt=""/>
                </div>
			</div>
        );
    }
}

ReactDOM.render(<Carousel />,  document.getElementById('carousel'));