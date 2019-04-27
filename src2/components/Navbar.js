import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './Navbar.scss';


const Navbar = ({ match }) => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
            <div class="container">
                <NavLink class="navbar-brand" to="/">
                    <img class="navbar__img" src="static/images/crossfitjagerlogo-03.png" alt="Crossfit Jager" />
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#globalNavbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="globalNavbarContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NavLink class="nav-link navbar__link" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="btn btn-outline-primary navbar__link navbar__link--border" to="/maipu">
                                Maipu
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="btn btn-outline-primary navbar__link navbar__link--border" to="/godoycruz">
                                Godoy Cruz
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link navbar__link" to="#">
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
