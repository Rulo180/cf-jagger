import React from 'react';

import './Home.scss';
import Banner from '../components/Banner';
import BoxSection from '../components/BoxSection';
import FeatureComponent from '../components/FeatureComponent';
import InfoSection from '../components/InfoSection';
import data from '../info';
import Cover from '../components/Cover';
import WhatIs from '../components/WhatIs'; 


const Home = () => {
    return (
        <main>
            <Cover />
            <InfoSection {...data[0]} separator />
            <BoxSection />
            <Banner />
            <WhatIs />
            <InfoSection {...data[1]} separator />
            <FeatureComponent />
            <InfoSection {...data[2]} background={'url(/static/images/tigres.jpg)'} color="white" />
        </main>
    )
}

export default Home;
