const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
	return {
	    module: {
		    loaders: [
			        // Extract CSS during build
			   	{
			        test: /\.css$/,
			        loader: ExtractTextPlugin.extract('style','css'),
			        include: paths
				}, 
				{
			        test: /\.scss$/,
			        loader: ExtractTextPlugin.extract('css!sass'),
			        include: paths
				}
			]
		},
		plugins: [
	      // Output extracted CSS to a file
	      new ExtractTextPlugin('[name].[chunkhash].css')
	    ]
	}; 
}