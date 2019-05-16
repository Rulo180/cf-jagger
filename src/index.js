import React from 'react';
import ReactDOM from 'react-dom';

import loadAssets from './loadAssets.js';

import Home from './pages/Home';

//We need to require html and image files to copy then on dist folder (using 'file-loader' with webpack)
loadAssets();

ReactDOM.render(<Home />, document.getElementById('app'));