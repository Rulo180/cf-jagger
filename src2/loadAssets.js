//We need to require html files to copy then on dist folder (using 'file-loader' with webpack)
const loadAssets = () => {
    // const pages = require.context('../pages', true, /\.(html)$/);
    const images = require.context('./static/images', true, /\.(png|jpg)$/);
    // require('../index.html');
}

export default loadAssets;