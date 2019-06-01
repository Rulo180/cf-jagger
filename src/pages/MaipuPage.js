import React, { Component } from 'react'

import Banner from '../components/Banner';
import Coach from '../components/Coach';
import CoverBox from '../components/CoverBox';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Socials from '../components/Socials';
import {MAIPU_SOCIALS_INFO} from '../constants';


export class MaipuPage extends Component {
    render() {
        return (
            <main>
                <CoverBox />
                {/* <InfoSection title={"J&auml;ger Maip&aacute;"} description="Hola a todos" /> */}
                <Services />
                <Banner />
                <Coach separator />
                <Socials socials={MAIPU_SOCIALS_INFO} />
            </main>
        )
    }
}

export default MaipuPage;
