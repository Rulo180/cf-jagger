import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Home.scss';
import Banner from '../components/Banner';
import BoxAction from '../components/BoxAction';
import FeatureComponent from '../components/FeatureComponent';
import Footer from '../components/Footer';
import InfoComponent from '../components/InfoComponent';
import Navbar from '../components/Navbar';
import data from '../info';


const Home = () => (
    <Router>
        <Route path="/" component={Navbar} />
        <Route path="/" component={() => (<InfoComponent {...data[0]} />)} />
        <Route path="/" component={() => (<InfoComponent {...data[1]} />)} />
        <Route path="/" component={Banner}/>
        <Route path="/" component={() => (<InfoComponent {...data[2]} />)} />
        <Route path="/" component={() => (<InfoComponent {...data[3]} />)} />
        <Route path="/" component={FeatureComponent} />
        <Route path="/" component={() => (<BoxAction boxName="Box Maipú" image="leon.jpg" side="right"/>)} />
        <Route path="/" component={() => (<BoxAction boxName="Box Godoy Cruz" image="leon.jpg" side="left"/>)} />
        <Route path="/" component={Footer} />
    </Router>
);

export default Home;
