import React from 'react';

import Swiper from 'swiper';

import './Carousel.scss';

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
            imageHeight: 0
        };

		this.swiper = null;

        this.resizeListener = this.resizeListener.bind(this);
        //this.onClickArrow = this.onClickArrow.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
    }

    onClickImage(idx) {
        return () => {
            this.props.onChangeImage(idx);
        }
    }

    resizeListener() {
		const node = this.myRef.current;
		console.log("node", node.offsetWidth);
		const imageHeight = node.offsetWidth * 0.75;
        this.setState({imageHeight});
    }

    componentDidMount() {
        this.resizeListener();
		window.addEventListener('resize', this.resizeListener);
		
		this.swiper = new Swiper('.swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }

    render () {
		const { images } = this.props;
		
        return (
            <div className="col-lg-10 col-xl-8" ref={this.myRef} style={{height: this.state.imageHeight + 'px'}}>	
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{images.map((image, idx) => {
							let imageStyle = { 
								backgroundImage: 'url(static/images/' + image + ')',
								backgroundPosition: 'center',
								backgroundSize: 'cover' ,
								backgroundRepeat: 'no-repeat'
							};
							return <div key={image} className="swiper-slide" style={imageStyle}></div>;
						})}
					</div>
					<div className="swiper-button-next swiper-button-white"></div>
					<div className="swiper-button-prev swiper-button-white"></div>
				</div>
            </div>
        )
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);
	}
	
    render() {
        const { images } = this.props;

        return (
            <div className="carousel">
                <div className="container">
					<div className="row justify-content-md-center">
						<div className="col-lg-12 carousel__title">
                            <h1>CONOCE NUESTRAS<br />INSTALACIONES</h1>
                        </div>
                        <SmallImagesCarousel images={images} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;