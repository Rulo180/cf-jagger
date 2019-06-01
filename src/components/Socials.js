import React from 'react';
import { Link } from 'react-router-dom';

import './Socials.scss';


const Socials = ({ socials }) => {

    let socialLinks = [];

    if (socials) {
        socialLinks = socials.map((social) => (
            <div className="socials__social-item" key={social.name}>
                <a href={social.link} className="socials__link" target="blank">
                    <i className={social.iconClass}></i>
                </a>
            </div>
        ));
    }

    return (
        <section className="socials">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-8">
                        <h3 className="socials__title">Seguinos en nuestras <b>redes</b></h3>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="socials__social-container">
                            {socialLinks}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Socials;
