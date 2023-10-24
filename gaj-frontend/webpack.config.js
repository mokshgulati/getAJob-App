const path = require('path');
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        allowedHosts: "all",
        compress: true,
        historyApiFallback: true,
        port: PORT,
        static: {
            directory: DIST_DIR
        }
    }
};