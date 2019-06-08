import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Footer.scss'


export class Footer extends Component {
    render() {
        const { footerRef } = this.props;

        return (
            <section className="footer" ref={footerRef}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-md-10 col-lg-6">
                            <div className="row">
                                <div className="footer__title-container col-12">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-lg-8">
                                            <img className="img-fluid footer__logo" src="../static/images/crossfitjagerlogo-03.png" alt="Crossfit Jager"/>
                                        </div>
                                        <div className="col-md-6 col-lg-12">
                                            <h4>El mejor momento es AHORA</h4>
                                            <h4>El mejor lugar es AC&Aacute;</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center no-gutters">
                                <div className="col-12 col-md-6">
                                    <section className="footer__box-section">
                                        <h4 className="footer__box-title">Box J&auml;ger Maip&uacute;</h4>
                                        <ul className="list-group footer__info-list">
                                            <li className="list-group-item">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span className="footer__info-list-text">
                                                    Ozamis 457, Maip&uacute;
                                                </span>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fas fa-phone"></i>
                                                <span className="footer__info-list-text">
                                                    261 416 6859
                                                </span>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fas fa-envelope"></i>
                                                <span className="footer__info-list-text">
                                                    info@crossfitjagger.com
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="footer__social-list">
                                            <a href="tel:2614166859" target="blank">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                            <a href="https://www.instagram.com/crossfitjager/" target="blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="https://www.facebook.com/crossfitjager/" target="blank">
                                                <i className="fab fa-facebook-square"></i>
                                            </a>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-12 col-md-6">
                                    <section className="footer__box-section">
                                        <h4 className="footer__box-title">Box J&auml;ger Godoy Cruz</h4>
                                        <ul className="list-group footer__info-list">
                                            <li className="list-group-item">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span className="footer__info-list-text">
                                                    Av. San Mart&iacute;n Sur 3230
                                                </span>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fas fa-phone"></i>
                                                <span className="footer__info-list-text">
                                                    261 155547309
                                                </span>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fas fa-envelope"></i>
                                                <span className="footer__info-list-text">
                                                    info@crossfitjagger.com
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="footer__social-list">
                                            <a href="tel:2614166859" target="blank">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                            <a href="https://www.instagram.com/crossfitjagergc/" target="blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="https://www.facebook.com/crossfitjagergc/" target="blank">
                                                <i className="fab fa-facebook-square"></i>
                                            </a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0">
                            <div className="row justify-content-center no-gutters">
                                <div className="col col-md-9 col-lg-12 no-gutters">
                                    <a target="blank" href="https://www.google.com/maps/place/Crossfit+Jager/@-32.980247,-68.7914037,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x967e0cbfee2c9a0b:0x11c9ade047de3920!2sCrossfit+Jager!8m2!3d-32.980247!4d-68.789215!3m4!1s0x967e0cbfee2c9a0b:0x11c9ade047de3920!8m2!3d-32.980247!4d-68.789215">
                                        <img src="../static/images/gmap-maipu.png" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Footer.propTypes = {

}

export default Footer
