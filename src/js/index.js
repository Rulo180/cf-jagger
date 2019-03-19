import _ from 'lodash';
import loadAssets from './loadAssets.js';
import carousel from './carousel.js';

//We need to require html and image files to copy then on dist folder (using 'file-loader' with webpack)
loadAssets();