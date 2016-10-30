
const webpack = require('webpack');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');


module.exports = function(paths) {
	return {
		    plugins: [
		      new PurifyCSSPlugin({
		        basePath: process.cwd(),
		        // `paths` is used to point PurifyCSS to files not
		        // visible to Webpack. You can pass glob patterns
		        // to it.
		        paths: paths
			})
		]
	};
}