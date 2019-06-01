import React, { Component } from 'react'

import Banner from '../components/Banner';
import Coach from '../components/Coach';
import CoverBox from '../components/CoverBox';
import InfoSection from '../components/InfoSection';
import Socials from '../components/Socials';
import {GODOY_CRUZ_SOCIALS_INFO} from '../constants';


export class GodoyCruzPage extends Component {
    render() {
        return (
            <main>
                <CoverBox />
                {/* <InfoSection title={"J&auml;ger Maip&aacute;"} description="Hola a todos" /> */}
                <Banner />
                <Socials socials={GODOY_CRUZ_SOCIALS_INFO}/>
            </main>
        )
    }
}

export default GodoyCruzPage
