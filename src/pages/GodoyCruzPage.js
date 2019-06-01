import React, { Component } from 'react'

import Banner from '../components/Banner';
import Coach from '../components/Coach';
import CoverBox from '../components/CoverBox';
import InfoSection from '../components/InfoSection';
import Socials from '../components/Socials';


export class GodoyCruzPage extends Component {
    render() {
        return (
            <main>
                <CoverBox />
                {/* <InfoSection title={"J&auml;ger Maip&aacute;"} description="Hola a todos" /> */}
                <Banner />
                <Socials />
            </main>
        )
    }
}

export default GodoyCruzPage
