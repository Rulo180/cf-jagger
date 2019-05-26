import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Banner from '../components/Banner';
import Coach from '../components/Coach';
import CoverBox from '../components/CoverBox';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Socials from '../components/Socials';


export class BoxPage extends Component {
    render() {
        return (
            <main>
                <CoverBox />
                {/* <InfoSection title={"J&auml;ger Maip&aacute;"} description="Hola a todos" /> */}
                <Services />
                <Banner />
                <Coach separator />
                <Socials />
            </main>
        )
    }
}

BoxPage.propTypes = {

};

export default BoxPage