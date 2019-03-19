const path = require('path');

module.exports = {
    entry: {
        main: './src/js/index.js',
        carousel: './src/js/carousel.js'
    },
    output: {
        filename: '[name].js',
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
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            }
        ]
    }
};