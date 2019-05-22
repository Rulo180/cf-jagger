import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import BoxPage from './pages/BoxPage';


const App = () => (
    <Router>
        <Layout>
			<Switch>
	            <Route path="/maipu" component={() => <BoxPage place='maipu'/>} />
				<Route exact path="/" component={Home} />
			</Switch>
        </Layout>
    </Router>
);

export default App;
