import React from 'react';
import ReactDOM from 'react-dom';


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
        if(widthSliderContainer > 639) return 4;
        else if(widthSliderContainer >= 480) return 3;
        else if(widthSliderContainer >= 360) return 2;
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

    onClickArrow(direction) {
        return () => {
            if(direction === 'right' && this.state.position >= 0) return;
            if(direction === 'left' && (this.state.position <= this.state.showingImages - this.props.images.length)) return;
            const value = (direction === 'left') ? -1 : 1;
            this.setState({position: this.state.position + value});
        }        
    }

    render() {
        let containerImages;
        if(this.state.widthSlider) {
            const imgs = this.props.images.map((img, idx) => {
                return (
                    <div className="col pictures__small-images" onClick={this.onClickImage(idx)} style={{
                        backgroundImage: "url('../static/images/" + img + "')"
                    }}></div>
                );
            });

            containerImages = (
                <div className="row pictures__container-images" 
                    style={{
                        width: this.state.widthSlider + 'px', 
                        transform: 'translateX('+ this.state.position * this.singleImageCointainerWidth + 'px)'
                    }}>
                    {imgs}
                </div>
            );
            
        }

        return (
            <div className="row">
                <div className="col-2 text-center pictures__slider-arrow">
                    <i class="fas fa-angle-left pictures__arrow-icon" onClick={this.onClickArrow('right')}></i>
                </div>
                <div ref="slider_container" className="col-8 pictures__slider-container">
                    {containerImages}
                </div>
                <div className="col-2 text-center pictures__slider-arrow">
                    <i class="fas fa-angle-right pictures__arrow-icon" onClick={this.onClickArrow('left')}></i>
                </div>
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
                <div className="pictures__primary-image-container">
                    <div className="pictures__primary-image" 
                        style={{
                            backgroundImage: "url('"+'../static/images/' + this.state.images[this.state.selectedImage]+"')"
                        }}
                    ></div>
                </div>
			</div>
        );
    }
}

ReactDOM.render(<Carousel />,  document.getElementById('carousel'));