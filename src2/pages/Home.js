import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import InfoComponent from '../components/InfoComponent';
import data from '../info';
import './Home.scss';


const Home = () => (
    <Router>
        <Route path="/" component={() => (<InfoComponent {...data[0]} />)} />
        <Route path="/" component={() => (<InfoComponent {...data[1]} />)} />
        <Route path="/" component={() => (<InfoComponent {...data[2]} />)} />
        <Route path="/" component={() => (<InfoComponent {...data[3]} />)} />
    </Router>
);

export default Home;
