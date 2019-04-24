import React from 'react';
import InfoComponent from '../components/InfoComponent';
import data from '../info';

import './Home.scss';

const Home = () => (
    <React.Fragment>
        <InfoComponent {...data[0]} />
        <InfoComponent {...data[1]} />
        <InfoComponent {...data[2]} />
        <InfoComponent {...data[3]} />
    </React.Fragment>
);

export default Home;