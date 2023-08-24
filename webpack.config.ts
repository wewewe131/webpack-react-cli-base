import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackOptionsNormalized } from 'webpack';
const config: WebpackOptionsNormalized =
{
    entry: {
        main: {
            import: ['./main.tsx']
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Template',
            template: './index.html',
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
        parser: {},
        defaultRules: [],
        generator: {},
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        port: 3000,
        hot: true,
        static: {
            publicPath: '/',
            watch: true,
            directory: path.resolve(__dirname, 'dist'),
        }
    },
    devtool: false,
    cache: false,
    experiments: {},
    externals: '',
    externalsPresets: {},
    infrastructureLogging: {},
    node: false,
    resolveLoader: {},
    snapshot: {},
    stats: false,
    watchOptions: {}
};
module.exports = config