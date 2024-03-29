const path = require('path');

module.exports = {
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../dist/static/images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../dist/',
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
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader','sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    watch: true
};