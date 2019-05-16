import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './Navbar.scss';


const Navbar = ({ match }) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img className="navbar__img" src="static/images/crossfitjagerlogo-03.png" alt="Crossfit Jager" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="globalNavbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link navbar__link" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-primary navbar__link navbar__link--border" to="/maipu">
                                Maip&uacute;
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-primary navbar__link navbar__link--border" to="/godoycruz">
                                Godoy Cruz
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar__link" to="#">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {

}

export default Navbar
