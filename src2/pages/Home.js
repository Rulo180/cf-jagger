import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Home.scss';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import BoxSection from '../components/BoxSection';
import FeatureComponent from '../components/FeatureComponent';
import InfoComponent from '../components/InfoComponent';
import data from '../info';
import Cover from '../components/Cover';


const Home = () => (
    <Router>
        <Layout>
            <Route path="/" component={Cover} />
            <Route path="/" component={() => (<InfoComponent {...data[0]} />)} />
            <Route path="/" component={BoxSection} />
            <Route path="/" component={Banner}/>
            <Route path="/" component={() => (<InfoComponent {...data[3]} />)} />
            <Route path="/" component={() => (<InfoComponent {...data[1]} />)} />
            <Route path="/" component={FeatureComponent} />
            <Route path="/" component={() => (<InfoComponent {...data[2]} />)} />
        </Layout>
    </Router>
);

export default Home;
