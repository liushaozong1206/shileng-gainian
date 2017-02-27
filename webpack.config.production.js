var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TEM_PATH = path.resolve(LIBS_PATH, 'template');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx'),
        vendors: ['es5-shim', 'es5-shim/es5-sham', 'react', 'react-dom']
    },
    output: {
        path: DIST_PATH,
        publicPath: '../',
        filename: 'js/[name]-[hash:8].js'
    },
    module: {
        preLoader: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'eslint',
                include: SRC_PATH
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel',
                include: SRC_PATH
            }, {
                test: /\.(svg|gif|png|jpg)$/,
                loader: 'url-loader?limit=(1024*8)&name=img/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(swf|mp4|ogv|webm)$/,
                loader: 'file-loader?name=video/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(mp3|ogg|wav|m4a)$/,
                loader: 'file-loader?name=audio/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(woff|eot|ttf)$/,
                loader: 'file-loader?name=font/[name]-[hash:8].[ext]',
                include: SRC_PATH
            }, {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
                include: SRC_PATH
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    externals: {
        zepto: '$',
        jquery: '$'
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),*/
        new CleanWebpackPlugin([DIST_PATH], {
            root: '',
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: 'zepto' || 'jquery',
            zepto: 'zepto',
            jQuery: 'jquery',
            'window.zepto': 'zepto',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("css/[name]-[hash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            filename: "js/[name]-[hash:8].js",
            name: "vendors"
        }),
        new HtmlwebpackPlugin({
            title: '蓝港互动—蓝港游戏 用心制作',
            keywords: '蓝港,蓝港互动,LINEKONG,8864,8864游戏平台,游戏公司,手游公司,手机游戏公司,游戏,游戏中心,游戏平台,手游,手机游戏,手机网游,3D,3D手游,3D网游,iOS游戏,苹果游戏,Android游戏,安卓游戏,Windows Phone游戏,蜀山战纪,蜀山战纪之剑侠传奇,王者战魂,王者之剑2,十万个冷笑话,芈月传,王者之剑,苍穹之剑,神之刃,黎明之光,三国演义,西游记,佣兵天下,倚天剑与屠龙刀,蓝港游戏中心,蓝港发行,手机游戏发行,蓝港研发,手机游戏研发,蓝港帐号,蓝港客服,蓝港商务,蓝港合作,蓝港招聘,发行,研发,帐号,客服,商务,合作,招聘',
            description: '蓝港互动是中国知名的互动娱乐内容平台商。2007年成立，连续推出“蓝港三剑”及《十万个冷笑话》《蜀山战纪之剑侠传奇》等多款精品移动游戏，迅速成长为中国移动游戏领域最具影响力的公司之一。上市以来，蓝港互动布局全面升级，从移动游戏拓展至影业和主机，并开始构建“影漫游三位一体”的新娱乐生态。',
            filepath: DIST_PATH,
            template: path.resolve(TEM_PATH, 'index-production.html'),
            chunks: ['index', 'vendors'],
            filename: 'html/index.html',
            inject: 'body'
        })
    ]
};