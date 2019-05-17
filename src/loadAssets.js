//We need to require html files to copy then on dist folder (using 'file-loader' with webpack)
const loadAssets = () => {
    const images = require.context('./static/images', true, /\.(png|jpg)$/);
    const html = require.context('./static', true, /\.(html)$/);
}

export default loadAssets;