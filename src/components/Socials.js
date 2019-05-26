import React from 'react';
import { Link } from 'react-router-dom';

import './Socials.scss';


const Socials = props => {
    return (
        <section class="socials">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-8">
                        <h3 className="socials__title">Seguinos en nuestras <b>redes</b></h3>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row text-lg-right">
                            <div className="col">
                                <a href="tel:2614166859" className="socials__link" target="blank">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://www.instagram.com/crossfitjager/" className="socials__link" target="blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://www.facebook.com/crossfitjager/" className="socials__link" target="blank">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Socials;
