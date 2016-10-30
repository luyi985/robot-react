const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const DevServer = require('./configs/devserver');
const setupCss = require('./configs/setupCss');
const optimize = require('./configs/optimize');
const freevariable = require('./configs/freevariable');
const extractBundle=require('./configs/extractBundle');
const clean=require('./configs/clean');
const extractCss=require('./configs/extractCss');
const purify= require('./configs/purify');
const jsxHandler= require('./configs/jsxHandler');
const imgHandler= require('./configs/imgHandler');
const fontsHandler= require('./configs/fontsHandler');

const PATHS = {
	app: path.join(__dirname, 'src'),
	style: [
		path.join(__dirname, 'node_modules', 'purecss'),
		path.join(__dirname, 'src', 'main.scss')
	],
    img: path.join(__dirname,'src','images'),
    fonts: path.join(__dirname,'src','fonts'),
	build: path.join(__dirname, 'build')
};


const common={
	entry: {
		style: PATHS.style,
		app:PATHS.app,
		vendor: ['react','react-dom']
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: "./template.html"
		})
	]
}

var config;

console.log(process.env.npm_lifecycle_event);

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
    	common,
    	{
    		devtool: "source-map",
    		output:{
    			path: PATHS.build,
          		filename: '[name].[chunkhash].js',
          		// This is used for require.ensure. The setup
          		// will work without but this is useful to set.
          		chunkFilename: '[chunkhash].js'
    		}
    	},
    	jsxHandler(PATHS.app),
    	clean(PATHS.build),
    	freevariable(
    		'process.env.NODE_ENV',
        	'production'	
    	),
    	extractBundle({
    		name: "vendor",
    		entries: ['react','react-dom']
    	}),
    	optimize(),
    	extractCss(PATHS.style),
    	purify([PATHS.app]),
        imgHandler(PATHS.img),
        fontsHandler(PATHS.fonts)
    );
    break;
  default:
    config = merge(
    	common,
      	{
        	devtool: 'eval-source-map'
		},
		jsxHandler(PATHS.app),
    	setupCss(PATHS.style),
        imgHandler(PATHS.img),
        fontsHandler(PATHS.fonts),
    	DevServer({
    		host: process.env.HOST,
        	port: process.env.PORT
    	})
    );
}

console.dir(config);
module.exports = validate(config);
