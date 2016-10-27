const webpack= require('webpack');

module.exports = function(path){
return {
		module: {
			loaders:[
				{
					test: /\.ttf$|\.eot$|\.woff$/,
					loader: 'file',
					query: {
					  name: 'font/[hash].[ext]'
					},
					include: path
				}

			]
		}
	}
}