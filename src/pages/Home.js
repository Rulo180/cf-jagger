import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Home.scss';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import BoxSection from '../components/BoxSection';
import FeatureComponent from '../components/FeatureComponent';
import InfoSection from '../components/InfoSection';
import data from '../info';
import Cover from '../components/Cover';
import WhatIs from '../components/WhatIs'; 
import BoxPage from '../components/BoxPage';

const Home = () => (
    <Router>
        <Layout>
            <Route path="/maipu" component={() => <BoxPage place='maipu'/>} />
            <Route path="/" exact component={Cover} />
            <Route path="/" exact component={() => (<InfoSection {...data[0]} separator />)} />
            <Route path="/" exact component={BoxSection} />
            <Route path="/" exact component={Banner}/>
            <Route path="/" exact component={WhatIs} />
            <Route path="/" exact component={() => (<InfoSection {...data[1]} separator />)} />
            <Route path="/" exact component={FeatureComponent} />
            <Route path="/" exact component={() => (<InfoSection {...data[2]} background={'url(/static/images/tigres.jpg)'} color="white" />)} />
        </Layout>
    </Router>
);

export default Home;
