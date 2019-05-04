import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Home.scss';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import BoxSection from '../components/BoxSection';
import FeatureComponent from '../components/FeatureComponent';
import InfoSection from '../components/InfoSection';
import data from '../info';
import Cover from '../components/Cover';


const Home = () => (
    <Router>
        <Layout>
            <Route path="/" component={Cover} />
            <Route path="/" component={() => (<InfoSection {...data[0]} separator />)} />
            <Route path="/" component={BoxSection} />
            <Route path="/" component={Banner}/>
            {/* <Route path="/" component={() => (<InfoSection {...data[3]} background="gray" />)} /> */}
            <Route path="/" component={() => (<InfoSection {...data[1]} separator />)} />
            <Route path="/" component={FeatureComponent} />
            <Route path="/" component={() => (<InfoSection {...data[2]} background={'url(/static/images/tigres.jpg)'} color="white" />)} />
        </Layout>
    </Router>
);

export default Home;
