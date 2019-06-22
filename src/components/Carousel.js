import React from 'react';

import './Carousel.scss';

const IMAGES = ['jager-maipu-01.jpg', 'jager-maipu-02.jpg', 'jager-maipu-03.jpg', 'jager-maipu-04.jpg', 'jager-maipu-05.jpg', 'jager-maipu-07.jpg', 'jager-maipu-08.jpg', 'jager-maipu-09.jgp', 'jager-maipu-1.jpg', 'jager-maipu-11.jpg', 'jager-maipu-12.jpg', 'jager-maipu-13.jpg', 'jager-maipu-14.jpg', 'jager-maipu-15.jpg', 'jager-maipu-16.jgp'];

class BigImageCarousel extends React.Component {
    render() {
        const bigImageStyle = {
            backgroundImage: 'url(static/images/' + this.props.image + ')'
        }

        return (
            <div className="col-lg-10 carousel__big-image" style={bigImageStyle}></div>
        )
    }
}

class SmallImagesCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.spaceBetweenImagesInPx = 16;
        this.myRef = React.createRef();

        this.state = {
            quantityImagesShowed: 3,
            imageWidth: 0,
            imageHeight: 0,
            sliderWidth: 0,
			actualPosition: 0
        };

        this.resizeListener = this.resizeListener.bind(this);
        this.onClickArrow = this.onClickArrow.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
    }

    onClickImage(idx) {
        return () => {
            this.props.onChangeImage(idx);
        }
    }

    onClickArrow(side) {
        const { images } = this.props;

        return () => {
            if(side === 'left') {
                if(this.state.actualPosition >= 0) return this.props.setCurrentIndex('left');
                this.setState({actualPosition: this.state.actualPosition + 1}, () => this.props.setCurrentIndex('left'));
            } else {
                if(images.length + this.state.actualPosition <= this.state.quantityImagesShowed) return this.props.setCurrentIndex('right');
                this.setState({actualPosition: this.state.actualPosition - 1}, () => this.props.setCurrentIndex('right'));
            }
        }
    }

    resizeListener() {
        const { images } = this.props;
        let quantityImagesShowed = 3;
        let showBigImage = true;

        if(window.innerWidth <= 768) {
            quantityImagesShowed = 1;
            showBigImage = false;
		}
        const node = this.myRef.current;
        const containerImagesWidth = node.offsetWidth;
        const imageWidth = (containerImagesWidth - this.spaceBetweenImagesInPx * (quantityImagesShowed-1)) / quantityImagesShowed;
        const sliderWidth = Math.ceil((imageWidth + this.spaceBetweenImagesInPx) * images.length );
        const imageHeight = imageWidth * 0.66;
        this.setState({imageWidth, imageHeight, sliderWidth, quantityImagesShowed}, () => {
            this.props.changeOnShowBigImage(showBigImage);
        });
    }

    componentDidMount() {
        this.resizeListener();
        window.addEventListener('resize', this.resizeListener);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }

    render () {
        let imagesContainerStyle = {};
        const { images } = this.props;

        if(this.state.sliderWidth > 0) {
            imagesContainerStyle = {
                width: this.state.sliderWidth + 'px',
                marginLeft: (this.state.actualPosition * (this.state.imageWidth + this.spaceBetweenImagesInPx)) + 'px'
            }
        }
        return (
            <div className="col-lg-12">
                <div className="carousel__images-container" ref={this.myRef}>
                    <div className="carousel__arrow-left" onClick={this.onClickArrow('left')}>
						<i className="fas fa-chevron-left"></i>
                    </div>  
                    <div className="row carousel__slider" style={imagesContainerStyle}>
                        <div>
                            {images.map((image, idx) => {
                                let imageStyle = { 
                                    width: this.state.imageWidth + 'px', 
                                    height: this.state.imageHeight + 'px',
                                    marginRight: this.spaceBetweenImagesInPx + 'px',
                                    backgroundImage: 'url(static/images/' + image + ')'
                                };
                                return <div key={idx} style={imageStyle} className={"carousel__image"} onClick={this.onClickImage(idx)}></div>
                            })}
                        </div>
                    </div>
                    <div className="carousel__arrow-right" onClick={this.onClickArrow('right')}>
						<i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			currentIndexImage: props.initialIndex, 
            image: props.images[props.initialIndex],
            showBigImage: true
		};

        this.onChangeImage = this.onChangeImage.bind(this);
        this.changeOnShowBigImage = this.changeOnShowBigImage.bind(this);
        this.setCurrentIndex = this.setCurrentIndex.bind(this);
	}
	
	setCurrentIndex(side) {
        const { images } = this.props;

		if(side === 'left') {
			const nextIdx = this.state.currentIndexImage - 1;
			if(!images[nextIdx]) return;
			this.setState({currentIndexImage: nextIdx});
		} else {
			const nextIdx = this.state.currentIndexImage + 1;
			if(!images[nextIdx]) return;
			this.setState({currentIndexImage: nextIdx});
		}
	}

    changeOnShowBigImage(value) {
        this.setState({showBigImage: value});
    }

    onChangeImage(idx) {
		this.setState({currentIndexImage: idx});
    }

    render() {
        const { images } = this.props;
        let bigImage = null;

        if(this.state.showBigImage) {
			let image = images[this.state.currentIndexImage];
            bigImage = <BigImageCarousel image={image}/>;
        }

        return (
            <div className="carousel">
                <div className="container">
					<div className="row justify-content-md-center">
                        <div className="col-lg-12 carousel__title">
                            <h1>CONOCE NUESTRAS<br />INSTALACIONES</h1>
                        </div>
                        <SmallImagesCarousel images={images} onChangeImage={this.onChangeImage} changeOnShowBigImage={this.changeOnShowBigImage} setCurrentIndex={this.setCurrentIndex}/>
                        {bigImage}
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;