const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const pkg = require('./package.json');

const APP_DIR = path.resolve(__dirname, './src');
const LIB_NAME= pkg.name;

module.exports = {
    devtool: 'source-map',
    entry: [APP_DIR],
    output:{
        filename:"index.js",
        library: LIB_NAME,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            }
        },
        {
            test: /\.(css)$/,
            use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
            ]
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename:"styles.css"})
    ],

    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};