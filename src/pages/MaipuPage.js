import React, { Component } from 'react'

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Coach from '../components/Coach';
import CoverBox from '../components/CoverBox';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Socials from '../components/Socials';

import {
    MAIPU_SOCIALS_INFO,
    MAIPU_APP_LINK,
    MAIPU_CAROUSEL_IMAGES,
} from '../constants';
import data from '../info';


export class MaipuPage extends Component {
    render() {
        return (
            <main>
                <CoverBox actionLink={MAIPU_APP_LINK} box="maipu" />
                <InfoSection separator {...data[4]} />
                <Services />
                <Banner />
                <Coach separator />
                <Socials socials={MAIPU_SOCIALS_INFO} />
                <Carousel images={MAIPU_CAROUSEL_IMAGES} initialIndex={0} />
            </main>
        )
    }
}

export default MaipuPage;
