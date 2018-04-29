const path = require('path');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
               test: /\.(jpe?g|png|gif|svg)$/i,
               use: [
                 'url-loader?limit=10000',
                 'img-loader'
               ]
            }
        ]
    },
};
