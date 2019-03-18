const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: (url, resourcePath, context) => {
                                return (url === 'index.html') ? '../' + url : '../pages/' + url;
                            },
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../static/images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};