const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'animal-api.js',
        library: 'AnimalApi',
        libraryTarget: 'var'
    }
};