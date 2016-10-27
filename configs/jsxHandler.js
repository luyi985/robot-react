const webpack = require('webpack');
module.exports = function(paths) {
	return {
	module: {
		loaders:[
			/*{
				test: /\.js?$/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
			   		presets: ['react', 'es2015']
			  	},
			  	include: paths
			},*/
			{
				test: [/\.jsx?$/,/\.js?$/],
				loader: 'babel',
				query: {
					cacheDirectory: true,
			   		presets: ['react', 'es2015']
			  	},
			  	include: paths
			}
		]
	}
}
}