import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import MaipuPage from './pages/MaipuPage';
import GodoyCruzPage from './pages/GodoyCruzPage';


const App = () => (
    <Router>
        <Layout>
			<Switch>
	            <Route path="/maipu" component={MaipuPage} />
	            <Route path="/godoycruz" component={GodoyCruzPage} />
				<Route exact path="/" component={Home} />
			</Switch>
        </Layout>
    </Router>
);

export default App;
