const webpack= require('webpack');

module.exports = function(path){
return {
		module: {
			loaders:[
				/*{
					test: /\.(jpg|png)$/,
					loader: 'url?limit=25000',
					include: path
				},
				{
					test: /\.(jpg|png)$/,
					loader: 'file?name=[path][name].[hash].[ext]',
					include: path
				},
				{
				  	test: /\.svg$/,
				  	loader: 'file',
				  	include: path
				}*/
				{
			        test: /\.(jpe?g|png|gif|svg)$/i,
			        loaders: [
			            'file?hash=sha512&digest=hex&name=[hash].[ext]',
			            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			        ]
			    }
			]
		}
	}
}