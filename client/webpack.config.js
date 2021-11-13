const path = require('path');
const miniCssExtraPlugin = require('mini-css-extract-plugin')
module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        liveReload: true,
    },
    module:{
        rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
             }
            },
            {
             test: /\.scss$/,
             use:[
                 'style-loader',
                 'sass-loader',
                 'css-loader'
             ]
            }
           
        ]
        },
    plugins: [new miniCssExtraPlugin()]
    
}

