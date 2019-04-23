import React from 'react';
import FooComponent from '../components/FooComponent';

import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="home-style">
                    Home: <FooComponent/>
                </h1>
                <img src="static/images/leon.jpg"/>
            </div>
        )
    }
}

export default Home;