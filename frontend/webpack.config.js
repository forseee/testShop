const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = webpack;

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode,
    target,
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            '@App': path.resolve(__dirname, 'src/App/'),
            'src': path.resolve(__dirname, 'src/'),
        },
        fallback: {
            path: require.resolve('path-browserify')
        },
    },
    experiments: {
        asyncWebAssembly: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(mode),
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
          })
    ],
    devtool: 'source-map',
    devServer: {
        port: 3002,
        open: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        hot: true,
    }
};