import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Footer.scss'


export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="row align-items-center no-gutters">
                                <div className="footer__title-container">
                                    <img className="img-fluid footer__logo" src="../static/images/crossfitjagerlogo-03.png" alt="Crossfit Jager"/>
                                    <h3>El mejor momento es AHORA</h3>
                                    <h3>El mejor lugar es AC&Aacute;</h3>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6">
                                    <section className="footer__box-section">
                                        <h3>Box J&auml;ger Maipu</h3>
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
                                        <ul className="list-group list-group-horizontal footer__social-list">
                                            <li className="list-group-item list-group-item-action">
                                                <a href="tel:2614166859">
                                                    <i className="fab fa-whatsapp"></i>
                                                </a>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <a href="https://www.instagram.com/crossfitjager/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <a href="https://www.facebook.com/crossfitjager/">
                                                    <i className="fab fa-facebook-square"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-12 col-md-6">
                                    <section className="footer__box-section">
                                        <h3>Box J&auml;ger Godoy Cruz</h3>
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
                                            <div className="row">
                                                <div className="col">
                                                    <a href="tel:2614166859">
                                                        <i className="fab fa-whatsapp"></i>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                <a href="https://www.instagram.com/crossfitjagergc/">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                <a href="https://www.facebook.com/crossfitjagergc/">
                                                        <i className="fab fa-facebook-square"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row no-gutters">
                                <div className="col no-gutters">
                                    <a target="blank" href="https://www.google.com/maps/place/Crossfit+Jager/@-32.980247,-68.7914037,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x967e0cbfee2c9a0b:0x11c9ade047de3920!2sCrossfit+Jager!8m2!3d-32.980247!4d-68.789215!3m4!1s0x967e0cbfee2c9a0b:0x11c9ade047de3920!8m2!3d-32.980247!4d-68.789215">
                                        <img src="../static/images/gmap-maipu.png" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Footer.propTypes = {

}

export default Footer
