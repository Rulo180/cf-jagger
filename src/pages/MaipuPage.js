import React, { Component } from 'react'

import Banner from '../components/Banner';
import Coach from '../components/Coach';
import CoverBox from '../components/CoverBox';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Socials from '../components/Socials';
import {MAIPU_SOCIALS_INFO, MAIPU_APP_LINK} from '../constants';
import data from '../info';


export class MaipuPage extends Component {
    render() {
        return (
            <main>
                <CoverBox actionLink={MAIPU_APP_LINK} />
                <InfoSection separator {...data[4]} />
                <Services />
                <Banner />
                <Coach separator />
                <Socials socials={MAIPU_SOCIALS_INFO} />
            </main>
        )
    }
}

export default MaipuPage;
