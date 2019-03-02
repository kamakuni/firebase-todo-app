const webpack = require('webpack')
require('dotenv').config()

const dotenvPlugin = new webpack.DefinePlugin({
    'process.env': {
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
        'MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
    }
});

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js', 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        dotenvPlugin
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
